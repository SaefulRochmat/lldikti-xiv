# 🚨 FIX: Contact Form Error 500

## ❌ Error Yang Terjadi
```
POST http://localhost:3000/api/contact
net::ERR_ABORTED 500 (Internal Server Error)
```

---

## ✅ SOLUSI CEPAT (Jalankan Ini Dulu!)

Buka terminal di folder project, lalu jalankan perintah berikut **satu per satu**:

```bash
# 1. Generate Prisma Client
npm run db:generate

# 2. Push schema ke database (buat tabel)
npm run db:push

# 3. Seed admin user default
npm run db:seed

# 4. Restart server
# Tekan Ctrl+C untuk stop server dulu
npm run dev
```

Setelah itu, coba submit contact form lagi.

---

## 🔍 Apa Yang Dilakukan Perintah Di Atas?

### 1. `npm run db:generate`
- Membuat Prisma Client dari schema
- Tanpa ini, kode tidak bisa akses database
- **Wajib dijalankan** setiap kali schema berubah

### 2. `npm run db:push`
- Membuat tabel di database sesuai schema
- Tabel yang dibuat:
  - `users` (untuk admin)
  - `sessions` (untuk login)
  - `survey_responses` (untuk survey)
  - `contact_messages` (untuk pesan kontak) ← **INI YANG DIBUTUHKAN**
- Jika tabel belum ada, contact form akan error 500

### 3. `npm run db:seed`
- Membuat user admin default:
  - Email: `admin@lldikti14.go.id`
  - Password: `admin123`
- **PENTING:** Ganti password setelah login pertama kali!

### 4. Restart server
- Supaya perubahan terdeteksi
- Server perlu di-restart setelah generate Prisma Client

---

## 🧪 Test Setelah Fix

### Test 1: Cek Tabel Database
```bash
npm run db:studio
```
- Buka browser di `http://localhost:5555`
- Pastikan tabel `contact_messages` ada
- Jika ada, berarti database sudah siap

### Test 2: Submit Contact Form
1. Buka website: `http://localhost:3000`
2. Scroll ke footer
3. Isi form:
   - **Nama:** Test User
   - **Email:** test@example.com
   - **Pesan:** Ini adalah test pesan untuk troubleshooting
4. Klik **Kirim Pesan**
5. Seharusnya muncul: "Pesan berhasil dikirim, terima kasih!"

### Test 3: Cek Data Masuk
```bash
npm run db:studio
```
- Buka tabel `contact_messages`
- Seharusnya ada 1 record baru dengan data test kamu

### Test 4: Login Admin & Lihat Pesan
1. Buka: `http://localhost:3000/admin/login`
2. Login dengan:
   - **Email:** admin@lldikti14.go.id
   - **Password:** admin123
3. Klik menu **"Pesan"** di sidebar
4. Seharusnya muncul pesan test yang kamu kirim

---

## 🆘 Masih Error?

### Error A: "Can't reach database server"
**Artinya:** PostgreSQL tidak running

**Solusi:**
```bash
# Windows (jika pakai installer PostgreSQL)
# Buka Services → cari "PostgreSQL" → Start

# Atau cek dengan:
psql -U postgres -c "SELECT 1"
```

Jika PostgreSQL belum terinstall, ada 2 opsi:
1. **Install lokal** (lihat `SETUP_POSTGRESQL.md`)
2. **Pakai Supabase** (cloud, gratis, lebih mudah)

### Error B: "Authentication failed"
**Artinya:** Username/password database salah

**Solusi:** Update file `.env`
```env
DATABASE_URL="postgresql://postgres:ahdune123@localhost:5432/lldikti14?schema=public"
                        ^^^^     ^^^^^^^^^
                        user     password (ganti sesuai password postgres kamu)
```

### Error C: "Database does not exist"
**Artinya:** Database `lldikti14` belum dibuat

**Solusi:**
```bash
# Buat database dulu
psql -U postgres
CREATE DATABASE lldikti14;
\q

# Lalu jalankan lagi
npm run db:push
```

### Error D: "Cannot find module '@prisma/client'"
**Artinya:** Dependencies belum terinstall

