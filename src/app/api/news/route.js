import prisma from "@/lib/prisma";
import { successResponse, handleApiError } from "@/lib/apiResponse";

export async function GET() {
  try {
    const news = await prisma.news.findMany({
      orderBy: [{ featured: "desc" }, { tanggal: "desc" }],
    });

    return successResponse({ news });
  } catch (error) {
    return handleApiError(error);
  }
}
