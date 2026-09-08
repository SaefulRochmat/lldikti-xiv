# Setup PostgreSQL untuk Windows

## Pilihan 1: Install PostgreSQL Lokal (Recommended untuk Development)

### A. Download PostgreSQL

1. Download dari: https://www.postgresql.org/download/windows/
2. Pilih installer untuk Windows
3. Atau download via: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

### B. Install PostgreSQL

1. Jalankan installer
2. Set password untuk user `postgres` (catat password ini!)
3. Port: `5432` (default)
4. Locale: Default
5. Finish installation

### C. Buat Database

**Opsi 1: Via pgAdmin (GUI)**
1. Buka pgAdmin 4 (terinstall otomatis)
2. Connect ke PostgreSQL (masukkan password)
3. Klik kanan "Databases" → Create → Database
4. Nama: `lldikti14`
5. Owner: `postgres`
6. Save

**Opsi 2: Via Command Line**
```bash
# Buka Command Prompt atau PowerShell
psql -U postgres

# Di psql prompt:
CREATE DATABASE lldikti14;
\q
```

### D. Update File .env

Edit file `.env`:

```env
# Ganti dengan credentials PostgreSQL Anda
DATABASE_URL="postgresql://postgres:PASSWORD_ANDA@localhost:5432/lldikti14?schema=public"

# Ganti PASSWORD_ANDA dengan password yang Anda set saat install
# Contoh:
# DATABASE_URL="postgresql://postgres:admin123@localhost:5432/lldikti14?schema=public"

JWT_SECRET="ganti-dengan-random-string-panjang"
SESSION_EXPIRY_HOURS=24
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### E. Test Koneksi

```bash
# Di project folder
npm run db:generate
```

Jika berhasil, lanjut ke step F.

### F. Push Schema ke Database

```bash
npm run db:push
```

### G. Seed Admin User

```bash
npm run db:seed
```

---

## Pilihan 2: Gunakan PostgreSQL Cloud (Tanpa Install)

Jika tidak ingin install PostgreSQL lokal, gunakan cloud service gratis:

### A. Supabase (Recommended - Free Tier)

1. **Sign up:** https://supabase.com
2. **Create project:**
   - Organization: Buat baru
   - Project name: lldikti14
   - Database password: Set password kuat (catat!)
   - Region: Southeast Asia (Singapore)
   - Free plan
3. **Get connection string:**
   - Go to Project Settings → Database
   - Copy "Connection string" (URI mode)
   - Ganti `[YOUR-PASSWORD]` dengan password Anda

4. **Update .env:**
```env
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
```

### B. Neon (Alternative - Free Tier)

1. **Sign up:** https://neon.tech
2. **Create project:** lldikti14
3. **Copy connection string** dari dashboard
4. **Update .env:**
```env
DATABASE_URL="postgresql://[user]:[password]@[host]/[database]?sslmode=require"
```

### C. Railway (Alternative)

1. **Sign up:** https://railway.app
2. **New Project** → Add PostgreSQL
3. **Copy connection string** dari Variables tab
4. **Update .env:**
```env
DATABASE_URL="postgresql://..."
```

---

## Troubleshooting

### Error: "password authentication failed"

**Solusi:**
- Pastikan password di DATABASE_URL benar
- Jika ada karakter spesial dalam password, encode dengan URL encoding:
  - `@` → `%40`
  - `#` → `%23`
  - `$` → `%24`
  - `&` → `%26`

**Contoh:**
```env
# Password: admin@123
DATABASE_URL="postgresql://postgres:admin%40123@localhost:5432/lldikti14"
```

### Error: "database does not exist"

**Solusi:**
```sql
-- Buat database manual via psql
psql -U postgres
CREATE DATABASE lldikti14;
\q
```

### Error: "could not connect to server"

**Solusi:**
1. Cek PostgreSQL running:
   - Buka Services (Win+R → services.msc)
   - Cari "postgresql" service
   - Pastikan status "Running"
   - Jika tidak, klik Start

2. Atau restart service:
```bash
net stop postgresql-x64-16
net start postgresql-x64-16
```

### Error: "port 5432 already in use"

**Solusi:**
- Ada aplikasi lain menggunakan port 5432
- Ganti port di DATABASE_URL ke 5433 atau lainnya

---

## Verifikasi Setup

Setelah setup, test dengan:

```bash
# 1. Generate Prisma Client
npm run db:generate

# 2. Push schema (create tables)
npm run db:push

# 3. Seed admin user
npm run db:seed

# 4. Start dev server
npm run dev

# 5. Test login
# Browser: http://localhost:3000/admin/login
# Email: admin@lldikti14.go.id
# Password: admin123
```

---

## Alternatif: Skip Database (Testing Only)

Jika hanya ingin test frontend tanpa database:

1. **Comment out database calls** sementara
2. **Atau** gunakan mock data
3. **Tidak recommended** untuk production

---

## Rekomendasi

**Untuk development lokal:** Install PostgreSQL lokal  
**Untuk production:** Gunakan Supabase atau Neon  
**Untuk quick testing:** Supabase (gratis, 500MB)  

---

## Next Steps Setelah Database Ready

```bash
npm run dev                    # Start server
npm run db:studio             # Open Prisma Studio (database GUI)
```

Access:
- **Website:** http://localhost:3000
- **Admin:** http://localhost:3000/admin/login
- **Prisma Studio:** http://localhost:5555
