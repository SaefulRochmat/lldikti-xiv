/**
 * GET /api/admin/survey
 * Get survey responses (admin only)
 */
import { requireAdmin } from '@/middleware/auth';
import { surveyService } from '@/services/surveyService';
import { successResponse, authError, forbiddenError, handleApiError } from '@/lib/apiResponse';

export async function GET(request) {
  try {
    // Check authentication & authorization
    const { authenticated, authorized } = await requireAdmin(request);

    if (!authenticated) {
      return authError();
    }

    if (!authorized) {
      return forbiddenError('Akses ditolak. Hanya admin yang dapat mengakses.');
    }

    // Get query params
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const perPage = parseInt(searchParams.get('perPage') || '50', 10);

    // Get responses
    const result = await surveyService.getAllResponses(page, perPage);

    return successResponse(result);
  } catch (error) {
    return handleApiError(error);
  }
}
