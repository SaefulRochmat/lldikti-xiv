/**
 * POST /api/auth/logout
 * Logout endpoint
 */
import { authService } from '@/services/authService';
import { getSessionToken } from '@/middleware/auth';
import { successResponse, handleApiError } from '@/lib/apiResponse';

export async function POST(request) {
  try {
    const token = getSessionToken(request);
    
    if (token) {
      await authService.logout(token);
    }

    // Clear cookie
    const response = successResponse({ message: 'Logout berhasil' });
    response.cookies.delete('session');

    return response;
  } catch (error) {
    return handleApiError(error);
  }
}
