/**
 * POST /api/survey/submit
 * Submit survey response
 */
import { surveyService } from '@/services/surveyService';
import { successResponse, handleApiError } from '@/lib/apiResponse';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Submit survey
    const response = await surveyService.submitSurvey(body);

    return successResponse(
      {
        id: response.id,
        message: 'Survey berhasil dikirim. Terima kasih!',
      },
      201
    );
  } catch (error) {
    return handleApiError(error);
  }
}
