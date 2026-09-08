/**
 * Database Seed
 * Creates initial admin user
 */
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Create default admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@lldikti14.go.id' },
    update: {},
    create: {
      email: 'admin@lldikti14.go.id',
      password: hashedPassword,
      name: 'Admin LLDIKTI XIV',
      role: 'admin',
    },
  });

  console.log('✅ Admin user created:', {
    email: admin.email,
    name: admin.name,
    defaultPassword: 'admin123',
  });

  console.log('⚠️  IMPORTANT: Change the default password after first login!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
