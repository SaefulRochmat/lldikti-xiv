import { mkdir, unlink, writeFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import path from "node:path";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/middleware/auth";
import {
  authError,
  errorResponse,
  forbiddenError,
  handleApiError,
  successResponse,
} from "@/lib/apiResponse";

async function authorize(request) {
  const { authenticated, authorized } = await requireAdmin(request);
  if (!authenticated) return authError();
  if (!authorized)
    return forbiddenError("Akses ditolak. Hanya admin yang dapat mengakses.");
  return null;
}

function normalizeNews(payload) {
  const required = ["judul", "ringkasan", "isi", "kategori", "penulis"];
  const missingFields = required.filter(
    (field) => !String(payload[field] || "").trim(),
  );
  if (missingFields.length > 0) {
    return {
      error: `Field wajib belum diisi: ${missingFields.join(", ")}.`,
    };
  }

  const tanggal = payload.tanggal ? new Date(payload.tanggal) : new Date();
  if (Number.isNaN(tanggal.getTime()))
    return { error: "Tanggal berita tidak valid." };

  return {
    data: {
      judul: String(payload.judul).trim(),
      ringkasan: String(payload.ringkasan).trim(),
      isi: String(payload.isi).trim(),
      kategori: String(payload.kategori).trim(),
      penulis: String(payload.penulis).trim(),
      gambar: String(payload.gambar || "").trim() || null,
      tanggal,
      featured:
        payload.featured === true ||
        payload.featured === "true" ||
        payload.featured === "on",
    },
  };
}

async function saveImage(file) {
  if (!file || file.size === 0) return { path: null, filePath: null };
  if (!file.type.startsWith("image/")) {
    throw new Error("File gambar harus berupa gambar.");
  }
  if (file.size > 5 * 1024 * 1024) {
    throw new Error("Ukuran gambar maksimal 5 MB.");
  }

  const extension = path.extname(file.name).toLowerCase() || ".jpg";
  const filename = `${Date.now()}-${randomUUID()}${extension}`;
  const directory = path.join(process.cwd(), "public", "Assets", "Berita");
  await mkdir(directory, { recursive: true });
  const filePath = path.join(directory, filename);
  await writeFile(filePath, Buffer.from(await file.arrayBuffer()));
  return { path: `/Assets/Berita/${filename}`, filePath };
}

export async function GET(request) {
  try {
    const authErrorResponse = await authorize(request);
    if (authErrorResponse) return authErrorResponse;

    const news = await prisma.news.findMany({
      orderBy: [{ featured: "desc" }, { tanggal: "desc" }],
    });
    return successResponse({ news });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(request) {
  try {
    const authErrorResponse = await authorize(request);
    if (authErrorResponse) return authErrorResponse;

    if (!request.headers.get("content-type")?.includes("multipart/form-data")) {
      return errorResponse("Format request harus multipart/form-data.", 415);
    }

    const formData = await request.formData();
    const savedImage = await saveImage(formData.get("gambarFile"));
    const normalized = normalizeNews({
      judul: formData.get("judul"),
      ringkasan: formData.get("ringkasan"),
      isi: formData.get("isi"),
      kategori: formData.get("kategori"),
      tanggal: formData.get("tanggal"),
      penulis: formData.get("penulis"),
      gambar: savedImage.path,
      featured: formData.get("featured"),
    });
    if (normalized.error) return errorResponse(normalized.error);

    try {
      const news = await prisma.news.create({ data: normalized.data });
      return successResponse({ news }, 201);
    } catch (error) {
      if (savedImage.filePath)
        await unlink(savedImage.filePath).catch(() => {});
      throw error;
    }
  } catch (error) {
    console.error("POST /api/admin/news failed:", error);
    return handleApiError(error);
  }
}
