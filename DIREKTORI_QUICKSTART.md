# Panduan Cepat: Menambahkan PDF ke Direktori Perguruan Tinggi

## ✅ Apa yang Sudah Selesai

Halaman **Direktori Perguruan Tinggi** sudah dibuat lengkap dengan fitur-fitur berikut:

### 🎨 Fitur Utama
- ✅ **Desain Responsif** - Sempurna di mobile, tablet, dan desktop
- ✅ **8 Institusi Contoh** - Dengan data lengkap (nama, lokasi, kontak)
- ✅ **PDF Viewer Modal** - Tampilkan PDF inline tanpa berpindah halaman
- ✅ **Search Functionality** - Cari institusi berdasarkan nama/lokasi
- ✅ **Category Filter** - 5 kategori: Universitas, Sekolah Tinggi, Akademi, Politeknik, Semua
- ✅ **Contact Info** - Menampilkan telepon, email, dan website dengan ikon
- ✅ **Download PDF** - Tombol download langsung dari modal viewer
- ✅ **Result Counter** - Tampilkan jumlah hasil pencarian/filter

---

## 🚀 Cara Menggunakan (Langkah Demi Langkah)

### **LANGKAH 1: Buat Folder PDF**

Buka terminal di folder project dan jalankan:
```bash
mkdir public/Assets/Direktori
```

Atau gunakan Windows Explorer:
1. Buka folder: `D:\Web Projects\web-profile-lldikti-xiv\public\Assets`
2. Buat folder baru bernama: `Direktori`

### **LANGKAH 2: Masukkan File PDF**

1. Siapkan file PDF Anda untuk masing-masing institusi
2. Copy ke folder: `public/Assets/Direktori/`
3. Gunakan nama file yang jelas dan mudah diingat, contoh:
   - `universitas-cenderawasih.pdf`
   - `stie-bukit-zaitun.pdf`
   - `akademi-bahasa.pdf`

### **LANGKAH 3: Update Data Institusi**

Edit file: **[src/components/sections/DirektoriPage/DirektoriData.js](src/components/sections/DirektoriPage/DirektoriData.js)**

Temukan array `direktoriData` dan update path PDF sesuai file yang Anda masukkan:

```javascript
{
  id: 1,
  nama: "Universitas Cenderawasih",
  ringkasan: "Deskripsi institusi Anda...",
  kategori: "Universitas",
  lokasi: "Jayapura, Papua",
  gambar: "/Assets/Gedung-lldikti.jpg",    // Ganti dengan gambar institusi jika ada
  pdfFile: "/Assets/Direktori/universitas-cenderawasih.pdf",  // ← UBAH INI
  kontak: "0967-571234",
  email: "info@uncen.ac.id",
  website: "www.uncen.ac.id",
}
```

### **LANGKAH 4: Test di Browser**

1. Pastikan server dev masih berjalan (port 3000)
2. Buka: `http://localhost:3000/publikasi/direktori`
3. Klik tombol **"Lihat Profil PDF"** untuk test
4. PDF seharusnya terbuka di modal

---

## 📝 Format Data Institusi

Setiap institusi memiliki field berikut:

| Field | Tipe | Wajib | Keterangan |
|-------|------|-------|-----------|
| `id` | Number | ✅ | Nomor unik, mulai dari 1 |
| `nama` | String | ✅ | Nama institusi |
| `ringkasan` | String | ✅ | Deskripsi singkat (2-3 baris) |
| `kategori` | String | ✅ | Harus sesuai dengan `kategoriDirektoriList` |
| `lokasi` | String | ✅ | Alamat/wilayah institusi |
| `gambar` | String | ❌ | Path gambar institusi (bisa kosong) |
| `pdfFile` | String | ✅ | Path ke file PDF |
| `kontak` | String | ❌ | Nomor telepon |
| `email` | String | ❌ | Email institusi |
| `website` | String | ❌ | Website institusi |

---

## 🎯 Contoh Penggunaan Real

Jika punya file PDF bernama `uncen-profil.pdf` di folder `public/Assets/Direktori/`:

