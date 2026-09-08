/**
 * Survey Service - Business Logic
 */
import { surveyRepository } from '@/repositories/surveyRepository';
import { surveySchema } from '@/lib/validations';

export const surveyService = {
  /**
   * Submit survey response
   */
  async submitSurvey(data) {
    // Validate data
    const validated = surveySchema.parse(data);

    // Parse age to integer
    const surveyData = {
      ...validated,
      age: parseInt(validated.age, 10),
    };

    // Save to database
    const response = await surveyRepository.create(surveyData);

    return response;
  },

  /**
   * Get all survey responses (admin only)
   */
  async getAllResponses(page = 1, perPage = 50) {
    const skip = (page - 1) * perPage;
    
    const [responses, total] = await Promise.all([
      surveyRepository.findAll({ skip, take: perPage }),
      surveyRepository.count(),
    ]);

    return {
      data: responses,
      pagination: {
        page,
        perPage,
        total,
        totalPages: Math.ceil(total / perPage),
      },
    };
  },

  /**
   * Get survey statistics
   */
  async getStatistics() {
    const responses = await surveyRepository.findAll({});
    
    if (responses.length === 0) {
      return {
        total: 0,
        averageRatings: {},
      };
    }

    // Calculate average ratings
    const ratingKeys = [
      'persyaratan',
      'prosedur',
      'waktu',
      'biaya',
      'produk',
      'kompetensi',
      'perilaku',
      'pengaduan',
      'fasilitas',
    ];

    const averageRatings = {};
    ratingKeys.forEach((key) => {
      const sum = responses.reduce((acc, r) => acc + r[key], 0);
      averageRatings[key] = (sum / responses.length).toFixed(2);
    });

    return {
      total: responses.length,
      averageRatings,
    };
  },
};
