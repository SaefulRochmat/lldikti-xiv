/**
 * Validation Schemas using Zod
 */
import { z } from 'zod';

// Auth Schemas
export const loginSchema = z.object({
  email: z.string().email('Email tidak valid'),
  password: z.string().min(6, 'Password minimal 6 karakter'),
});

// Contact Form Schema
export const contactSchema = z.object({
  nama: z.string().min(2, 'Nama minimal 2 karakter').max(100, 'Nama terlalu panjang'),
  email: z.string().email('Email tidak valid'),
  pesan: z.string().min(10, 'Pesan minimal 10 karakter').max(1000, 'Pesan terlalu panjang'),
});

// Survey Schema
export const surveySchema = z.object({
  age: z.number().int().min(15, 'Umur minimal 15 tahun').max(100, 'Umur maksimal 100 tahun'),
  gender: z.enum(['Laki-laki', 'Perempuan'], { required_error: 'Pilih jenis kelamin' }),
  job: z.string().min(1, 'Pilih pekerjaan'),
  otherJob: z.string().optional(),
  services: z.array(z.string()).min(1, 'Pilih minimal 1 layanan'),
  
  // Ratings (1-4)
  persyaratan: z.number().int().min(1).max(4),
  prosedur: z.number().int().min(1).max(4),
  waktu: z.number().int().min(1).max(4),
  biaya: z.number().int().min(1).max(4),
  produk: z.number().int().min(1).max(4),
  kompetensi: z.number().int().min(1).max(4),
  perilaku: z.number().int().min(1).max(4),
  pengaduan: z.number().int().min(1).max(4),
  fasilitas: z.number().int().min(1).max(4),
  
  feedback: z.string().max(2000, 'Feedback terlalu panjang').optional(),
});
