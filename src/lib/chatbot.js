/**
 * Simple keyword-based chatbot response engine.
 * Replace with an actual API call when ready.
 */
export function getBotResponse(message) {
  const text = message.toLowerCase().trim();

  if (text.includes("sosial") || text.includes("instagram") || text.includes("media")) {
    return "Kami tersedia di Instagram, Facebook, YouTube, dan TikTok. Silakan cek tautan di footer website kami.";
  }

  if (text.includes("nomor") || text.includes("kontak") || text.includes("telepon") || text.includes("hubungi")) {
    return "Silakan hubungi kami di 0981-2911065 atau WhatsApp di 081-223-487-355.";
  }

  if (text.includes("layanan")) {
    return "Kami menyediakan layanan pelaporan, data publik, akreditasi, dan sistem informasi. Kunjungi menu Layanan untuk info lengkap.";
  }

  if (text.includes("berita") || text.includes("informasi") || text.includes("pengumuman")) {
    return "Berita dan pengumuman terbaru tersedia di menu Publikasi → Berita LLDIKTI Wilayah XIV.";
  }

  if (text.includes("akreditasi")) {
    return "Informasi akreditasi program studi dapat diakses melalui BAN-PT di banpt.or.id atau menu Layanan kami.";
  }

  if (text.includes("dosen") || text.includes("sister") || text.includes("nidn")) {
    return "Untuk urusan data dosen, NIDN, dan SISTER, silakan kunjungi sister.kemdikbud.go.id atau hubungi kami langsung.";
  }

  if (text.includes("halo") || text.includes("hai") || text.includes("hello") || text.includes("hi")) {
    return "Halo 👋 Ada yang bisa kami bantu? Silakan tanyakan tentang layanan, berita, atau informasi LLDIKTI Wilayah XIV.";
  }

  if (text.includes("terima kasih") || text.includes("makasih")) {
    return "Sama-sama! Jangan ragu untuk bertanya lagi jika ada yang perlu dibantu 😊";
  }

  return "Maaf, saya belum memahami pertanyaan tersebut 🙏 Silakan hubungi kami langsung di 0981-2911065 untuk bantuan lebih lanjut.";
}
