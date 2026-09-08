# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Prerequisites
- ✅ Node.js installed
- ✅ PostgreSQL installed and running

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure Environment
Create `.env` file:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/lldikti14"
JWT_SECRET="change-this-to-random-string"
SESSION_EXPIRY_HOURS=24
```

### Step 3: Setup Database
```bash
npm run db:generate
npm run db:push
npm run db:seed
```

### Step 4: Start Development Server
```bash
npm run dev
```

### Step 5: Login to Admin
1. Open: http://localhost:3000/admin/login
2. Email: `admin@lldikti14.go.id`
3. Password: `admin123`
4. **Change password immediately!**

## 🎯 What's New?

### Database
- ✅ PostgreSQL with Prisma ORM
- ✅ 4 tables: users, sessions, surveys, contacts

### API Endpoints
```
POST   /api/auth/login        # Admin login
POST   /api/auth/logout       # Admin logout
GET    /api/auth/me           # Current user
POST   /api/contact           # Submit contact form
POST   /api/survey/submit     # Submit survey
GET    /api/admin/survey      # Get surveys (admin only)
GET    /api/admin/contact     # Get contacts (admin only)
```

### Security
- ✅ Session-based authentication
- ✅ Protected admin routes
- ✅ bcrypt password hashing
- ✅ Input validation

## 📖 Full Documentation

- `DATABASE_SETUP.md` - Detailed setup guide
- `ARCHITECTURE.md` - Architecture details
- `IMPLEMENTATION_REPORT.md` - Complete changes log

## ⚠️ Important Notes

1. **Change default password** after first login
2. **Never commit `.env`** file
3. **Backup database** before migrations
4. **Use strong JWT_SECRET** in production

## 🆘 Troubleshooting

**Can't connect to database?**
→ Check DATABASE_URL and PostgreSQL running

**Login not working?**
→ Ensure database is seeded: `npm run db:seed`

**API returns 500 error?**
→ Check server logs and database connection

## 📞 Need Help?

Check documentation files or review code comments in:
- `src/services/` - Business logic
- `src/repositories/` - Data access
- `src/app/api/` - API endpoints
