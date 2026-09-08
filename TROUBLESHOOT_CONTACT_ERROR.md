# Troubleshoot: Contact Form Error 500

## 🔍 Error Yang Terjadi

```
POST http://localhost:3000/api/contact
net::ERR_ABORTED 500 (Internal Server Error)
```

## 🎯 Kemungkinan Penyebab

### 1. Database Belum Di-Setup (MOST LIKELY)

**Gejala:**
- Contact form error 500
- Survey form mungkin juga error
- Admin dashboard tidak menampilkan data

**Solusi:**
```bash
# 1. Pastikan .env sudah configured
# Check file .env ada dan benar

# 2. Generate Prisma Client
npm run db:generate

# 3. Push schema ke database
npm run db:push

# 4. Seed admin user
npm run db:seed

# 5. Restart dev server
npm run dev
```

---

### 2. Prisma Client Belum Di-Generate

**Gejala:**
- Error: "Cannot find module '@prisma/client'"
- Error: "PrismaClient is not a constructor"

**Solusi:**
```bash
npm run db:generate
```

---

### 3. Database Connection Error

**Gejala:**
- Error: "Can't reach database server"
- Error: "Authentication failed"

**Solusi:**

**Check .env file:**
```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/lldikti14?schema=public"
```

**Pastikan:**
- PostgreSQL running
- Username benar
- Password benar
- Database `lldikti14` sudah dibuat

**Test connection:**
```bash
# Via psql
psql -U postgres -d lldikti14 -c "SELECT 1"
```

---

### 4. Validation Error

**Gejala:**
- Error: "Validation failed"
- Error dari Zod

**Solusi:**

**Check data yang dikirim:**
```javascript
// Di Footer.js sudah ada console.log
// Check browser console untuk melihat data
```

**Pastikan form data lengkap:**
- `nama` (min 2 karakter)
- `email` (valid email)
- `pesan` (min 10 karakter)

---

## 🛠️ Diagnostic Steps

### Step 1: Check Server Logs

Setelah submit form, check terminal server untuk error:

```bash
# Look for errors like:
[API Contact] Error: ...
[API Contact] Stack: ...
```

### Step 2: Check Browser Console

Open browser DevTools → Console tab:

```javascript
// Should see:
Contact form error: { error: "..." }
Submit error: Error: ...
```

### Step 3: Test API Directly

**Via Browser DevTools Console:**
```javascript
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nama: 'Test User',
    email: 'test@example.com',
    pesan: 'Ini adalah pesan test untuk troubleshooting'
  })
})
.then(r => r.json())
.then(d => console.log(d))
.catch(e => console.error(e))
```

### Step 4: Check Database

```bash
# Check if table exists
npm run db:studio

# Opens Prisma Studio at localhost:5555
# Check if 'contact_messages' table exists
```

---

## ✅ Quick Fix Checklist

**Run these commands in order:**

```bash
# 1. Check if .env file exists
cat .env

# 2. Install dependencies (if not done)
npm install

# 3. Generate Prisma Client
npm run db:generate

# 4. Push schema to database
npm run db:push

# 5. Check database connection
# Open Prisma Studio to verify
npm run db:studio

# 6. Restart dev server
# Stop server (Ctrl+C)
npm run dev
```

---

## 🔧 Common Solutions

### Solution A: Fresh Database Setup

```bash
# 1. Drop and recreate database (if safe)
psql -U postgres
DROP DATABASE IF EXISTS lldikti14;
CREATE DATABASE lldikti14;
\q

# 2. Generate and push
npm run db:generate
npm run db:push
npm run db:seed

# 3. Restart
npm run dev
```

### Solution B: Reset Prisma

```bash
# 1. Remove generated files
rm -rf node_modules/.prisma
rm -rf .next

# 2. Regenerate
npm run db:generate

# 3. Rebuild
npm run dev
```

### Solution C: Use Supabase (Skip Local Setup)

If PostgreSQL local is problematic:

1. Sign up: https://supabase.com
2. Create project: `lldikti14`
3. Copy connection string
4. Update `.env`:
```env
DATABASE_URL="postgresql://postgres:[PASSWORD]@...supabase.co:6543/postgres"
```
5. Run migrations:
```bash
npm run db:push
npm run db:seed
```

---

## 📊 Test After Fix

### 1. Test Contact Form

1. Go to website homepage
2. Scroll to footer
3. Fill contact form:
   - Nama: Test User
   - Email: test@example.com  
   - Pesan: Ini test pesan
4. Click submit
5. Should show "Pesan berhasil dikirim"

### 2. Verify in Database

```bash
# Open Prisma Studio
npm run db:studio

# Go to localhost:5555
# Click 'contact_messages' table
# Should see your test message
```

### 3. Test in Admin

1. Login: `/admin/login`
2. Click "Lihat Pesan"
3. Should see test message

---

## 🆘 Still Not Working?

### Get Detailed Error

**Add this to contact route temporarily:**

```javascript
// src/app/api/contact/route.js
export async function POST(request) {
  try {
    const body = await request.json();
    console.log('=== DEBUG START ===');
    console.log('Body:', body);
    console.log('Prisma:', typeof prisma);
    console.log('=== DEBUG END ===');
    
    const message = await contactService.submitMessage(body);
    // ... rest of code
  } catch (error) {
    console.error('FULL ERROR:', error);
    console.error('ERROR NAME:', error.name);
    console.error('ERROR MESSAGE:', error.message);
    console.error('ERROR STACK:', error.stack);
    return handleApiError(error);
  }
}
```

**Then:**
1. Submit form
2. Check server terminal for detailed logs
3. Share the error details

---

## 📝 Expected Behavior

**When Working Correctly:**

1. User fills form
2. Click submit → Status: "sending"
3. API receives data
4. Validates with Zod
5. Saves to database
6. Returns success response
7. Status: "sent"
8. Form resets
9. After 3 seconds → Status: "idle"

**Server Logs:**
```
[API Contact] Received data: { nama: '...', email: '...', pesan: '...' }
[API Contact] Message saved: cltxxxxxxxxxxxxx
```

**Browser Console:**
```
{
  success: true,
  data: {
    id: "cltxxxxxxxxxxxxx",
    message: "Pesan berhasil dikirim. Terima kasih!"
  }
}
```

---

## 🎯 Most Common Issue

**99% of the time it's:**
- Database not configured
- Prisma client not generated
- Database connection string wrong

**Fix:**
```bash
npm run db:generate && npm run db:push && npm run dev
```

---

**Need more help?** Check server terminal logs and share the exact error message.
