/**
 * Authentication Service - Business Logic
 */
import bcrypt from 'bcryptjs';
import { userRepository } from '@/repositories/userRepository';
import { sessionRepository } from '@/repositories/sessionRepository';

const SESSION_EXPIRY_HOURS = parseInt(process.env.SESSION_EXPIRY_HOURS || '24', 10);

export const authService = {
  /**
   * Login user
   */
  async login(email, password) {
    // Find user
    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Email atau password salah');
    }

    // Verify password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new Error('Email atau password salah');
    }

    // Generate session token
    const token = this.generateToken();
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + SESSION_EXPIRY_HOURS);

    // Create session
    await sessionRepository.create(user.id, token, expiresAt);

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    };
  },

  /**
   * Logout user
   */
  async logout(token) {
    await sessionRepository.delete(token);
  },

  /**
   * Verify session
   */
  async verifySession(token) {
    if (!token) {
      return null;
    }

    const session = await sessionRepository.findByToken(token);
    if (!session) {
      return null;
    }

    // Check if expired
    if (new Date() > session.expiresAt) {
      await sessionRepository.delete(token);
      return null;
    }

    // Get user
    const user = await userRepository.findById(session.userId);
    return user;
  },

  /**
   * Generate random token
   */
  generateToken() {
    return Buffer.from(
      `${Date.now()}-${Math.random().toString(36)}`
    ).toString('base64');
  },

  /**
   * Hash password
   */
  async hashPassword(password) {
    return await bcrypt.hash(password, 10);
  },
};
