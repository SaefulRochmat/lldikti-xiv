# 🚧 Halaman Maintenance - LLDIKTI XIV

## Daftar Halaman dengan Status "Under Development"

Berikut adalah daftar halaman yang saat ini menampilkan halaman maintenance/under development:

### ✅ Halaman Utama (Menu Top Level)

| No | Halaman | Path | Status |
|----|---------|------|--------|
| 1 | Profil | `/profil` | 🚧 Under Development |
| 2 | Pelayanan | `/pelayanan` | 🚧 Under Development |
| 3 | Publikasi | `/publikasi` | 🚧 Under Development |
| 4 | Informasi Publik | `/informasi-publik` | 🚧 Under Development |
| 5 | PPID | `/ppid` | 🚧 Under Development |
| 6 | Zona Integritas | `/zona-integritas` | 🚧 Under Development |
| 7 | FAQ | `/faq` | 🚧 Under Development |

### ✅ Halaman Layanan

| No | Halaman | Path | Status |
|----|---------|------|--------|
| 1 | Layanan Kami | `/layanan` | 🚧 Under Development |
| 2 | Kontak & Pengaduan | `/kontak` | 🚧 Under Development |
| 3 | Galeri | `/galeri` | 🚧 Under Development |

### ✅ Halaman yang Sudah Selesai

| No | Halaman | Path | Status |
|----|---------|------|--------|
| 1 | Beranda | `/` | ✅ Live |
| 2 | Berita | `/category/berita` | ✅ Live |
| 3 | Profil LLDIKTI XIV | `/category/profil` | ✅ Live |
| 4 | Visi & Misi | `/category/visi-misi` | ✅ Live |

---

## 🎨 Komponen UnderDevelopment

### Lokasi File
```
src/components/ui/UnderDevelopment.js
```

### Features
- ✨ Animated icon dengan rotating border
- 📊 Progress bar dengan animasi
- 🎯 2 CTA buttons (Beranda & Back)
- 💳 3 info cards (Coming Soon, Fast Updates, Best Quality)
- 🎭 Smooth animations (spin, wiggle, bounce)
- 📱 Fully responsive

### Props

```jsx
<UnderDevelopment
  title="Judul Halaman"                    // Default: "Halaman Sedang Dikembangkan"
  description="Deskripsi singkat"          // Default: "Kami sedang bekerja keras..."
  showHomeButton={true}                    // Default: true
/>
```

### Example Usage

```jsx
// src/app/your-page/page.js
import UnderDevelopment from "@/components/ui/UnderDevelopment";
import FloatingWidgets from "@/components/features/widgets/FloatingWidgets";

export const metadata = {
  title: "Your Page - LLDIKTI Wilayah XIV",
  description: "Halaman sedang dalam tahap pengembangan.",
};

export default function YourPage() {
  return (
    <>
      <UnderDevelopment
        title="Judul Custom Anda"
        description="Deskripsi custom untuk halaman ini."
      />
      <FloatingWidgets />
    </>
  );
}
```

---

## 📝 Cara Menambah Halaman Baru

### 1. Buat File Page

```bash
# Buat folder & file
src/app/nama-halaman/page.js
```

### 2. Copy Template

```jsx
import UnderDevelopment from "@/components/ui/UnderDevelopment";
import FloatingWidgets from "@/components/features/widgets/FloatingWidgets";

export const metadata = {
  title: "Nama Halaman - LLDIKTI Wilayah XIV",
  description: "Halaman sedang dalam tahap pengembangan.",
};

export default function NamaHalamanPage() {
  return (
    <>
      <UnderDevelopment
        title="Nama Halaman"
        description="Deskripsi halaman ini."
      />
      <FloatingWidgets />
    </>
  );
}
```

### 3. Tambahkan ke Navigation (Opsional)

Edit `src/data/navigation.js`:

```js
{
  name: "Nama Menu",
  href: "/nama-halaman",
  hasDropdown: false,
}
```

### 4. Build & Test

```bash
npm run build
npm run dev
```

---

## 🎯 Roadmap Development

### Phase 1: Foundation ✅
- [x] Setup clean architecture
- [x] Create maintenance component
- [x] Apply to all empty pages
- [x] Fix navbar dropdown

### Phase 2: Content Pages (Next Sprint)
- [ ] Layanan page dengan detail layanan
- [ ] PPID page dengan dokumen publik
- [ ] Galeri dengan photo grid
- [ ] FAQ dengan accordion
- [ ] Kontak page dengan form

### Phase 3: Advanced Features
- [ ] Search functionality
- [ ] PDF viewer untuk dokumen
- [ ] Download center
- [ ] News detail pages
- [ ] User authentication (admin panel)

---

## 🔧 Customization

### Mengubah Warna Theme

Edit `UnderDevelopment.js`:

```jsx
// Primary color
className="bg-[#1A2CA3]"  // Ganti dengan warna Anda

// Accent color
className="bg-yellow-400"  // Ganti dengan accent color
```

### Mengubah Progress Percentage

```jsx
style={{ width: '60%' }}  // Ubah sesuai progress aktual
```

### Mengubah Icons

```jsx
import { FiYourIcon } from "react-icons/fi";

<FiYourIcon className="text-white text-5xl" />
```

---

## 📞 Support

Jika ada pertanyaan tentang maintenance pages atau development:
- Email: lldikti14@kemdikbud.go.id
- WhatsApp: 081-223-487-355

---

**Build Status:** ✅ All pages building successfully  
**Total Pages:** 17 (4 live + 10 maintenance + 3 system pages)  
**Last Updated:** 2026-08-13

---

Made with ❤️ by LLDIKTI Wilayah XIV Development Team
