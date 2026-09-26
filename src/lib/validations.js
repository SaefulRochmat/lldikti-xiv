/**
 * Validation Schemas
 * Simple validation without external dependencies
 */

// Manual validation helpers
const validate = {
  string: (value, field) => {
    if (typeof value !== "string") {
      throw new Error(`${field} must be a string`);
    }
    return value.trim();
  },
  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      throw new Error("Email tidak valid");
    }
    return value;
  },
  minLength: (value, min, field) => {
    if (value.length < min) {
      throw new Error(`${field} minimal ${min} karakter`);
    }
    return value;
  },
  maxLength: (value, max, field) => {
    if (value.length > max) {
      throw new Error(`${field} maksimal ${max} karakter`);
    }
    return value;
  },
};

// Auth Schemas
export const loginSchema = {
  parse: (data) => {
    const email = validate.email(validate.string(data.email, "Email"));
    const password = validate.minLength(
      validate.string(data.password, "Password"),
      6,
      "Password",
    );
    return { email, password };
  },
};

// Contact Form Schema
export const contactSchema = {
  parse: (data) => {
    const nama = validate.maxLength(
      validate.minLength(validate.string(data.nama, "Nama"), 2, "Nama"),
      100,
      "Nama",
    );
    const email = validate.email(validate.string(data.email, "Email"));
    const pesan = validate.maxLength(
      validate.minLength(validate.string(data.pesan, "Pesan"), 10, "Pesan"),
      1000,
      "Pesan",
    );

    return { nama, email, pesan };
  },
};

// Survey Schema - Simplified for now
export const surveySchema = {
  parse: (data) => {
    // Basic validation - can be enhanced
    if (!data.age || data.age < 15 || data.age > 100) {
      throw new Error("Umur harus antara 15-100 tahun");
    }
    if (!data.gender || !["Laki-laki", "Perempuan"].includes(data.gender)) {
      throw new Error("Jenis kelamin tidak valid");
    }
    if (!data.job) {
      throw new Error("Pekerjaan harus diisi");
    }
    if (
      !data.services ||
      !Array.isArray(data.services) ||
      data.services.length !== 1
    ) {
      throw new Error("Pilih 1 layanan");
    }

    // Validate ratings (1-4)
    const ratings = [
      "persyaratan",
      "prosedur",
      "waktu",
      "biaya",
      "produk",
      "kompetensi",
      "perilaku",
      "pengaduan",
      "fasilitas",
    ];
    for (const rating of ratings) {
      if (!data[rating] || data[rating] < 1 || data[rating] > 4) {
        throw new Error(`Rating ${rating} harus antara 1-4`);
      }
    }

    return data;
  },
};
