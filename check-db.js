/**
 * Database Connection Diagnostic Script
 * 
 * Run: node check-db.js
 * 
 * This will check:
 * 1. Can connect to database
 * 2. Are tables created
 * 3. Can perform basic operations
 */

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('🔍 Starting database diagnostic...\n');
  
  // Test 1: Connection
  console.log('📡 Test 1: Database Connection');
  try {
    await prisma.$connect();
    console.log('✅ Successfully connected to database\n');
  } catch (error) {
    console.error('❌ Cannot connect to database');
    console.error('Error:', error.message);
    console.error('\n💡 Fix:');
    console.error('   1. Check if PostgreSQL is running');
    console.error('   2. Check DATABASE_URL in .env file');
    console.error('   3. Make sure database "lldikti14" exists');
    process.exit(1);
  }

  // Test 2: Check tables
  console.log('📋 Test 2: Check Tables');
  try {
    // Try to count records in each table
    const userCount = await prisma.user.count();
    const sessionCount = await prisma.session.count();
    const surveyCount = await prisma.surveyResponse.count();
    const contactCount = await prisma.contactMessage.count();
    
    console.log('✅ All tables exist:');
    console.log(`   - users: ${userCount} records`);
    console.log(`   - sessions: ${sessionCount} records`);
    console.log(`   - survey_responses: ${surveyCount} records`);
    console.log(`   - contact_messages: ${contactCount} records`);
    console.log('');
  } catch (error) {
    console.error('❌ Tables not found or cannot be accessed');
    console.error('Error:', error.message);
    console.error('\n💡 Fix:');
    console.error('   Run: npm run db:push');
    console.error('   This will create all required tables');
    process.exit(1);
  }

  // Test 3: Test write operation
  console.log('✍️  Test 3: Test Write Operation');
  try {
    const testMessage = await prisma.contactMessage.create({
      data: {
        nama: 'Test User (Diagnostic)',
        email: 'diagnostic@test.com',
        pesan: 'This is a test message created by diagnostic script',
        status: 'unread',
      },
    });
    
    console.log('✅ Successfully created test message');
    console.log(`   ID: ${testMessage.id}`);
    
    // Clean up
    await prisma.contactMessage.delete({
      where: { id: testMessage.id },
    });
    console.log('✅ Successfully deleted test message');
    console.log('');
  } catch (error) {
    console.error('❌ Cannot write to database');
    console.error('Error:', error.message);
    console.error('\n💡 This might indicate:');
    console.error('   - Database permission issue');
    console.error('   - Schema mismatch');
    console.error('   Try: npm run db:generate && npm run db:push');
    process.exit(1);
  }

  // Test 4: Check admin user
  console.log('👤 Test 4: Check Admin User');
  try {
    const adminUser = await prisma.user.findFirst({
      where: { role: 'ADMIN' },
    });
    
    if (adminUser) {
      console.log('✅ Admin user exists');
      console.log(`   Email: ${adminUser.email}`);
      console.log(`   Role: ${adminUser.role}`);
    } else {
      console.log('⚠️  No admin user found');
      console.log('💡 Fix:');
      console.log('   Run: npm run db:seed');
      console.log('   This will create default admin:');
      console.log('   - Email: admin@lldikti14.go.id');
      console.log('   - Password: admin123');
    }
    console.log('');
  } catch (error) {
    console.error('❌ Cannot check users');
    console.error('Error:', error.message);
  }

  console.log('✅ All diagnostic tests passed!');
  console.log('');
  console.log('🎯 Database is ready to use');
  console.log('   You can now:');
  console.log('   1. Submit contact form');
  console.log('   2. Submit survey');
  console.log('   3. Login to admin dashboard');
}

main()
  .catch((error) => {
    console.error('❌ Unexpected error:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
