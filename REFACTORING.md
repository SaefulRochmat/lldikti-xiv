#  Dokumentasi Refactoring - LLDIKTI XIV Website

##  Tujuan
Refactoring website LLDIKTI XIV dengan:
1. **Clean Architecture** — struktur folder yang lebih terorganisir
2. **SaaS-style UI** — tampilan modern, clean, dan profesional
3. **Bug Fixes** — perbaikan error yang ada
4. **Video Hero** — ganti carousel dengan video background yang estetik

---

##  Struktur Baru

### Before → After

```
src/
├── constant/          →  data/           (pure data, no JSX/logic)
├── utils/             →  lib/            (business logic helpers)
├── components/
│   ├── blocks/        →  features/      (feature-specific components)
│   ├── sections/      →  sections/      (page sections, clean names)
│   └── sections/Navbar,Footer → layout/ (layout components)
```

### Folder Structure

```
src/
├── app/                    # Next.js App Router (pages)
│   ├── layout.js           # Root layout
│   ├── page.js             # Home page
│   └── category/           # Category pages
│       ├── berita/
│       ├── profil/
│       └── visi-misi/
│
├── components/
│   ├── features/           # Feature-specific components
│   │   ├── hero/           # VideoHero
│   │   ├── carousel/       # ImageCarousel (old)
│   │   ├── navigation/     # DropdownMenu
│   │   ├── stats/          # StatCard
│   │   ├── applications/   # ApplicationTabs
│   │   ├── testimonials/   # TestimoniSection
│   │   ├── widgets/        # FloatingWidgets, Chatbot, WhatsApp
│   │   └── modals/         # WelcomeModal
│   │
│   ├── layout/             #  Layout components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── ScrollToTop.js
│   │
│   ├── sections/           # Page sections
│   │   ├── HeroSection.js
│   │   ├── IntroductionSection.js
│   │   ├── ApplicationSection.js
│   │   ├── StatsSection.js
│   │   ├── NewsSection.js
│   │   ├── SurveySection.js
│   │   └── TautanSection.js
│   │
│   ├── ui/                 # Atomic UI components
│   │   ├── Button.js
│   │   ├── SectionHeading.js
│   │   └── ...
│   │
│   └── AOSProvider.js      # AOS animation wrapper
│
├── data/                   #  Static data (no JSX, no logic)
│   ├── carousel.js
│   ├── applications.js
│   ├── stats.js
│   ├── news.js
│   ├── testimonials.js
│   ├── navigation.js
│   ├── footer.js
│   ├── links.js
│   └── introduction.js
│
├── lib/                    #  Business logic
│   └── chatbot.js
│
├── constant/               # Re-exports for backward compatibility
└── utils/                  # Re-exports for backward compatibility
```

---

##  Bug Fixes

### 1. **SurveyForm - `setOpen` undefined**
**Before:**
```jsx
<Button onClick={() => setOpen(false)}>  {/* setOpen tidak terdefinisi */}
```

**After:**
```jsx
// Dibuat komponen baru SurveySection.js yang benar
<Link href="/survey">
  <Button>Isi Survey Sekarang →</Button>
</Link>
```

### 2. **DataLinkTerkait - JSX tanpa import**
**Before:**
```js
logo: <Image src="/Assets/ijazah.png" alt="SIVIL" />  // Image tidak di-import
```

**After:**
```js
logo: "/Logos/sivil.png"  // Plain string
```

### 3. **Nav-Items - JSX di data file**
**Before:**
```jsx
name: (
  <div className="flex items-center gap-1">
    <span>Profil</span>
    <RiArrowDropDownLine />
  </div>
)
```

**After:**
```js
name: "Profil",
hasDropdown: true,
children: [...]
```

### 4. **AOS CSS Import Error**
**Before:**
```js
// AOSProvider.js
import "aos/dist/aos.css";  //  Turbopack error
```

**After:**
```css
/* globals.css */
@import "aos/dist/aos.css";  /*  Works */
```

### 5. **IoSearchOutline Import**
**Before:**
```js
import { IoSearchOutline } from "react-icons/io";  //  Wrong package
```

**After:**
```js
import { IoSearchOutline } from "react-icons/io5";  //  Correct
```

---

##  UI/UX Improvements (SaaS Style)

### Hero Section
- **Before:** Image carousel dengan teks overlay sederhana
- **After:** 
  - Video background (looping, muted by default)
  - Gradient overlay yang soft
  - Animated dots pattern
  - CTA buttons dengan hover effects
  - Stats bar di bawah
  - Sound toggle button
  - Scroll indicator animation
  - Staggered fade-in animations

### Button Component
- Sistem variant: `primary`, `accent`, `outline`, `ghost`
- Sistem size: `sm`, `md`, `lg`
- Consistent hover/focus states

