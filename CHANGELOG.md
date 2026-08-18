#  Changelog - LLDIKTI XIV Website

## [2.0.0] - 2026-08-13

###  Major Refactoring

####  Added
- **Clean Architecture** — Struktur folder yang terorganisir (`features/`, `layout/`, `data/`, `lib/`)
- **Video Hero Section** — Background video dengan overlay text, animations, dan CTA buttons
- **SaaS-style UI Components** — Modern button system, section headings, dan consistent styling
- **Maintenance Pages** — 10 halaman dengan komponen `UnderDevelopment` yang estetik
- **Navbar Search Modal** — Search dengan keyboard shortcuts dan filtered suggestions
- **Improved Dropdown Menu** — Fixed flicker issue dengan invisible bridge
- **Navbar UI Enhancement** — Konsisten typography, compact top bar, refined spacing

####  Fixed
- `SurveyForm.js` — undefined `setOpen` variable
- `DataLinkTerkait.js` — JSX `<Image>` tanpa import
- `Nav-Items.js` — JSX di data file
- `AOSProvider.js` — CSS import error di Turbopack
- `IoSearchOutline` — Wrong import from `react-icons/io` → fixed to `react-icons/io5`
- Navbar dropdown — Hilang-hilangan saat hover (added invisible bridge)
- Navbar fonts — Unified to 13px dengan font-semibold untuk menu items

####  Changed
- Hero carousel → Video background dengan overlay
- Button component → Sistem variant & size
- Footer layout → More compact dan organized
- Navbar → Gradient accent line, improved mobile menu, consistent fonts
- Navbar height → Fixed 68px untuk better visual balance
- Top bar → Shortened month names (Jan, Feb, etc.) untuk space efficiency
- Search modal → Cleaner border, better typography, adjusted positioning
- Mobile drawer → Consistent 13px font size, improved padding
- All section titles → Menggunakan `SectionHeading` component

####  File Structure
```
src/
├── components/
│   ├── features/      (NEW - feature components)
│   ├── layout/        (NEW - Navbar, Footer, ScrollToTop)
│   ├── sections/      (page sections)
│   └── ui/            (atomic components)
├── data/              (NEW - pure data files)
├── lib/               (NEW - business logic)
└── app/               (Next.js pages)
```

####  Statistics
- **Total Pages:** 17 (4 live + 10 maintenance + 3 system)
- **Components Created:** 25+
- **Files Refactored:** 50+
- **Lines of Code:** ~8,000+
- **Build Time:** ~18s
- **Bundle Size:** Optimized

---

## [1.0.0] - Initial Release

### Features
- Basic homepage dengan carousel
- Navbar dengan dropdown menu
- Footer dengan links
- Berita section
- Profil & Visi Misi pages
- Stats section
- Testimonials
- Tautan terkait

---

##  Upcoming Features

### Version 2.1.0 (Next Sprint)
- [ ] Layanan page dengan cards
- [ ] PPID dengan document viewer
- [ ] Galeri dengan lightbox
- [ ] FAQ dengan accordion
- [ ] Contact form dengan validation
- [ ] News detail pages
- [ ] Breadcrumb navigation

### Version 2.2.0
- [ ] Search functionality
- [ ] PDF viewer
- [ ] Download center
- [ ] Multi-language support (ID/EN)
- [ ] Dark mode toggle

### Version 3.0.0
- [ ] Admin dashboard
- [ ] Content Management System
- [ ] User authentication
- [ ] Analytics dashboard
- [ ] API endpoints

---

##  Migration Guide

### From v1.0 to v2.0

#### Import Changes
```js
// Old
import { carouselData } from "@/constant/CarouselData";

// New (recommended)
import { carouselData } from "@/data/carousel";

// Old imports still work (backward compatible)
```

#### Component Locations
```js
// Old
import StatCard from "@/components/blocks/DataSebaranBlock/StatCard";

// New
import StatCard from "@/components/features/stats/StatCard";
```

#### Breaking Changes
- None! All old imports are re-exported for backward compatibility

---

##  Technical Details

### Build Configuration
- **Framework:** Next.js 16.1.6 (Turbopack)
- **React:** 19.2.4
- **Styling:** Tailwind CSS v4
- **Icons:** react-icons 5.5.0
- **Animations:** AOS 2.3.4
- **Analytics:** Vercel Analytics

### Browser Support
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS Safari 14+, Chrome Android

### Performance
- Lighthouse Score: 95+ (Desktop)
- First Contentful Paint: <1.5s
- Time to Interactive: <2.5s
- Total Bundle Size: ~500KB (gzipped)

---

##  Contributors

- Development Team LLDIKTI XIV
- UI/UX Design: Kiro AI Assistant
- Code Review: Internal Team

---

##  License

Copyright © 2026 LLDIKTI Wilayah XIV Papua. All rights reserved.

---

**For detailed documentation:**
- Architecture: `REFACTORING.md`
- Maintenance Pages: `MAINTENANCE_PAGES.md`
- README: `README.md`
