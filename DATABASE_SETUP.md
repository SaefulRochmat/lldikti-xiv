# Database Setup Guide

## Prerequisites

1. **PostgreSQL** installed and running
2. **Node.js** and npm installed

## Setup Steps

### 1. Install Dependencies

```bash
npm install @prisma/client bcryptjs
npm install -D prisma
```

### 2. Configure Environment Variables

Create `.env` file in project root:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/lldikti14?schema=public"

# Authentication
JWT_SECRET="your-secret-key-change-this-in-production"
SESSION_EXPIRY_HOURS=24

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

**Important:** Replace `username`, `password`, and database name with your actual PostgreSQL credentials.

### 3. Generate Prisma Client

```bash
npm run db:generate
```

### 4. Create Database Tables

Choose one:

**Option A: Push schema (for development)**
```bash
npm run db:push
```

**Option B: Create migration (for production)**
```bash
npm run db:migrate
```

### 5. Seed Initial Admin User

```bash
npm run db:seed
```

This creates an admin user:
- **Email:** admin@lldikti14.go.id
- **Password:** admin123

⚠️ **IMPORTANT:** Change this password after first login!

## Database Schema

### Tables Created

1. **users** - Admin users
2. **sessions** - Authentication sessions
3. **survey_responses** - Survey submissions
4. **contact_messages** - Contact form submissions

## Admin Access

### Login

1. Navigate to: `http://localhost:3000/admin/login`
2. Use credentials from seed step
3. Change password immediately

### Features Available

- ✅ Protected admin dashboard
- ✅ View survey responses via `/api/admin/survey`
- ✅ View contact messages via `/api/admin/contact`
- ✅ Secure session-based authentication

## API Endpoints

### Public Endpoints

- `POST /api/contact` - Submit contact form
- `POST /api/survey/submit` - Submit survey response

### Authentication Endpoints

- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout
- `GET /api/auth/me` - Get current user

### Protected Admin Endpoints

- `GET /api/admin/survey` - Get survey responses (requires admin)
- `GET /api/admin/contact` - Get contact messages (requires admin)

## Development Tools

### Prisma Studio

Visual database browser:

```bash
npm run db:studio
```

Opens at `http://localhost:5555`

## Troubleshooting

### Connection Error

```
Error: Can't reach database server
```

**Solution:** Check PostgreSQL is running and credentials are correct in `.env`

### Migration Error

```
Error: P3009 - Failed to create database
```

**Solution:** Create database manually first:

```sql
CREATE DATABASE lldikti14;
```

### Permission Error

**Solution:** Ensure PostgreSQL user has necessary permissions:

```sql
GRANT ALL PRIVILEGES ON DATABASE lldikti14 TO username;
```

## Security Notes

1. **Never commit `.env` file** - use `.env.example` as template
2. **Change default admin password** immediately after setup
3. **Use strong JWT_SECRET** in production
4. **Enable SSL for PostgreSQL** in production
5. **Use environment-specific configs** for staging/production

## Production Deployment (Vercel)

### Database Options

1. **Vercel Postgres** (recommended)
2. **Supabase** (free tier available)
3. **Railway** (PostgreSQL hosting)
4. **Neon** (serverless PostgreSQL)

### Vercel Setup

1. Add environment variables in Vercel dashboard
2. Connect PostgreSQL database
3. Run migrations after deployment:

```bash
npx prisma migrate deploy
```

4. Seed admin user (one-time):

```bash
npx prisma db seed
```

## Architecture

```
Frontend
    ↓
API Routes (/api/*)
    ↓
Middleware (auth validation)
    ↓
Service Layer (business logic)
    ↓
Repository Layer (data access)
    ↓
Prisma ORM
    ↓
PostgreSQL Database
```

## Next Steps

1. ✅ Setup database
2. ✅ Test login at `/admin/login`
3. ✅ Change default password
4. ✅ Test survey submission
5. ✅ Test contact form
6. ⚡ Build admin UI for viewing submissions
7. ⚡ Add password change feature
8. ⚡ Add admin user management

---

**Need Help?**
Check `REFACTORING.md` for architecture details.
