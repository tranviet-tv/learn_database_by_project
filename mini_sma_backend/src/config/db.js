// Bước 1: Import PrismaClient từ thư mục code đã được sinh ra
const { PrismaClient } = require('../generated/prisma'); 

// Bước 2: Khởi tạo một đối tượng (instance) PrismaClient
const prisma = new PrismaClient();

// Bước 3: Xuất (export) đối tượng này ra để các file khác (controllers, services) có thể require lại và dùng
module.exports = prisma;
