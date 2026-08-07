const productService = require('../services/productService');

//Controller - View

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getProductById = async (req, res) => {

}

const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateProduct = async (req, res) => {

}

const deleteProduct = async (req, res) => {

}

module.exports = { 
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}