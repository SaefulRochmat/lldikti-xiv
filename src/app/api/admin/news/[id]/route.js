import prisma from "@/lib/prisma";
import { requireAdmin } from "@/middleware/auth";
import {
  authError,
  errorResponse,
  forbiddenError,
  handleApiError,
  successResponse,
} from "@/lib/apiResponse";

export async function DELETE(request, { params }) {
  try {
    const { authenticated, authorized } = await requireAdmin(request);
    if (!authenticated) return authError();
    if (!authorized)
      return forbiddenError("Akses ditolak. Hanya admin yang dapat mengakses.");

    const { id } = await params;
    const existing = await prisma.news.findUnique({ where: { id } });
    if (!existing) return errorResponse("Berita tidak ditemukan.", 404);

    await prisma.news.delete({ where: { id } });
    return successResponse({ id });
  } catch (error) {
    return handleApiError(error);
  }
}
