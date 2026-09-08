/**
 * Survey Repository - Data Access Layer
 */
import prisma from '@/lib/prisma';

export const surveyRepository = {
  /**
   * Create survey response
   */
  async create(data) {
    return await prisma.surveyResponse.create({
      data: {
        age: data.age,
        gender: data.gender,
        job: data.job,
        otherJob: data.otherJob || null,
        services: data.services,
        persyaratan: data.persyaratan,
        prosedur: data.prosedur,
        waktu: data.waktu,
        biaya: data.biaya,
        produk: data.produk,
        kompetensi: data.kompetensi,
        perilaku: data.perilaku,
        pengaduan: data.pengaduan,
        fasilitas: data.fasilitas,
        feedback: data.feedback || null,
      },
    });
  },

  /**
   * Get all survey responses (for admin)
   */
  async findAll(options = {}) {
    const { skip = 0, take = 50 } = options;
    
    return await prisma.surveyResponse.findMany({
      skip,
      take,
      orderBy: { createdAt: 'desc' },
    });
  },

  /**
   * Count total responses
   */
  async count() {
    return await prisma.surveyResponse.count();
  },
};
