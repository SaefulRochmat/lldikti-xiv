/**
 * GET /api/admin/contact
 * Get contact messages (admin only)
 */
import { requireAdmin } from '@/middleware/auth';
import { contactService } from '@/services/contactService';
import { sendReplyEmail } from '@/lib/email';
import { successResponse, authError, errorResponse, forbiddenError, handleApiError } from '@/lib/apiResponse';

async function authorize(request) {
  const { authenticated, authorized } = await requireAdmin(request);
  if (!authenticated) return authError();
  if (!authorized) return forbiddenError('Akses ditolak. Hanya admin yang dapat mengakses.');
  return null;
}

export async function GET(request) {
  try {
    const authErrorResponse = await authorize(request);
    if (authErrorResponse) return authErrorResponse;

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

export async function PATCH(request) {
  try {
    const authErrorResponse = await authorize(request);
    if (authErrorResponse) return authErrorResponse;

    const { id, status = 'read' } = await request.json();
    if (!id) return errorResponse('ID pesan wajib diisi.', 400);

    const message = await contactService.updateStatus(id, status);
    return successResponse({ message });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(request) {
  try {
    const authErrorResponse = await authorize(request);
    if (authErrorResponse) return authErrorResponse;

    const { id, reply } = await request.json();
    if (!id || typeof reply !== 'string' || reply.trim().length < 2) {
      return errorResponse('Pesan balasan wajib diisi.', 400);
    }
    if (reply.trim().length > 5000) {
      return errorResponse('Pesan balasan maksimal 5000 karakter.', 400);
    }

    const message = await contactService.getMessage(id);
    if (!message) return errorResponse('Pesan tidak ditemukan.', 404);

    await sendReplyEmail({
      to: message.email,
      recipientName: message.nama,
      originalMessage: message.pesan,
      reply: reply.trim(),
    });
    const updatedMessage = await contactService.updateStatus(id, 'replied');

    return successResponse({ message: updatedMessage });
  } catch (error) {
    return handleApiError(error);
  }
}
