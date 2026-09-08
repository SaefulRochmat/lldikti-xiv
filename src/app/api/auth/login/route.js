/**
 * POST /api/auth/login
 * Login endpoint
 */
import { NextResponse } from 'next/server';
import { authService } from '@/services/authService';
import { loginSchema } from '@/lib/validations';
import { successResponse, handleApiError } from '@/lib/apiResponse';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate input
    const { email, password } = loginSchema.parse(body);

    // Login
    const { token, user } = await authService.login(email, password);

    // Create response with cookie
    const response = successResponse({ user });
    
    // Set session cookie (httpOnly for security)
    response.cookies.set('session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });

    return response;
  } catch (error) {
    return handleApiError(error);
  }
}
