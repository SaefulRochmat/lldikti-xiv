# 📊 Status: Contact Form Error 500

**Tanggal:** 8 September 2026  
**Issue:** POST /api/contact menghasilkan error 500 (Internal Server Error)

---

## 🎯 Diagnosis Singkat

Berdasarkan analisis kode dan konfigurasi:

1. ✅ **Database configured**: File `.env` sudah memiliki DATABASE_URL yang benar
2. ✅ **API route exists**: `/api/contact` sudah dibuat dengan logging
3. ✅ **Service layer exists**: `contactService.js` sudah dibuat
4. ✅ **Repository exists**: `contactRepository.js` sudah dibuat
5. ✅ **Frontend form**: `Footer.js` sudah menggunakan API dengan error handling
6. ❓ **Database tables**: Belum dikonfirmasi apakah tabel sudah dibuat

**Kemungkinan penyebab terbesar:**
- Tabel `contact_messages` belum dibuat di database
- Atau Prisma Client belum di-generate

---

## 🚀 LANGKAH PERBAIKAN CEPAT

Jalankan perintah berikut **satu per satu** di terminal:

```bash
# 1. Diagnostic (check masalahnya apa)
npm run db:check

# 2. Jika ada error "tables not found", jalankan:
npm run db:generate
npm run db:push
npm run db:seed

# 3. Restart server
# Tekan Ctrl+C dulu, lalu:
npm run dev
```

### Penjelasan Perintah

**`npm run db:check`** (BARU!)
- Script diagnostic otomatis
- Akan mengecek:
  - ✅ Koneksi database
  - ✅ Tabel sudah ada atau belum
  - ✅ Bisa write ke database atau tidak
  - ✅ Admin user sudah ada atau belum
- Jika ada masalah, script akan memberitahu solusinya

**`npm run db:generate`**
- Generate Prisma Client dari schema
- Wajib dijalankan minimal 1x setelah clone project

**`npm run db:push`**
- Membuat tabel di database sesuai schema
- Tabel yang dibuat:
  - `users` (admin login)
  - `sessions` (session tracking)
  - `survey_responses` (data survey)
  - `contact_messages` (data pesan) ← **UNTUK CONTACT FORM**

**`npm run db:seed`**
- Membuat admin user default
- Email: `admin@lldikti14.go.id`
- Password: `admin123`

---

## 📝 Test Setelah Fix

### 1. Test Database (Otomatis)
```bash
npm run db:check
```
Output yang diharapkan:
```
✅ Successfully connected to database
✅ All tables exist
✅ Successfully created test message
✅ Admin user exists
✅ All diagnostic tests passed!
```

### 2. Test Contact Form (Manual)

**Step 1: Buka website**
```
http://localhost:3000
```

**Step 2: Scroll ke footer, isi form:**
- Nama: Test User
- Email: test@example.com
- Pesan: Ini adalah test pesan

**Step 3: Klik "Kirim Pesan"**

**Expected result:**
- Status berubah jadi "Mengirim..."
- Lalu muncul: "Pesan berhasil dikirim, terima kasih!" (hijau)
- Form kosong otomatis
- Setelah 3 detik, status kembali normal

**If error:**
- Muncul: "Gagal mengirim pesan. Coba lagi nanti." (merah)
- Check server terminal untuk error log
- Check browser console (F12) untuk error detail

### 3. Verify Data Masuk

**Opsi A: Via Prisma Studio**
```bash
npm run db:studio
```
- Buka `http://localhost:5555`
- Klik tabel `contact_messages`
- Seharusnya ada record baru dengan data test

**Opsi B: Via Admin Dashboard**
1. Buka `http://localhost:3000/admin/login`
2. Login:
   - Email: `admin@lldikti14.go.id`
   - Password: `admin123`
3. Klik menu "Pesan" di sidebar
4. Seharusnya muncul pesan test yang baru dikirim

---

## 🔍 Debug Info (Jika Masih Error)

### Check 1: Server Terminal Logs

Saat submit form, check terminal server. Seharusnya ada log:
```
[API Contact] Received data: { nama: '...', email: '...', pesan: '...' }
[API Contact] Message saved: clt...
```

Jika ada error, akan muncul:
```
[API Contact] Error: ...
[API Contact] Stack: ...
```

### Check 2: Browser Console

Buka DevTools (F12) → Console tab.

**Success:**
```javascript
{
  success: true,
  data: {
    id: "clt...",
    message: "Pesan berhasil dikirim. Terima kasih!"
  }
}
```

**Error:**
```javascript
Contact form error: { error: "..." }
Submit error: Error: ...
```

### Check 3: Database Connection

Test koneksi database manual:
```bash
psql -U postgres -d lldikti14 -c "SELECT COUNT(*) FROM contact_messages"
```

