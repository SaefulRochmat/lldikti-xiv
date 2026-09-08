# Architecture Documentation

## Overview

This project now implements clean architecture with proper separation of concerns:

```
Frontend → API → Service → Repository → Database
```

## Layer Responsibilities

### 1. Frontend Layer (`src/components/`, `src/app/`)

**Responsibilities:**
- UI rendering
- User interaction
- Client-side state management
- Form validation (client-side)
- API calls

**Cannot do:**
- Direct database access
- Business logic
- Server-side validation

**Key Files:**
- `src/app/admin/login/page.js` - Login page
- `src/app/admin/layout.js` - Protected route wrapper
- `src/app/survey/page.js` - Survey form with API integration
- `src/components/sections/Footer/Footer.js` - Contact form

### 2. API Layer (`src/app/api/`)

**Responsibilities:**
- Request handling
- Response formatting
- Authentication check
- Authorization check
- Input validation
- Error handling

**Structure:**
```
src/app/api/
├── auth/
│   ├── login/route.js      # POST - Login
│   ├── logout/route.js     # POST - Logout
│   └── me/route.js         # GET - Current user
├── contact/route.js        # POST - Submit contact
├── survey/
│   └── submit/route.js     # POST - Submit survey
└── admin/
    ├── survey/route.js     # GET - Get surveys (protected)
    └── contact/route.js    # GET - Get messages (protected)
```

### 3. Middleware Layer (`src/middleware/`)

**Responsibilities:**
- Authentication verification
- Authorization verification
- Session validation

**Key Files:**
- `src/middleware/auth.js` - Auth middleware

**Functions:**
- `requireAuth()` - Check if user is authenticated
- `requireAdmin()` - Check if user is admin
- `getSessionToken()` - Extract session token

### 4. Service Layer (`src/services/`)

**Responsibilities:**
- Business logic
- Data transformation
- Multiple repository orchestration
- Transaction handling

**Key Files:**
- `src/services/authService.js` - Authentication logic
- `src/services/surveyService.js` - Survey business logic
- `src/services/contactService.js` - Contact message logic

**Example:**
```javascript
// Service combines business logic
async submitSurvey(data) {
  // 1. Validate
  const validated = surveySchema.parse(data);
  
  // 2. Transform
  const surveyData = { ...validated, age: parseInt(validated.age) };
  
  // 3. Save via repository
  return await surveyRepository.create(surveyData);
}
```

### 5. Repository Layer (`src/repositories/`)

**Responsibilities:**
- Database queries
- CRUD operations
- Data access abstraction

**Key Files:**
- `src/repositories/userRepository.js`
- `src/repositories/surveyRepository.js`
- `src/repositories/contactRepository.js`
- `src/repositories/sessionRepository.js`

**Example:**
```javascript
// Repository only handles data access
async create(data) {
  return await prisma.surveyResponse.create({ data });
}
```

### 6. Library Layer (`src/lib/`)

**Responsibilities:**
- Shared utilities
- Configuration
- Validation schemas
- Response helpers

**Key Files:**
- `src/lib/prisma.js` - Prisma client singleton
- `src/lib/validations.js` - Zod schemas
- `src/lib/apiResponse.js` - API response helpers

### 7. Database Layer (Prisma + PostgreSQL)

**Responsibilities:**
- Data persistence
- Schema definition
- Migrations
- Relations

**Key Files:**
- `prisma/schema.prisma` - Database schema
- `prisma/seed.js` - Initial data

## Data Flow Examples

### Example 1: Survey Submission

```
User fills survey
    ↓
Frontend calls POST /api/survey/submit
    ↓
API route validates request
    ↓
Service layer processes business logic
    ↓
Repository saves to database
    ↓
Database stores data
    ↓
Response flows back to frontend
```

### Example 2: Admin Login

```
User enters credentials
    ↓
Frontend calls POST /api/auth/login
    ↓
API route validates input
    ↓
Auth service verifies credentials
    ↓
Repository finds user
    ↓
Service creates session
    ↓
Cookie set in response
    ↓
Frontend redirects to /admin
```

### Example 3: Protected Admin Route

```
User visits /admin
    ↓
Admin layout checks auth
    ↓
Frontend calls GET /api/auth/me
    ↓
Middleware extracts session token
    ↓
Service verifies session
    ↓
Repository checks session validity
    ↓
If valid: show dashboard
If invalid: redirect to /admin/login
```

## Security Implementation

### Authentication

**Method:** Session-based with tokens
**Storage:** httpOnly cookies
**Expiry:** 24 hours (configurable)

**Flow:**
1. Login → Generate token → Store in session table → Return cookie
2. Each request → Extract token → Verify in database → Allow/Deny
3. Logout → Delete session → Clear cookie

### Authorization

**Method:** Role-based access control (RBAC)
**Roles:** `admin`, `super_admin`