```javascript
{
  id: 1,
  nama: "Universitas Cenderawasih",
  ringkasan: "Universitas Cenderawasih adalah perguruan tinggi negeri terkemuka di Papua dengan berbagai program studi unggulan.",
  kategori: "Universitas",
  lokasi: "Jayapura, Papua",
  gambar: "/Assets/Gedung-lldikti.jpg",
  pdfFile: "/Assets/Direktori/uncen-profil.pdf",  // ← File PDF Anda
  kontak: "0967-571234",
  email: "info@uncen.ac.id",
  website: "www.uncen.ac.id",
}
```

---

## 🔧 Fitur Lanjutan

### Menambah Kategori Baru

Edit array `kategoriDirektoriList` di file yang sama:

```javascript
export const kategoriDirektoriList = [
  "Semua",
  "Universitas",
  "Sekolah Tinggi",
  "Akademi",
  "Politeknik",
  "Kolej",  // ← Kategori baru
];
```

Kemudian tambahkan institusi dengan kategori tersebut.

### Mengubah Gambar Default

Jika ingin mengganti gambar `/Assets/Gedung-lldikti.jpg`, copy gambar baru ke folder `public/Assets/` dan update path di data.

---

## 📱 Tampilan di Berbagai Perangkat

- **Desktop** (lg): 3 kolom grid
- **Tablet** (md): 2 kolom grid  
- **Mobile** (sm): 1 kolom grid
- Semua elemen akan menyesuaikan ukuran otomatis

---

## ⚠️ Troubleshooting

### PDF tidak terbuka (404 error)
**Penyebab**: Path PDF di `DirektoriData.js` tidak cocok dengan file yang ada
**Solusi**: Cek spelling filename dan pastikan file ada di `public/Assets/Direktori/`

### Tidak ada hasil saat search
**Penyebab**: Keyword tidak cocok dengan nama/lokasi di data
**Solusi**: Cek bahwa data sudah benar di `DirektoriData.js`

### Gambar tidak tampil
**Penyebab**: Path gambar salah atau file tidak ada
**Solusi**: Gunakan path relatif dari `/public`, contoh: `/Assets/nama-file.jpg`

### Filter tidak bekerja
**Penyebab**: Kategori di data tidak cocok dengan `kategoriDirektoriList`
**Solusi**: Pastikan spelling kategori sama persis (huruf besar-kecil penting)

---

## 🎨 Kustomisasi CSS

Semua warna biru utama: `#1A2CA3` (bisa diganti di komponen)

Untuk styling lebih lanjut, edit file CSS di:
- [src/components/sections/DirektoriPage/DirektoriList.js](src/components/sections/DirektoriPage/DirektoriList.js)
- [src/components/sections/DirektoriPage/PDFViewerModal.js](src/components/sections/DirektoriPage/PDFViewerModal.js)

---

## 📞 File Penting

| File | Fungsi |
|------|--------|
| [src/app/publikasi/direktori/page.js](src/app/publikasi/direktori/page.js) | Halaman utama |
| [src/components/sections/DirektoriPage/DirektoriData.js](src/components/sections/DirektoriPage/DirektoriData.js) | Data institusi (EDIT DI SINI) |
| [src/components/sections/DirektoriPage/DirektoriList.js](src/components/sections/DirektoriPage/DirektoriList.js) | Komponen list & filter |
| [src/components/sections/DirektoriPage/PDFViewerModal.js](src/components/sections/DirektoriPage/PDFViewerModal.js) | Modal PDF viewer |

---

## ✨ Kualitas & Performa

- Responsive design menggunakan Tailwind CSS
- PDF viewer menggunakan iframe (kompatibel semua browser)
- Search & filter real-time tanpa loading
- Optimized untuk production (built successfully)
- No external API calls (semua lokal)

---

## 📌 Checklist Sebelum Deploy

- [ ] Semua file PDF sudah di folder `public/Assets/Direktori/`
- [ ] Path PDF di `DirektoriData.js` sudah benar
- [ ] Gambar institusi tersedia (atau gunakan gambar default)
- [ ] Test di browser lokal
- [ ] Test search & filter berfungsi
- [ ] Test PDF viewer modal membuka/menutup
- [ ] Test di mobile/tablet responsive OK
- [ ] Tidak ada console error (F12 → Console tab)

---

**Akses halaman**: http://localhost:3000/publikasi/direktori

**Desain mengikuti style halaman Berita** untuk konsistensi visual

Selamat! Halaman Direktori Perguruan Tinggi siap digunakan! 🎉