Jika error:
- `psql: command not found` → PostgreSQL belum di-install atau belum di-PATH
- `connection refused` → PostgreSQL tidak running
- `database "lldikti14" does not exist` → Database belum dibuat
- `relation "contact_messages" does not exist` → Tabel belum dibuat (run `npm run db:push`)

---

## 🛠️ Troubleshooting by Error Type

### Error A: "Cannot reach database server"
```
[API Contact] Error: Can't reach database server at `localhost:5432`
```

**Penyebab:** PostgreSQL tidak running

**Solusi:**
```bash
# Check status PostgreSQL
# Windows: Services → PostgreSQL → Start
# Atau gunakan Supabase (cloud database, gratis)
```

### Error B: "Table does not exist"
```
[API Contact] Error: The table `public.contact_messages` does not exist
```

**Penyebab:** Tabel belum dibuat

**Solusi:**
```bash
npm run db:push
```

### Error C: "Authentication failed"
```
[API Contact] Error: Authentication failed for user `postgres`
```

**Penyebab:** Password database salah di `.env`

**Solusi:**
Edit `.env`:
```env
DATABASE_URL="postgresql://postgres:YOUR_CORRECT_PASSWORD@localhost:5432/lldikti14?schema=public"
```

### Error D: "Cannot find module '@prisma/client'"
```
Error: Cannot find module '@prisma/client'
```

**Penyebab:** Dependencies belum terinstall atau Prisma Client belum di-generate

**Solusi:**
```bash
npm install
npm run db:generate
```

### Error E: "Validation failed"
```
[API Contact] Error: Validation failed
```

**Penyebab:** Data form tidak sesuai schema

**Check:** Browser console, lihat data yang dikirim
**Schema:** 
- `nama`: min 2 karakter
- `email`: valid email format
- `pesan`: min 10 karakter

---

## 📚 File-File Penting

### Files Created/Updated untuk Fix Ini:

1. **`check-db.js`** (BARU!)
   - Script diagnostic otomatis
   - Run: `npm run db:check`

2. **`FIX_CONTACT_ERROR.md`** (BARU!)
   - Panduan lengkap fix error 500
   - Termasuk troubleshooting by error type

3. **`package.json`** (UPDATED)
   - Added: `"db:check": "node check-db.js"`

4. **`src/app/api/contact/route.js`** (SUDAH ADA)
   - API route dengan enhanced logging
   - Untuk debug error

5. **`src/components/sections/Footer/Footer.js`** (SUDAH ADA)
   - Contact form dengan error handling
   - Auto-reset status setelah 3 detik

### Documentation:

- `DATABASE_SETUP.md` - Setup PostgreSQL atau Supabase
- `SETUP_POSTGRESQL.md` - Install PostgreSQL lokal
- `TROUBLESHOOT_CONTACT_ERROR.md` - Troubleshooting detail
- `FIX_CONTACT_ERROR.md` - Quick fix guide
- `STATUS_CONTACT_ERROR.md` - Dokumen ini

---

## 🎯 Next Steps

### Immediate (Sekarang):

1. ✅ Jalankan `npm run db:check` untuk diagnostic
2. ✅ Jika ada error, jalankan `npm run db:generate && npm run db:push && npm run db:seed`
3. ✅ Restart server
4. ✅ Test contact form
5. ✅ Verify data masuk (via Prisma Studio atau Admin Dashboard)

### After Fix:

1. ⚠️ **GANTI PASSWORD ADMIN** setelah login pertama kali
2. ✅ Test semua fitur:
   - Contact form (frontend)
   - Survey form (frontend)
   - Admin login
   - Admin dashboard
   - Admin messages page
   - Admin surveys page
3. ✅ Setup backup database (optional)
4. ✅ Setup production database untuk deployment

### Production Deployment:

- Tidak bisa pakai PostgreSQL lokal
- Opsi:
  1. **Supabase** (recommended, free tier, easy)
  2. **Vercel Postgres** (integrated dengan Vercel)
  3. **Railway** (free tier available)
  4. **Neon** (serverless PostgreSQL)

---

## 📞 Need Help?

Jika masih error setelah mengikuti semua langkah:

1. Run `npm run db:check` dan screenshot hasilnya
2. Submit contact form dan screenshot browser console error (F12)
3. Screenshot server terminal error logs
4. Share:
   - Output dari `npm run db:check`
   - Browser console error
   - Server terminal error
   - File `.env` (hide password)

---

## ✅ Summary

**What we know:**
- Code is correct ✅
- Database config exists ✅
- API endpoint exists ✅
- Frontend form is correct ✅

**What needs to be done:**
- Ensure database tables are created
- Ensure Prisma Client is generated
- Test and verify

**Quickest fix:**
```bash
npm run db:check
# Follow the instructions from the diagnostic
```

**TL;DR:**
```bash
npm run db:generate && npm run db:push && npm run db:seed
# Restart server (Ctrl+C, then npm run dev)
# Test contact form
```

---

**Last Updated:** 8 September 2026  
**Status:** Awaiting user action (run diagnostic & fix)
