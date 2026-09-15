/**
 * Contact Repository - Data Access Layer
 */
import prisma from '@/lib/prisma';

export const contactRepository = {
  /**
   * Create contact message
   */
  async create(data) {
    return await prisma.contactMessage.create({
      data: {
        nama: data.nama,
        email: data.email,
        pesan: data.pesan,
        status: 'unread',
      },
    });
  },

  /**
   * Get all messages (for admin)
   */
  async findAll(options = {}) {
    const { skip = 0, take = 50, status } = options;
    
    const where = status === 'read'
      ? { status: { in: ['read', 'replied'] } }
      : status
        ? { status }
        : {};
    
    return await prisma.contactMessage.findMany({
      where,
      skip,
      take,
      orderBy: { createdAt: 'desc' },
    });
  },

  /**
   * Update message status
   */
  async updateStatus(id, status) {
    return await prisma.contactMessage.update({
      where: { id },
      data: { status },
    });
  },

  async findById(id) {
    return await prisma.contactMessage.findUnique({ where: { id } });
  },

  /**
   * Count messages by status
   */
  async countByStatus(status) {
    return await prisma.contactMessage.count({
      where: { status },
    });
  },
};
