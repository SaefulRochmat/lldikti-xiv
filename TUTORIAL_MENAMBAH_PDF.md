# Langkah-Langkah Menambahkan PDF - Tutorial Visual

## 🎯 Tujuan Akhir
Setiap institusi akan memiliki file PDF yang bisa dibuka di website tanpa berpindah halaman.

---

## 📍 FOLDER STRUKTUR

```
D:\Web Projects\web-profile-lldikti-xiv\
├── public/
│   └── Assets/
│       ├── Gedung-lldikti.jpg        (sudah ada)
│       └── Direktori/                 (BUAT FOLDER INI)
│           ├── universitas-cenderawasih.pdf      (COPY PDF DI SINI)
│           ├── unipa-profil.pdf
│           ├── stie-bukitzaitun-profil.pdf
│           └── ... (semua PDF ada di folder ini)
│
└── src/
    └── components/sections/
        └── DirektoriPage/
            ├── DirektoriData.js      (EDIT FILE INI)
            └── ... (komponen lainnya)
```

---

## 📋 URUTAN KERJA

### ✅ STEP 1: Siapkan File PDF

Pastikan Anda punya file PDF untuk setiap institusi, misalnya:
- `Universitas Cenderawasih - Profil 2026.pdf`
- `UNIPA - Panduan Akademik.pdf`
- `STIE Bukit Zaitun - Data Institusi.pdf`
- dll

**Ukuran File**: Ideal < 5MB per file (untuk loading cepat)

---

### ✅ STEP 2: Buat Folder Direktori

**Opsi A: Menggunakan Terminal**
```bash
cd D:\Web Projects\web-profile-lldikti-xiv
mkdir public\Assets\Direktori
```

**Opsi B: Manual (Windows Explorer)**
1. Buka folder: `D:\Web Projects\web-profile-lldikti-xiv\public\Assets`
2. Klik kanan → New Folder
3. Beri nama: `Direktori`

Hasil:
```
✅ D:\Web Projects\web-profile-lldikti-xiv\public\Assets\Direktori\
```

---

### ✅ STEP 3: Copy File PDF

1. Siapkan file PDF (bisa di Desktop atau folder manapun)
2. **RENAME** file ke nama yang jelas dan konsisten

   **Nama File Rekomendasi:**
   - `universitas-cenderawasih.pdf` (gunakan lowercase + hyphen)
   - `stie-bukitzaitun.pdf`
   - `akademi-bahasa.pdf`
   - `unipa-profil.pdf`

3. **COPY** ke folder: `D:\Web Projects\web-profile-lldikti-xiv\public\Assets\Direktori\`

Hasil:
```
✅ D:\Web Projects\web-profile-lldikti-xiv\public\Assets\Direktori\universitas-cenderawasih.pdf
✅ D:\Web Projects\web-profile-lldikti-xiv\public\Assets\Direktori\stie-bukitzaitun.pdf
✅ ... (semua PDF ada di sini)
```

---

### ✅ STEP 4: Update File DirektoriData.js

**File**: `D:\Web Projects\web-profile-lldikti-xiv\src\components\sections\DirektoriPage\DirektoriData.js`

**Buka file dan cari:**
```javascript
export const direktoriData = [
  {
    id: 1,
    nama: "Universitas Cenderawasih",
    ringkasan: "Universitas Cenderawasih adalah perguruan tinggi negeri terkemuka di Papua dengan berbagai program studi unggulan.",
    kategori: "Universitas",
    lokasi: "Jayapura, Papua",
    gambar: "/Assets/Gedung-lldikti.jpg",
    pdfFile: "/Assets/Direktori/cenderawasih-profil.pdf",  // ← UBAH INI
    kontak: "0967-571234",
    email: "info@uncen.ac.id",
    website: "www.uncen.ac.id",
  },
  ...
]
```

**GANTI** bagian `pdfFile` sesuai nama file PDF Anda:

```javascript
// SEBELUM:
pdfFile: "/Assets/Direktori/cenderawasih-profil.pdf",

