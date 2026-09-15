/**
 * POST /api/contact
 * Submit contact form
 */
import { contactService } from '@/services/contactService';
import { successResponse, errorResponse, handleApiError } from '@/lib/apiResponse';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Submit message
    const message = await contactService.submitMessage(body);

    return successResponse(
      {
        id: message.id,
        message: 'Pesan berhasil dikirim. Terima kasih!',
      },
      201
    );
  } catch (error) {
    console.error('[API Contact] Error:', error.message);
    return error?.name === 'Error'
      ? errorResponse(error.message, 400)
      : handleApiError(error);
  }
}