**Solusi:**
```bash
npm install
npm run db:generate
```

---

## 🎯 Kemungkinan Penyebab (Berdasarkan Context)

### Penyebab #1: Tabel Belum Dibuat (MOST LIKELY)
- Database `lldikti14` sudah ada
- Tapi tabel `contact_messages` belum dibuat
- **Fix:** `npm run db:push`

### Penyebab #2: Prisma Client Belum Di-Generate
- Schema ada, database ada
- Tapi Prisma Client belum di-generate
- **Fix:** `npm run db:generate`

### Penyebab #3: Server Belum Di-Restart
- Setelah generate/push, server belum restart
- **Fix:** Stop server (Ctrl+C), lalu `npm run dev` lagi

---

## 📊 Penjelasan Alur Contact Form

Saat user submit form:
```
1. Frontend (Footer.js)
   ↓ POST /api/contact { nama, email, pesan }

2. API Route (/api/contact/route.js)
   ↓ Validasi data dengan Zod
   ↓ Panggil contactService

3. Service Layer (contactService.js)
   ↓ Business logic
   ↓ Panggil contactRepository

4. Repository Layer (contactRepository.js)
   ↓ prisma.contactMessage.create()

5. Database (PostgreSQL)
   ✅ Data tersimpan di tabel contact_messages
```

**Error 500 terjadi di step 4-5**, yang artinya:
- Database tidak bisa diakses, ATAU
- Tabel tidak ada, ATAU
- Prisma Client tidak bisa connect

---

## 🔧 Full Reset (Jika Semua Cara Di Atas Gagal)

**⚠️ WARNING: Ini akan menghapus semua data!**

```bash
# 1. Drop database
psql -U postgres
DROP DATABASE IF EXISTS lldikti14;
CREATE DATABASE lldikti14;
\q

# 2. Hapus cache
rmdir /s /q node_modules\.prisma
rmdir /s /q .next

# 3. Fresh setup
npm install
npm run db:generate
npm run db:push
npm run db:seed

# 4. Start
npm run dev
```

---

## 📋 Checklist Troubleshooting

Cek satu per satu:

- [ ] PostgreSQL running (`psql -U postgres -c "SELECT 1"`)
- [ ] Database `lldikti14` ada (`psql -U postgres -l`)
- [ ] File `.env` ada dan DATABASE_URL benar
- [ ] Dependencies installed (`node_modules/@prisma/client` ada)
- [ ] Prisma Client generated (`npm run db:generate`)
- [ ] Tabel sudah dibuat (`npm run db:push`)
- [ ] Server sudah di-restart
- [ ] Browser console tidak ada CORS error
- [ ] Server terminal tidak ada error saat startup

---

## 💡 Tips

1. **Selalu check server terminal** saat submit form
   - Error 500 biasanya disertai error log di server
   - Cari log yang dimulai dengan `[API Contact] Error:`

2. **Check browser DevTools Console**
   - Buka F12 → Console tab
   - Lihat error message detail

3. **Gunakan Prisma Studio untuk debug**
   - `npm run db:studio`
   - Bisa lihat langsung data di database
   - Bisa cek apakah tabel ada atau tidak

4. **Jika pakai Supabase (cloud database)**
   - Tidak perlu install PostgreSQL lokal
   - Lebih mudah untuk development
   - Lihat `DATABASE_SETUP.md` untuk setup Supabase

---

## 📞 Bantuan Lebih Lanjut

Jika masih error setelah mengikuti semua langkah di atas:

1. Check **server terminal** saat submit form
2. Copy **full error message**
3. Copy **browser console error**
4. Bagikan untuk troubleshooting lebih lanjut

**Common error messages:**
- `PrismaClientKnownRequestError` → Database/tabel issue
- `PrismaClientInitializationError` → Connection issue
- `ZodError` → Validasi input gagal
- `Cannot find module` → Dependency/import issue

---

**TL;DR:** Jalankan ini:
```bash
npm run db:generate && npm run db:push && npm run db:seed
```
Lalu restart server (`Ctrl+C` → `npm run dev`)
