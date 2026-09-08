# 🔧 FIX: Database Connection Error

## Error Yang Anda Alami

```
Authentication failed against database server, 
the provided database credentials for `user` are not valid.
```

## 🎯 Penyebab

File `.env` Anda masih menggunakan **placeholder values**:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/lldikti14?schema=public"
                          ^^^^  ^^^^^^^^
                          Ini masih dummy!
```

## ✅ SOLUSI CEPAT

### Pilih salah satu:

---

## OPSI 1: PostgreSQL Lokal (Jika Sudah Terinstall)

### 1. Cek PostgreSQL Running

**Windows:**
- Tekan `Win + R`
- Ketik `services.msc`
- Cari service "postgresql"
- Pastikan status **"Running"**

### 2. Update .env

Edit file `.env`:

```env
# Ganti dengan username dan password PostgreSQL Anda
DATABASE_URL="postgresql://postgres:PASSWORD_ANDA@localhost:5432/lldikti14?schema=public"

# Contoh jika password PostgreSQL Anda adalah "admin123":
# DATABASE_URL="postgresql://postgres:admin123@localhost:5432/lldikti14?schema=public"

JWT_SECRET="random-secret-key-change-this"
SESSION_EXPIRY_HOURS=24
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 3. Buat Database

**Via pgAdmin:**
1. Buka pgAdmin
2. Kanan klik "Databases" → Create → Database
3. Name: `lldikti14`
4. Save

**Via Command:**
```bash
psql -U postgres
CREATE DATABASE lldikti14;
\q
```

### 4. Setup Tables

```bash
npm run db:generate
npm run db:push
npm run db:seed
```

### 5. Restart Dev Server

```bash
npm run dev
```

✅ **DONE!** Test di: http://localhost:3000/admin/login

---

## OPSI 2: Gunakan Supabase (Cloud - Gratis, Tanpa Install)

### 1. Sign Up Supabase

Go to: https://supabase.com/dashboard/sign-up

### 2. Buat Project

- Project name: `lldikti14`
- Database password: Buat password (catat!)
- Region: Singapore
- Pricing plan: **Free**
- Create project (tunggu ~2 menit)

### 3. Get Connection String

1. Go to: **Project Settings** (gear icon)
2. Click: **Database**
3. Scroll ke **Connection string**
4. Copy: **URI** (bukan Transaction or Session pooling)
5. Format: `postgresql://postgres:[YOUR-PASSWORD]@...`

### 4. Update .env

```env
# Paste connection string dari Supabase
DATABASE_URL="postgresql://postgres.xxxxxxxxxxxx:[YOUR-PASSWORD]@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres"

JWT_SECRET="random-secret-key-change-this"
SESSION_EXPIRY_HOURS=24
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

**PENTING:** Ganti `[YOUR-PASSWORD]` dengan password yang Anda buat!

### 5. Setup Tables

```bash
npm run db:generate
npm run db:push
npm run db:seed
```

### 6. Restart Dev Server

```bash
npm run dev
```

✅ **DONE!** Test di: http://localhost:3000/admin/login

---

## OPSI 3: PostgreSQL Belum Terinstall? Install Dulu

### Quick Install (Windows)

1. **Download:** https://www.postgresql.org/download/windows/
2. **Install:** Ikuti wizard
3. **Set password** untuk user `postgres` (CATAT PASSWORD INI!)
4. **Finish** installation

5. **Buat database:**
```bash
psql -U postgres
CREATE DATABASE lldikti14;
\q
```

6. **Update .env:**
```env
DATABASE_URL="postgresql://postgres:PASSWORD_ANDA@localhost:5432/lldikti14?schema=public"
```

7. **Setup:**
```bash
npm run db:generate
npm run db:push
npm run db:seed
npm run dev
```

---

## 📋 Checklist

Setelah setup, pastikan:

- [ ] File `.env` sudah di-update dengan credentials benar
- [ ] PostgreSQL service running (jika lokal)
- [ ] Database `lldikti14` sudah dibuat
- [ ] `npm run db:push` berhasil (no error)
- [ ] `npm run db:seed` berhasil (admin user created)
- [ ] Dev server bisa start (`npm run dev`)
- [ ] Login page bisa dibuka
- [ ] Login berhasil dengan: `admin@lldikti14.go.id` / `admin123`

---

## 🆘 Masih Error?

### Error: "password authentication failed"

**Solusi:** Password salah, cek lagi password PostgreSQL Anda

### Error: "database lldikti14 does not exist"

**Solusi:** Buat database dulu:
```sql
psql -U postgres
CREATE DATABASE lldikti14;
```

### Error: "could not connect to server"

**Solusi:** PostgreSQL tidak running, start service:
- Win+R → `services.msc` → Start "postgresql" service

### Error: "role 'user' does not exist"

**Solusi:** Username salah di DATABASE_URL, ganti `user` dengan `postgres`

---

## 🎯 Rekomendasi

**Tercepat:** Gunakan **Supabase** (no install, gratis, 2 menit setup)  
**Terbaik untuk dev:** Install **PostgreSQL lokal**  
**Production:** Gunakan **Vercel Postgres** atau **Supabase**  

---

## Bantuan Tambahan

Lihat guide lengkap di: `SETUP_POSTGRESQL.md`
