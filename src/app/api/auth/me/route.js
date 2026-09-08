/**
 * GET /api/auth/me
 * Get current user
 */
import { requireAuth } from '@/middleware/auth';
import { successResponse, authError, handleApiError } from '@/lib/apiResponse';

export async function GET(request) {
  try {
    const { authenticated, user } = await requireAuth(request);

    if (!authenticated) {
      return authError('Sesi tidak valid');
    }

    return successResponse({ user });
  } catch (error) {
    return handleApiError(error);
  }
}
