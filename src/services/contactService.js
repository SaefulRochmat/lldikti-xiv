/**
 * Contact Service - Business Logic
 */
import { contactRepository } from '@/repositories/contactRepository';
import { contactSchema } from '@/lib/validations';

export const contactService = {
  /**
   * Submit contact message
   */
  async submitMessage(data) {
    // Validate data
    const validated = contactSchema.parse(data);

    // Save to database
    const message = await contactRepository.create(validated);

    return message;
  },

  /**
   * Get all messages (admin only)
   */
  async getAllMessages(page = 1, perPage = 50, status = null) {
    const skip = (page - 1) * perPage;
    
    const messages = await contactRepository.findAll({
      skip,
      take: perPage,
      status,
    });

    return messages;
  },

  /**
   * Update message status
   */
  async updateStatus(id, status) {
    if (!['unread', 'read', 'replied'].includes(status)) {
      throw new Error('Status tidak valid');
    }

    return await contactRepository.updateStatus(id, status);
  },

  async getMessage(id) {
    return await contactRepository.findById(id);
  },

  /**
   * Get message counts
   */
  async getCounts() {
    const [unread, read, replied] = await Promise.all([
      contactRepository.countByStatus('unread'),
      contactRepository.countByStatus('read'),
      contactRepository.countByStatus('replied'),
    ]);

    return { unread, read, replied, total: unread + read + replied };
  },
};
