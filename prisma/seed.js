const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email = process.env.SEED_ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.SEED_ADMIN_PASSWORD;
  const name = process.env.SEED_ADMIN_NAME?.trim() || 'Admin LLDIKTI XIV';

  if (!email || !password) {
    throw new Error('SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD are required');
  }

  if (password.length < 16) {
    throw new Error('Admin password must be at least 16 characters');
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log(`Admin ${email} already exists; no changes made.`);
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  await prisma.user.create({
    data: { email, password: hashedPassword, name, role: 'admin' },
  });

  console.log(`Admin ${email} created.`);
}

main()
  .catch((error) => {
    console.error('Seed failed:', error.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
