/**
 * Standardized API Response Helper
 */
import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

/**
 * Success response
 */
export function successResponse(data, status = 200) {
  return NextResponse.json(
    {
      success: true,
      data,
    },
    { status }
  );
}

/**
 * Error response
 */
export function errorResponse(message, status = 400, errors = null) {
  return NextResponse.json(
    {
      success: false,
      error: message,
      errors,
    },
    { status }
  );
}

/**
 * Handle API errors
 */
export function handleApiError(error) {
  console.error('API Error:', error);

  // Zod validation error
  if (error instanceof ZodError) {
    const errors = error.errors.map(err => ({
      field: err.path.join('.'),
      message: err.message,
    }));
    return errorResponse('Validasi gagal', 400, errors);
  }

  // Custom error with message
  if (error.message) {
    return errorResponse(error.message, 400);
  }

  // Generic error
  return errorResponse('Terjadi kesalahan pada server', 500);
}

/**
 * Authentication error
 */
export function authError(message = 'Unauthorized') {
  return errorResponse(message, 401);
}

/**
 * Forbidden error
 */
export function forbiddenError(message = 'Forbidden') {
  return errorResponse(message, 403);
}
