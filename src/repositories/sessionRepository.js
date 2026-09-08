/**
 * Session Repository - Data Access Layer
 */
import prisma from '@/lib/prisma';

export const sessionRepository = {
  /**
   * Create session
   */
  async create(userId, token, expiresAt) {
    return await prisma.session.create({
      data: {
        userId,
        token,
        expiresAt,
      },
    });
  },

  /**
   * Find session by token
   */
  async findByToken(token) {
    return await prisma.session.findUnique({
      where: { token },
    });
  },

  /**
   * Delete session
   */
  async delete(token) {
    return await prisma.session.delete({
      where: { token },
    });
  },

  /**
   * Delete all expired sessions
   */
  async deleteExpired() {
    return await prisma.session.deleteMany({
      where: {
        expiresAt: {
          lt: new Date(),
        },
      },
    });
  },

  /**
   * Delete all user sessions
   */
  async deleteByUserId(userId) {
    return await prisma.session.deleteMany({
      where: { userId },
    });
  },
};
