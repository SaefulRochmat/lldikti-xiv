import { RiArrowDropDownLine } from "react-icons/ri";

export const MenuItems = [
  {
    name: (
      <div className="flex items-center gap-1">
        <span>Profil</span>
        <RiArrowDropDownLine />
      </div>
    ),
    href: "/profil",
    children: [
      {
        name: "Profil LLDIKTI XIV",
        href: "/profil",
      },
      {
        name: "VISI & MISI",
        href: "/visi-misi",
      },
    ],
  },
  {
    name: (
      <div className="flex items-center gap-1">
        <span>Layanan</span>
        <RiArrowDropDownLine />
      </div>
    ),
    href: "/pelayanan",
    children: [
      {
        name: "Layanan Publik LLDIKTI XIV",
        href: "/layanan-publik-lldikti-xiv",
      },
      {
        name: "Layanan Kami",
        href: "/layanan",
      },
      {
        name: "Cara Pengajuan Layanan",
        href: "/cara-pengajuan-layanan",
      },
    ],
  },
  {
    name: (
      <div className="flex items-center gap-1">
        <span>Publikasi</span>
        <RiArrowDropDownLine />
      </div>
    ),
    href: "/publikasi",
    children: [
      {
        name: "Berita LLDIKTI Wilayah XIV",
        href: "/berita-lldikti-wilayah-xiv",
      },
      {
        name: "Info LLDIKTI Wilayah XIV",
        href: "/info-lldikti-wilayah-xiv",
      },
      {
        name: "Buletin LLDIKTI Wilayah XIV",
        href: "/buletin-lldikti-wilayah-xiv",
      },
      {
        name: "DIrektori Perguruan Tinggi",
        href: "/direktori-perguruan-tinggi",
      },
    ],
  },
  {
    name: (
      <div className="flex items-center gap-1">
        <span>Informasi Publik</span>
        <RiArrowDropDownLine />
      </div>
    ),
    href: "/informasi-publik",
    children: [
      {
        name: "Akuntabilitas",
        href: "/akuntabilitas",
      },
      {
        name: "Galeri",
        href: "/galeri",
      },
      {
        name: "Agenda Kegiatan",
        href: "/agenda-kegiatan",
      },
      {
        name: "Indeks Kepuasan Masyarakat",
        href: "/indeks-kepuasan-masyarakat",
      },
      {
        name: "Materi Kegiatan",
        href: "/materi-kegiatan",
      },
      {
        name: "Peta Proses Bisnis LLDIKTI Wilayah XIV",
        href: "/peta-proses-bisnis-lldikti-xiv",
      },
      {
        name: "Prosedur Operasional Standar",
        href: "/prosedur-operasional-standar",
      },
      {
        name: "Recana Umum Pengadaan",
        href: "/rencana-umum-pengadaan",
      },
      {
        name: "Standar Pelayanan Publik",
        href: "/standar-pelayanan-publik",
      },
      {
        name: "Laporan Tahunan LLDIKTI XIV",
        href: "/laporan-tahunan-lldikti-xiv",
      },
    ],
  },
  {
    name: "PPID",
    href: "/ppid",
  },
  {
    name: "Zona Integritas",
    href: "/zona-integritas",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
];