// SESUDAH (jika nama file Anda adalah universitas-cenderawasih.pdf):
pdfFile: "/Assets/Direktori/universitas-cenderawasih.pdf",
```

**PENTING:**
- Path harus diawali dengan `/Assets/Direktori/`
- Nama file harus **PERSIS SAMA** dengan file di folder
- Case-sensitive (besar-kecil huruf penting)
- Gunakan format: `/Assets/Direktori/nama-file.pdf`

---

### ✅ STEP 5: Update Info Institusi (Optional)

Di file yang sama, update juga:
- `ringkasan` - Deskripsi institusi
- `lokasi` - Alamat lengkap
- `kontak` - Nomor telepon
- `email` - Email institusi
- `website` - Website institusi
- `gambar` - Gambar institusi (optional)

Contoh:
```javascript
{
  id: 1,
  nama: "Universitas Cenderawasih",
  ringkasan: "UNCEN adalah universitas terkemuka di Papua dengan fokus pada pendidikan berkualitas dan riset inovatif.",  // ← UPDATE
  kategori: "Universitas",
  lokasi: "Jl. Raya Sentani-Abepura, Jayapura, Papua",  // ← UPDATE
  gambar: "/Assets/Gedung-lldikti.jpg",  // ← GANTI jika ada gambar institusi
  pdfFile: "/Assets/Direktori/universitas-cenderawasih.pdf",  // ← SESUAIKAN
  kontak: "0967-571234",  // ← UPDATE
  email: "info@uncen.ac.id",  // ← UPDATE
  website: "www.uncen.ac.id",  // ← UPDATE
}
```

---

### ✅ STEP 6: Test di Browser

1. Pastikan dev server berjalan:
   ```bash
   npm run dev
   ```
   (Seharusnya sudah berjalan on port 3000)

2. Buka browser:
   ```
   http://localhost:3000/publikasi/direktori
   ```

3. **TEST SEARCH & FILTER:**
   - Ketik di search bar
   - Klik filter kategori
   - Pastikan hasil berubah

4. **TEST PDF VIEWER:**
   - Klik tombol **"Lihat Profil PDF"** di card institusi
   - Seharusnya modal terbuka
   - PDF seharusnya tampil
   - Coba download
   - Tutup modal

---

## 🔄 CONTOH LENGKAP

### Contoh: Menambahkan "Universitas Cenderawasih"

**STEP 1: Siapkan File**
- File: `Universitas Cenderawasih - Profil.pdf`
- Rename menjadi: `universitas-cenderawasih.pdf`

**STEP 2: Copy ke Folder**
- Ke: `public/Assets/Direktori/universitas-cenderawasih.pdf`

**STEP 3: Edit DirektoriData.js**

Temukan blok:
```javascript
{
  id: 1,
  nama: "Universitas Cenderawasih",
  ...
  pdfFile: "/Assets/Direktori/cenderawasih-profil.pdf",  // ← INI
  ...
}
```

Ubah menjadi:
```javascript
{
  id: 1,
  nama: "Universitas Cenderawasih",
  ringkasan: "Universitas terkemuka di Papua dengan akreditasi nasional.",
  kategori: "Universitas",
  lokasi: "Jayapura, Papua",
  gambar: "/Assets/Gedung-lldikti.jpg",
  pdfFile: "/Assets/Direktori/universitas-cenderawasih.pdf",  // ← BERUBAH
  kontak: "0967-571234",
  email: "info@uncen.ac.id",
  website: "www.uncen.ac.id",
}
```

**STEP 4: Save File**
- Ctrl+S di VS Code
- Dev server akan auto-reload

**STEP 5: Test**
- Buka browser → `/publikasi/direktori`
- Cari "Cenderawasih"
- Filter "Universitas"
- Klik "Lihat Profil PDF"
- PDF seharusnya terbuka ✅

---

## ⚡ Quick Checklist

Sebelum test, pastikan:

- [ ] Folder `public/Assets/Direktori/` sudah ada
- [ ] File PDF sudah di dalam folder tersebut
- [ ] Path di DirektoriData.js sesuai nama file
- [ ] Tidak ada typo di path (case-sensitive)
- [ ] File sudah di-save (`Ctrl+S`)
- [ ] Dev server berjalan (`npm run dev`)
- [ ] Browser di-refresh (`Ctrl+R`)

---

## 🆘 Troubleshooting

### ❌ PDF tidak terbuka (404 error)

**Cek:**
1. Apakah folder `public/Assets/Direktori/` sudah ada?
   - Jika belum: Buat folder
2. Apakah file PDF ada di folder tersebut?
   - Buka Explorer: `D:\Web Projects\web-profile-lldikti-xiv\public\Assets\Direktori\`
   - Lihat apakah file ada
3. Apakah path di DirektoriData.js sama dengan nama file?
   - Contoh: File `universitas-cenderawasih.pdf` → Path `/Assets/Direktori/universitas-cenderawasih.pdf`
4. Apakah ada spasi di path?
   - Jangan gunakan spasi (gunakan hyphen `-` atau underscore `_`)

**Solusi:**
- Gunakan nama file lowercase tanpa spasi
- Contoh: ✅ `universitas-cenderawasih.pdf` ❌ `Universitas Cenderawasih.pdf`

### ❌ Hasil search kosong

**Kemungkinan:**
- Kategori di data tidak ada di kategoriDirektoriList
- Typo di kategori name

**Solusi:**
- Cek spelling kategori: `"Universitas"`, `"Sekolah Tinggi"`, `"Akademi"`, `"Politeknik"`

### ❌ Browser cache (PDF tidak update)

**Solusi:**
- Buka DevTools (F12)
- Network tab → Disable cache
- Atau refresh dengan Ctrl+Shift+R (hard refresh)

---

## 📝 Edit Data Institusi Lain

Proses yang sama untuk institusi lain:

1. Rename PDF file dengan nama yang jelas
2. Copy ke `public/Assets/Direktori/`
3. Update path di DirektoriData.js
4. Update info institusi (nama, lokasi, kontak, email, website)
5. Test di browser

---

## 💡 Tips

1. **Nama File Konsisten:**
   - Gunakan lowercase + hyphen
   - Contoh: `nama-institusi.pdf`
   - Hindari spasi dan karakter khusus

2. **Path Selalu:**
   - Diawali: `/Assets/Direktori/`
   - Diakhiri: `.pdf`
   - Contoh: `/Assets/Direktori/nama-institusi.pdf`

3. **Update Data Lengkap:**
   - Jangan lupa update ringkasan, lokasi, kontak
   - Info lengkap membuat halaman lebih profesional

4. **Test Setiap Kali:**
   - Test search dengan nama institusi
   - Test filter kategori
   - Test PDF open/download/close

---

**Selesai! Halaman Direktori Anda siap dengan PDF files.** 🎉

Untuk panduan lebih lanjut, lihat: `DIREKTORI_GUIDE.md` atau `README_DIREKTORI.md`
