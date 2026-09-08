/**
 * Authentication Middleware
 */
import { authService } from '@/services/authService';

/**
 * Get session token from request
 */
export function getSessionToken(request) {
  // Try cookie first
  const cookieHeader = request.headers.get('cookie');
  if (cookieHeader) {
    const cookies = Object.fromEntries(
      cookieHeader.split('; ').map(c => c.split('='))
    );
    if (cookies.session) {
      return cookies.session;
    }
  }

  // Try Authorization header
  const authHeader = request.headers.get('authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }

  return null;
}

/**
 * Verify authentication
 */
export async function requireAuth(request) {
  const token = getSessionToken(request);
  const user = await authService.verifySession(token);

  if (!user) {
    return {
      authenticated: false,
      user: null,
    };
  }

  return {
    authenticated: true,
    user,
  };
}

/**
 * Verify admin role
 */
export async function requireAdmin(request) {
  const auth = await requireAuth(request);

  if (!auth.authenticated) {
    return {
      authenticated: false,
      authorized: false,
      user: null,
    };
  }

  const isAdmin = auth.user.role === 'admin' || auth.user.role === 'super_admin';

  return {
    authenticated: true,
    authorized: isAdmin,
    user: auth.user,
  };
}
