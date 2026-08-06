const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');

// 1. Tạo một "hồ chứa kết nối" (Connection Pool) tới Database
const pool = new Pool({ 
    connectionString: process.env.DATABASE_URL 
});

// 2. Bọc hồ chứa này vào Adapter của Prisma
const adapter = new PrismaPg(pool);

// 3. Khởi tạo PrismaClient và truyền adapter vào
const prisma = new PrismaClient({ adapter });

module.exports = prisma;
