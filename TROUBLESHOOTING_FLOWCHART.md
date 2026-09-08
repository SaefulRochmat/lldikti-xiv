# 🔄 Troubleshooting Flowchart: Contact Form Error 500

```
┌─────────────────────────────────────────┐
│  Contact Form Error 500 saat Submit    │
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│  STEP 1: Run Diagnostic                 │
│  $ npm run db:check                     │
└─────────────────────────────────────────┘
                    │
        ┌───────────┴───────────┐
        │                       │
        ▼                       ▼
    [SUCCESS]               [ERROR]
        │                       │
        ▼                       ▼
┌──────────────┐     ┌──────────────────────┐
│ All tests    │     │ What error do you    │
│ passed! ✅   │     │ see?                 │
└──────────────┘     └──────────────────────┘
        │                       │
        │         ┌─────────────┼─────────────┬─────────────┐
        │         │             │             │             │
        │         ▼             ▼             ▼             ▼
        │    ┌────────┐   ┌─────────┐   ┌────────┐   ┌────────┐
        │    │ Cannot │   │ Tables  │   │ Cannot │   │ Cannot │
        │    │ connect│   │ not     │   │ write  │   │ find   │
        │    │ to DB  │   │ exist   │   │ to DB  │   │ module │
        │    └────────┘   └─────────┘   └────────┘   └────────┘
        │         │             │             │             │
        │         ▼             ▼             ▼             ▼
        │    ┌────────┐   ┌─────────┐   ┌────────┐   ┌────────┐
        │    │ FIX A  │   │ FIX B   │   │ FIX C  │   │ FIX D  │
        │    └────────┘   └─────────┘   └────────┘   └────────┘
        │         │             │             │             │
        │         └─────────────┴─────────────┴─────────────┘
        │                       │
        │                       ▼
        │         ┌──────────────────────────┐
        │         │ Run fixes, then restart  │
        │         │ diagnostic               │
        │         └──────────────────────────┘
        │                       │
        └───────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│ STEP 2: Restart Server                  │
│ Ctrl+C, then $ npm run dev              │
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│ STEP 3: Test Contact Form              │
│ http://localhost:3000                   │
│ Fill form → Submit                      │
└─────────────────────────────────────────┘
                    │
        ┌───────────┴───────────┐
        │                       │
        ▼                       ▼
    [SUCCESS]               [ERROR]
        │                       │
        ▼                       ▼
┌──────────────┐     ┌──────────────────────┐
│ "Pesan       │     │ Check server logs    │
│ berhasil     │     │ & browser console    │
│ dikirim!" ✅ │     └──────────────────────┘
└──────────────┘                │
        │                       │
        ▼                       ▼
┌──────────────┐     ┌──────────────────────┐
│ Verify data  │     │ See SPECIFIC ERROR   │
│ in database  │     │ FIXES below          │
└──────────────┘     └──────────────────────┘
        │
        ▼
    [DONE! 🎉]
```

---

## 🛠️ FIX A: Cannot Connect to Database

**Error:**
```
❌ Cannot connect to database
Error: Can't reach database server at `localhost:5432`
```

**Possible Causes:**
1. PostgreSQL not running
2. Wrong port
3. Wrong hostname

**Solution:**

### Check if PostgreSQL is running:
```bash
# Windows: Check Services
services.msc → Look for "PostgreSQL" → Start if stopped

# Or via command:
psql -U postgres -c "SELECT 1"
```

### If not installed:
- **Option A:** Install PostgreSQL locally (see `SETUP_POSTGRESQL.md`)
- **Option B:** Use Supabase (cloud, easier) (see `DATABASE_SETUP.md`)

### If installed but won't start:
```bash
# Check logs
# Windows: C:\Program Files\PostgreSQL\{version}\data\pg_log\

# Check if port 5432 is in use
netstat -ano | findstr :5432
```

### After fixing:
```bash
npm run db:check
```

---

## 🛠️ FIX B: Tables Not Found

**Error:**
```
❌ Tables not found or cannot be accessed
Error: The table `public.contact_messages` does not exist
```

**Cause:**
- Database exists, but tables haven't been created

**Solution:**
```bash
# Push schema to create tables
npm run db:push
```

**This will create:**
- `users` table
- `sessions` table
- `survey_responses` table
- `contact_messages` table ← **For contact form**

**After running:**
```bash
npm run db:check
```

Should show:
```
✅ All tables exist:
   - users: 0 records
   - sessions: 0 records
   - survey_responses: 0 records
   - contact_messages: 0 records
```

---

## 🛠️ FIX C: Cannot Write to Database

**Error:**
```
❌ Cannot write to database
Error: Permission denied
```

**Possible Causes:**
1. Schema mismatch
2. Permission issue
3. Database locked

**Solution:**

### Try regenerate & push:
```bash
npm run db:generate
npm run db:push
```

### If still fails, check permissions:
```bash
# Test write manually
psql -U postgres -d lldikti14

# In psql:
CREATE TABLE test (id SERIAL PRIMARY KEY);
INSERT INTO test VALUES (1);
DROP TABLE test;
\q
```

### If permission denied:
```bash
# Grant permissions
psql -U postgres -d lldikti14

# In psql:
GRANT ALL PRIVILEGES ON DATABASE lldikti14 TO postgres;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO postgres;
\q
```

