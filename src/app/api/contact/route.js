/**
 * POST /api/contact
 * Submit contact form
 */
import { contactService } from '@/services/contactService';
import { successResponse, handleApiError } from '@/lib/apiResponse';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    console.log('[API Contact] Received data:', body);
    
    // Submit message
    const message = await contactService.submitMessage(body);

    console.log('[API Contact] Message saved:', message.id);

    return successResponse(
      {
        id: message.id,
        message: 'Pesan berhasil dikirim. Terima kasih!',
      },
      201
    );
  } catch (error) {
    console.error('[API Contact] Error:', error.message);
    console.error('[API Contact] Stack:', error.stack);
    console.error('[API Contact] Error type:', error.constructor.name);
    
    // Always return JSON response even on error
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Terjadi kesalahan saat mengirim pesan',
      },
      { status: 500 }
    );
  }
}
