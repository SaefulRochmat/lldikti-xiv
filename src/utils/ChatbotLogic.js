export function getBotResponse(message) {
  const text = message.toLowerCase();

  if (text.includes("sosial") || text.includes("instagram")) {
    return "Kami tersedia di Instagram, Facebook, Youtube, dan Tiktok.";
  }

  if (text.includes("nomor") || text.includes("kontak") || text.includes("telepon")) {
    return "Silakan hubungi kami di 081-223-487-355 atau WhatsApp ya.";
  }

  if (text.includes("layanan")) {
    return "Kami menyediakan layanan pelaporan, data publik, dan sistem informasi.";
  }

  if (text.includes("halo") || text.includes("hai")) {
    return "Halo 👋 Ada yang bisa kami bantu?";
  }

  return "Maaf saya belum memahami pertanyaan tersebut 🙏";
}
