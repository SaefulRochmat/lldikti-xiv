# ⚡ QUICK FIX: Contact Form Error 500

## 🚨 Error
```
POST http://localhost:3000/api/contact
net::ERR_ABORTED 500 (Internal Server Error)
```

---

## ✅ SOLUSI (3 Langkah)

### 1️⃣ Diagnostic
```bash
npm run db:check
```

### 2️⃣ Fix (Jika ada error dari diagnostic)
```bash
npm run db:generate
npm run db:push
npm run db:seed
```

### 3️⃣ Restart Server
```bash
# Tekan Ctrl+C untuk stop
npm run dev
```

---

## 🧪 Test

### Via Website
1. Buka: `http://localhost:3000`
2. Scroll ke footer
3. Isi form kontak
4. Klik "Kirim Pesan"
5. ✅ Seharusnya: "Pesan berhasil dikirim, terima kasih!"

### Via Database
```bash
npm run db:studio
```
- Buka: `http://localhost:5555`
- Check tabel `contact_messages`
- ✅ Seharusnya ada data baru

### Via Admin
1. Buka: `http://localhost:3000/admin/login`
2. Login:
   - Email: `admin@lldikti14.go.id`
   - Password: `admin123`
3. Klik menu "Pesan"
4. ✅ Seharusnya muncul pesan

---

## 🆘 Masih Error?

### Error: "Can't reach database server"
```bash
# PostgreSQL tidak running
# Windows: Services → Start PostgreSQL
# Atau gunakan Supabase (cloud)
```

### Error: "Table does not exist"
```bash
npm run db:push
```

### Error: "Authentication failed"
```bash
# Edit .env, ganti password:
DATABASE_URL="postgresql://postgres:PASSWORD_KAMU@localhost:5432/lldikti14?schema=public"
```

### Error: "Cannot find module"
```bash
npm install
npm run db:generate
```

---

## 📚 Dokumentasi Lengkap

- **`FIX_CONTACT_ERROR.md`** → Panduan detail fix error
- **`STATUS_CONTACT_ERROR.md`** → Status & diagnostic lengkap
- **`DATABASE_SETUP.md`** → Setup database dari awal
- **`TROUBLESHOOT_CONTACT_ERROR.md`** → Troubleshooting by error type

---

## 🎯 TL;DR

```bash
npm run db:check && npm run db:generate && npm run db:push && npm run db:seed
```

Restart server, test form.

Done! 🎉
