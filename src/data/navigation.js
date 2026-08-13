export const menuItems = [
  {
    name: "Profil",
    href: "/profil",
    hasDropdown: true,
    children: [
      { name: "Profil LLDIKTI XIV", href: "/category/profil" },
      { name: "Visi & Misi", href: "/category/visi-misi" },
    ],
  },
  {
    name: "Layanan",
    href: "/pelayanan",
    hasDropdown: true,
    children: [
      { name: "Layanan Publik LLDIKTI XIV", href: "/layanan-publik-lldikti-xiv" },
      { name: "Layanan Kami", href: "/layanan" },
      { name: "Cara Pengajuan Layanan", href: "/cara-pengajuan-layanan" },
    ],
  },
  {
    name: "Publikasi",
    href: "/publikasi",
    hasDropdown: true,
    children: [
      { name: "Berita LLDIKTI Wilayah XIV", href: "/category/berita" },
      { name: "Info LLDIKTI Wilayah XIV", href: "/info-lldikti-wilayah-xiv" },
      { name: "Buletin LLDIKTI Wilayah XIV", href: "/buletin-lldikti-wilayah-xiv" },
      { name: "Direktori Perguruan Tinggi", href: "/direktori-perguruan-tinggi" },
    ],
  },
  {
    name: "Informasi Publik",
    href: "/informasi-publik",
    hasDropdown: true,
    children: [
      { name: "Akuntabilitas", href: "/akuntabilitas" },
      { name: "Galeri", href: "/galeri" },
      { name: "Agenda Kegiatan", href: "/agenda-kegiatan" },
      { name: "Indeks Kepuasan Masyarakat", href: "/indeks-kepuasan-masyarakat" },
      { name: "Materi Kegiatan", href: "/materi-kegiatan" },
      { name: "Peta Proses Bisnis", href: "/peta-proses-bisnis-lldikti-xiv" },
      { name: "Prosedur Operasional Standar", href: "/prosedur-operasional-standar" },
      { name: "Rencana Umum Pengadaan", href: "/rencana-umum-pengadaan" },
      { name: "Standar Pelayanan Publik", href: "/standar-pelayanan-publik" },
      { name: "Laporan Tahunan", href: "/laporan-tahunan-lldikti-xiv" },
    ],
  },
  { name: "PPID", href: "/ppid", hasDropdown: false },
  { name: "Zona Integritas", href: "/zona-integritas", hasDropdown: false },
  { name: "FAQ", href: "/faq", hasDropdown: false },
];

export const searchSuggestions = [
  { label: "Profil LLDikti Wilayah XIV", href: "/category/profil" },
  { label: "Visi & Misi", href: "/category/visi-misi" },
  { label: "Sejarah Lembaga", href: "/category/profil#sejarah" },
  { label: "Tugas & Fungsi", href: "/category/profil#tugas-fungsi" },
  { label: "Struktur Organisasi", href: "/category/profil#struktur-organisasi" },
  { label: "Berita Terbaru", href: "/category/berita" },
  { label: "Pengumuman", href: "/pengumuman" },
  { label: "Akreditasi Program Studi", href: "/layanan/akreditasi" },
  { label: "KIP Kuliah", href: "/layanan/kip-kuliah" },
  { label: "SISTER Dosen", href: "/layanan/sister" },
  { label: "PDDikti", href: "/layanan/pddikti" },
  { label: "Kontak & Pengaduan", href: "/kontak" },
  { label: "Tautan Terkait", href: "/#tautan-terkait" },
];