**Implementation:**
```javascript
const { authenticated, authorized } = await requireAdmin(request);

if (!authenticated) return authError();
if (!authorized) return forbiddenError();
```

### Password Security

**Method:** bcrypt hashing
**Rounds:** 10
**Never stored:** Plain text passwords

## API Response Format

### Success Response

```json
{
  "success": true,
  "data": { ... }
}
```

### Error Response

```json
{
  "success": false,
  "error": "Error message",
  "errors": [
    {
      "field": "email",
      "message": "Email tidak valid"
    }
  ]
}
```

## Validation Strategy

### Client-side

- Form validation (React state)
- Immediate feedback
- UX improvement

### Server-side

- Zod schema validation
- Type safety
- Security enforcement

**Both are required** - never trust client-side validation alone.

## Database Schema

### Users Table
```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String   // bcrypt hashed
  name      String
  role      String   @default("admin")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### Survey Responses Table
```prisma
model SurveyResponse {
  id        String   @id @default(cuid())
  age       Int
  gender    String
  job       String
  services  String[] // Array
  // ... ratings ...
  feedback  String?
  createdAt DateTime @default(now())
}
```

### Contact Messages Table
```prisma
model ContactMessage {
  id        String   @id @default(cuid())
  nama      String
  email     String
  pesan     String
  status    String   @default("unread")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### Sessions Table
```prisma
model Session {
  id        String   @id @default(cuid())
  userId    String
  token     String   @unique
  expiresAt DateTime
  createdAt DateTime @default(now())
}
```

## Environment Variables

Required variables in `.env`:

```env
# Database
DATABASE_URL="postgresql://..."

# Auth
JWT_SECRET="..."
SESSION_EXPIRY_HOURS=24

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## Testing Strategy

### Manual Testing Checklist

- [ ] Login with correct credentials
- [ ] Login with wrong credentials
- [ ] Access /admin without login (should redirect)
- [ ] Access /admin after login (should show dashboard)
- [ ] Logout
- [ ] Submit survey form
- [ ] Submit contact form
- [ ] View survey responses (admin)
- [ ] View contact messages (admin)

### API Testing (with curl)

```bash
# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@lldikti14.go.id","password":"admin123"}' \
  -c cookies.txt

# Get current user
curl http://localhost:3000/api/auth/me \
  -b cookies.txt

# Submit survey
curl -X POST http://localhost:3000/api/survey/submit \
  -H "Content-Type: application/json" \
  -d @survey-data.json
```

## Deployment Considerations

### Vercel Deployment

1. **Database:** Use Vercel Postgres or external PostgreSQL
2. **Environment:** Set all env vars in Vercel dashboard
3. **Migrations:** Run `prisma migrate deploy` after deploy
4. **Build:** Automatic on push to main branch

### Pre-deployment Checklist

- [ ] Change default admin password
- [ ] Use strong JWT_SECRET
- [ ] Enable PostgreSQL SSL
- [ ] Review .gitignore
- [ ] Test all endpoints
- [ ] Check error handling
- [ ] Verify authentication works
- [ ] Test protected routes

## Maintenance

### Adding New Admin Features

1. Create repository method (data access)
2. Create service method (business logic)
3. Create API route with `requireAdmin` middleware
4. Add frontend component

### Adding New Public Features

1. Create repository method
2. Create service method
3. Create API route with validation
4. Add frontend component

### Database Changes

1. Update `prisma/schema.prisma`
2. Run `npm run db:migrate`
3. Update repositories
4. Update services
5. Update API routes

## Troubleshooting

### Common Issues

**Issue:** "Can't reach database"
**Solution:** Check DATABASE_URL and PostgreSQL running

**Issue:** "Invalid session"
**Solution:** Clear cookies and login again

**Issue:** "Forbidden"
**Solution:** Check user role in database

**Issue:** "Validation failed"
**Solution:** Check Zod schema matches input data

## Performance Considerations

### Database

- Indexes on frequently queried fields
- Connection pooling (Prisma default)
- Query optimization in repositories

### API

- Response caching where appropriate
- Rate limiting for public endpoints (future)
- Pagination for large datasets

### Frontend

- Server-side rendering (Next.js default)
- Static generation where possible
- Lazy loading for admin features

## Security Best Practices

1. ✅ Passwords hashed with bcrypt
2. ✅ Sessions stored server-side
3. ✅ HttpOnly cookies (no XSS)
4. ✅ Input validation (Zod)
5. ✅ Protected routes (middleware)
6. ✅ Role-based access control
7. ⚠️ TODO: Rate limiting
8. ⚠️ TODO: CSRF protection
9. ⚠️ TODO: SQL injection prevention (Prisma handles this)

---

**Last Updated:** 2026-09-08
**Version:** 2.1.0
