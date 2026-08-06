const prisma = require("../config/db");

async function getAllProducts() {
    try {
        const products = await prisma.products.findMany();
        return products;
    } catch (error) {
        throw error;
    }
}
module.exports = { getAllProducts };