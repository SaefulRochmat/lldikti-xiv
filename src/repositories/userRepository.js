/**
 * User Repository - Data Access Layer
 */
import prisma from '@/lib/prisma';

export const userRepository = {
  /**
   * Find user by email
   */
  async findByEmail(email) {
    return await prisma.user.findUnique({
      where: { email },
    });
  },

  /**
   * Find user by ID
   */
  async findById(id) {
    return await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
      },
    });
  },

  /**
   * Create new user
   */
  async create(data) {
    return await prisma.user.create({
      data,
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
      },
    });
  },
};
