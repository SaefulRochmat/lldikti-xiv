# Panduan Halaman Direktori Perguruan Tinggi

## 📋 Deskripsi Fitur

Halaman Direktori Perguruan Tinggi adalah bagian dari menu **Publikasi** yang menampilkan daftar lengkap perguruan tinggi di wilayah kerja LLDIKTI XIV. Setiap institusi dapat memiliki profil PDF yang dapat dilihat langsung di website tanpa perlu berpindah halaman (menggunakan modal popup).

## 🎯 Fitur Utama

✅ **Tampilan Responsif** - Desain menyesuaikan dengan mobile, tablet, dan desktop  
✅ **Kartu Institusi** - Grid view dengan informasi lengkap setiap institusi  
✅ **PDF Viewer Inline** - Lihat dokumen PDF langsung dalam modal tanpa unduh  
✅ **Pencarian & Filter** - Cari institusi berdasarkan nama, lokasi, atau kategori  
✅ **Kategori Institusi** - Filter berdasarkan jenis: Universitas, Sekolah Tinggi, Akademi, Politeknik  
✅ **Informasi Kontak** - Menampilkan nomor telepon, email, dan website  
✅ **Download PDF** - Tombol download langsung dari modal viewer  

## 📁 Struktur File

```
src/
├── components/
│   └── sections/
│       └── DirektoriPage/
│           ├── DirektoriHero.js          # Header hero section
│           ├── DirektoriList.js          # List dan filter institusi
│           ├── DirektoriData.js          # Data institusi (bisa diubah)
│           └── PDFViewerModal.js         # Modal untuk tampil PDF
├── app/
│   └── publikasi/
│       └── direktori/
│           └── page.js                   # Halaman direktori
public/
└── Assets/
    └── Direktori/                        # Folder untuk PDF files (perlu dibuat)
        ├── cenderawasih-profil.pdf
        ├── unipa-profil.pdf
        ├── stie-bukitzaitun-profil.pdf
        └── ... (PDF lainnya)
```

## 🚀 Cara Menggunakan

### 1. Membuat Folder PDF (Langkah Pertama)
Buat folder baru di `public/Assets/Direktori` untuk menyimpan file PDF:
```bash
mkdir public/Assets/Direktori
```

### 2. Menambahkan File PDF

**Opsi A: Menggunakan Interface Explorer**
1. Buka VS Code Explorer
2. Navigasi ke `public/Assets/Direktori`
3. Copy atau drag-drop file PDF ke folder tersebut

**Opsi B: Manual Copy**
- Copy file PDF ke: `public/Assets/Direktori/`
- Contoh nama file: `universitas-cenderawasih.pdf`

### 3. Mengupdate Data Institusi

Edit file `src/components/sections/DirektoriPage/DirektoriData.js` untuk menambah atau mengubah institusi:

```javascript
export const direktoriData = [
  {
    id: 1,
    nama: "Universitas Cenderawasih",
    ringkasan: "Deskripsi singkat institusi...",
    kategori: "Universitas",
    lokasi: "Jayapura, Papua",
    gambar: "/Assets/Gedung-lldikti.jpg",  // Gambar institusi (optional)
    pdfFile: "/Assets/Direktori/cenderawasih-profil.pdf",  // Path ke PDF
    kontak: "0967-571234",
    email: "info@uncen.ac.id",
    website: "www.uncen.ac.id",
  },
  // ... institusi lainnya
];
```

### 4. Mengubah Kategori

Edit array `kategoriDirektoriList` di file yang sama:
```javascript
export const kategoriDirektoriList = [
  "Semua",
  "Universitas",
  "Sekolah Tinggi",
  "Akademi",
  "Politeknik",
  // Tambah kategori baru di sini jika perlu
];
```

## 📝 Penjelasan Data Setiap Institusi

| Field | Deskripsi | Contoh |
|-------|-----------|--------|
| `id` | ID unik institusi | `1` |
| `nama` | Nama institusi | `Universitas Cenderawasih` |
| `ringkasan` | Deskripsi singkat (2-3 baris) | Deskripsi singkat... |
| `kategori` | Jenis institusi | `Universitas`, `Akademi`, dll |
| `lokasi` | Lokasi institusi | `Jayapura, Papua` |
| `gambar` | Path gambar institusi | `/Assets/...jpg` atau `/Assets/...png` |
| `pdfFile` | Path ke file PDF profil | `/Assets/Direktori/nama-profil.pdf` |
| `kontak` | Nomor telepon | `0967-571234` |
| `email` | Email institusi | `info@uncen.ac.id` |
| `website` | Website institusi | `www.uncen.ac.id` |

## 🎨 Kustomisasi Desain

### Mengubah Warna Utama
Ubah warna biru `#1A2CA3` di file komponen:
```javascript
// Sebelum
className="bg-[#1A2CA3]"

// Sesudah (ganti dengan kode hex warna baru)
className="bg-[#yourcolor]"
```

### Mengubah Ukuran Font atau Spacing
Edit className Tailwind pada komponen masing-masing.

## 📱 Fitur PDF Viewer

### Tombol-tombol Tersedia:
- 📥 **Download** - Download file PDF
- ❌ **Close** - Tutup modal
- 🔍 **Zoom** - Ubah ukuran tampilan (80% - 200%)

### Kompatibilitas:
Menggunakan native browser PDF viewer (iframe), kompatibel dengan semua browser modern:
- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅

## ⚠️ Troubleshooting

### PDF tidak terbuka di modal
- Pastikan file PDF ada di path `/public/Assets/Direktori/nama-file.pdf`
- Cek nama file di `DirektoriData.js` cocok dengan file yang ada
- Coba buka PDF langsung di browser dengan URL: `http://localhost:3000/Assets/Direktori/nama-file.pdf`

### Kartu tidak tampil dengan benar
- Pastikan file JavaScript sudah disimpan dengan benar
- Restart dev server: `npm run dev`
- Clear browser cache (Ctrl+Shift+Del)

### Search/Filter tidak bekerja
- Pastikan kategori di data cocok dengan `kategoriDirektoriList`
- Cek console browser untuk error message

## 🔧 Deploy ke Production

Pastikan sebelum deploy:
1. ✅ Semua file PDF sudah di `public/Assets/Direktori/`
2. ✅ Path di `DirektoriData.js` sudah benar
3. ✅ Gambar institusi tersedia di `public/Assets/`
4. ✅ Test di browser lokal terlebih dahulu

## 📞 Support

Jika ada pertanyaan atau masalah:
1. Cek console browser (F12) untuk error message
2. Lihat terminal server untuk log error
3. Pastikan struktur file sudah sesuai panduan di atas

---

**Halaman ini dapat diakses di:** `http://localhost:3000/publikasi/direktori`

