const prisma = require("../config/db");

async function getAllProducts() {
    try {
        const products = await prisma.products.findMany();
        return products;
    } catch (error) {
        throw error;
    }
}

async function createProduct(productData) {
    try {
        const product = await prisma.products.create({ data: productData });
        return product;
    } catch (error) {
        throw error;
    }
}
module.exports = { getAllProducts, createProduct };