### SectionHeading Component
- Reusable component untuk semua section titles
- Props: `eyebrow`, `title`, `subtitle`, `align`, `light`
- Consistent styling across pages

### Navbar
- Gradient accent line di bawah
- Smooth dropdown animations
- Mobile drawer dengan accordion
- Search modal dengan keyboard shortcuts
- Real-time clock (WIT timezone)

### Footer
- More compact layout
- Social icons dengan hover effects
- Better link organization

### StatCard
- Inline animated count-up
- Smooth hover effects
- Gradient badges

### Other Improvements
- Glassmorphism effects (backdrop-blur)
- Subtle shadows dan borders
- Consistent spacing system
- Better responsive breakpoints

---

##  Video Hero Features

### File Location
```
public/Assets/video-cp.mp4
```

### Features
1. **Autoplay & Loop** — video plays automatically dan loop terus
2. **Muted by Default** — tidak mengganggu user
3. **Sound Toggle** — tombol untuk unmute/mute
4. **Gradient Overlay** — agar teks tetap terbaca
5. **Animated Dots Pattern** — subtle background pattern
6. **Staggered Animations** — elemen muncul secara bertahap
7. **CTA Buttons** — 2 tombol call-to-action
8. **Stats Bar** — menampilkan statistik penting
9. **Scroll Indicator** — animated scroll down indicator
10. **Responsive** — menyesuaikan tinggi di berbagai device

### Customization
Edit di `src/components/features/hero/VideoHero.js`:
```js
// Ganti teks
<h1>Judul Anda</h1>
<p>Subtitle Anda</p>

// Ganti stats
{ value: "460+", label: "Perguruan Tinggi" }

// Ganti video
<source src="/Assets/your-video.mp4" type="video/mp4" />
```

---

##  Cara Pakai

### Development
```bash
npm run dev
```
Buka http://localhost:3000

### Build Production
```bash
npm run build
npm start
```

### Structure Guidelines

**Saat menambah fitur baru:**

1. **Data statis** → `src/data/`
2. **Feature component** → `src/components/features/[feature-name]/`
3. **Page section** → `src/components/sections/`
4. **Reusable UI** → `src/components/ui/`
5. **Business logic** → `src/lib/`

**Naming Convention:**
- Folder: `kebab-case`
- Files: `PascalCase.js` untuk components
- Files: `camelCase.js` untuk utils/data

---

##  Dependencies

Tidak ada dependency baru yang ditambahkan. Semua menggunakan:
- Next.js 16.1.6
- React 19.2.4
- Tailwind CSS 4
- react-icons 5.5.0
- aos 2.3.4
- @vercel/analytics 2.0.1

---

##  Checklist

- [x] Clean architecture structure
- [x] Fix all bugs
- [x] SaaS-style UI
- [x] Replace carousel with video hero
- [x] Build passes without errors
- [x] Backward compatibility (old imports still work)
- [x] Responsive design
- [x] Accessibility improvements
- [x] Performance optimizations
- [x] Maintenance pages for empty pages
- [x] Fixed navbar dropdown flicker

---

##  Notes

### Backward Compatibility
Semua file lama di `constant/` dan folder dengan spasi tetap ada sebagai **re-exports**. Kode lama tidak akan break.

### Migration Path
Jika ingin migrate semua ke struktur baru secara penuh:
1. Update imports dari `@/constant/` → `@/data/`
2. Update imports dari `@/components/blocks/` → `@/components/features/`
3. Hapus folder `constant/` dan `blocks/` yang lama

### Video File
Pastikan file `video-cp.mp4` ada di `public/Assets/`. Jika file besar, pertimbangkan:
- Compress dengan HandBrake/FFmpeg
- Host di CDN (Cloudinary, Vercel Blob)
- Lazy load atau progressive loading

---

##  Maintenance Pages

### Komponen UnderDevelopment

Dibuat komponen reusable untuk halaman yang sedang dalam pengembangan dengan fitur:

**Features:**
- Animated icon (rotating border + wiggle effect)
- Progress bar dengan animasi
- 2 CTA buttons (Kembali ke Beranda & Halaman Sebelumnya)
- 3 info cards (Coming Soon, Fast Updates, Best Quality)
- Smooth animations
- Fully responsive

**Diterapkan ke halaman:**
- `/profil` - Profil
- `/pelayanan` - Pelayanan
- `/publikasi` - Publikasi
- `/informasi-publik` - Informasi Publik
- `/ppid` - PPID
- `/zona-integritas` - Zona Integritas
- `/faq` - FAQ
- `/layanan` - Layanan Kami
- `/kontak` - Kontak & Pengaduan
- `/galeri` - Galeri

**File:** `src/components/ui/UnderDevelopment.js`

Lihat `MAINTENANCE_PAGES.md` untuk dokumentasi lengkap.

---

Made with ❤️ for LLDIKTI Wilayah XIV Papua
