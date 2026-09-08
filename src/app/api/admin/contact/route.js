/**
 * GET /api/admin/contact
 * Get contact messages (admin only)
 */
import { requireAdmin } from '@/middleware/auth';
import { contactService } from '@/services/contactService';
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
    const status = searchParams.get('status');

    // Get messages
    const messages = await contactService.getAllMessages(page, perPage, status);

    return successResponse({ messages });
  } catch (error) {
    return handleApiError(error);
  }
}