### After fixing:
```bash
npm run db:check
```

---

## 🛠️ FIX D: Cannot Find Module

**Error:**
```
❌ Cannot find module '@prisma/client'
```

**Cause:**
- Dependencies not installed, OR
- Prisma Client not generated

**Solution:**

### Install dependencies:
```bash
npm install
```

### Generate Prisma Client:
```bash
npm run db:generate
```

### After installing:
```bash
npm run db:check
```

---

## 🚨 SPECIFIC ERROR FIXES (From Browser/Server)

### Error: "Authentication failed"
```
Error: Authentication failed for user `postgres`
```

**Fix:** Update `.env` with correct password
```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/lldikti14?schema=public"
```

### Error: "Database does not exist"
```
Error: database "lldikti14" does not exist
```

**Fix:** Create database
```bash
psql -U postgres
CREATE DATABASE lldikti14;
\q

# Then:
npm run db:push
```

### Error: "Validation failed"
```
[API Contact] Error: Validation failed
```

**Cause:** Form data doesn't match schema

**Check requirements:**
- `nama`: minimum 2 characters
- `email`: valid email format
- `pesan`: minimum 10 characters

**Debug:** Check browser console to see what data was sent

### Error: "PrismaClientInitializationError"
```
PrismaClientInitializationError: Can't reach database server
```

**Fix:** Database connection issue (see FIX A)

### Error: "PrismaClientKnownRequestError"
```
PrismaClientKnownRequestError: Table does not exist
```

**Fix:** Tables not created (see FIX B)

---

## 🔄 FULL RESET (Last Resort)

If nothing works, nuclear option:

```bash
# 1. Drop database
psql -U postgres
DROP DATABASE IF EXISTS lldikti14;
CREATE DATABASE lldikti14;
\q

# 2. Remove cache
rmdir /s /q node_modules\.prisma
rmdir /s /q .next

# 3. Fresh install
npm install

# 4. Setup database
npm run db:generate
npm run db:push
npm run db:seed

# 5. Verify
npm run db:check

# 6. Start
npm run dev
```

⚠️ **WARNING:** This deletes ALL data!

---

## 🎯 Quick Decision Tree

**Start here:**
```
Is PostgreSQL installed?
├─ No  → Install PostgreSQL OR use Supabase
└─ Yes → Continue

Is PostgreSQL running?
├─ No  → Start PostgreSQL service
└─ Yes → Continue

Does database 'lldikti14' exist?
├─ No  → CREATE DATABASE lldikti14;
└─ Yes → Continue

Run: npm run db:check
├─ Cannot connect → Fix connection (FIX A)
├─ Tables not found → npm run db:push (FIX B)
├─ Cannot write → Fix permissions (FIX C)
├─ Cannot find module → npm install (FIX D)
└─ All tests passed → Restart server & test form

Test contact form
├─ Success → Done! 🎉
└─ Still error → Check server logs & browser console
                 → See SPECIFIC ERROR FIXES
```

---

## 📋 Verification Checklist

After fix, verify these:

### Database:
- [ ] PostgreSQL is running
- [ ] Database `lldikti14` exists
- [ ] All 4 tables exist (check with `npm run db:studio`)
- [ ] Can connect (check with `npm run db:check`)
- [ ] Admin user exists (check in Prisma Studio)

### Code:
- [ ] Dependencies installed (`node_modules` folder exists)
- [ ] Prisma Client generated (no import errors)
- [ ] Server running without errors
- [ ] No console errors on page load

### Functionality:
- [ ] Contact form loads
- [ ] Can type in all fields
- [ ] Submit button works
- [ ] Success message appears
- [ ] Data appears in database
- [ ] Data appears in admin dashboard

---

## 🆘 Still Not Working?

If you've followed all steps and it's still not working:

### Collect this information:

1. **Diagnostic output:**
   ```bash
   npm run db:check > diagnostic.txt
   ```

2. **Server logs:**
   - Submit form
   - Copy entire error from terminal

3. **Browser console:**
   - F12 → Console tab
   - Submit form
   - Screenshot error

4. **Environment info:**
   - Windows version
   - PostgreSQL version: `psql --version`
   - Node version: `node --version`
   - npm version: `npm --version`

5. **Database info:**
   ```bash
   psql -U postgres -l > databases.txt
   psql -U postgres -d lldikti14 -c "\dt" > tables.txt
   ```

---

## 💡 Pro Tips

1. **Always check server logs first**
   - Most errors show detailed message in terminal

2. **Use Prisma Studio for debugging**
   ```bash
   npm run db:studio
   ```
   - Visual interface to see data
   - Can check if tables exist
   - Can manually add/edit/delete records

3. **Test in order:**
   1. Database connection (`npm run db:check`)
   2. Table existence (Prisma Studio)
   3. Write operation (submit form)
   4. Read operation (admin dashboard)

4. **Common gotchas:**
   - Forgot to restart server after `db:generate`
   - Forgot to run `db:push` after cloning project
   - PostgreSQL service stopped
   - Wrong password in `.env`

5. **Prevention:**
   - Always run `db:check` after fresh clone
   - Always run `db:generate && db:push` after schema changes
   - Always restart server after Prisma changes

---

**Summary:**
1. Run diagnostic → 2. Fix errors → 3. Restart server → 4. Test form → 5. Done! 🎉
