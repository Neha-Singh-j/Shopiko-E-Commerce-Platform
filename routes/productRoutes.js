const express = require('express');
const router = express.Router();
const { validateProduct, isLoggedIn, isSeller, isProductAuthor } = require('../middlewares');
const productController = require('../controllers/product');

// Display all products
router.get('/products', productController.showAllProducts);

// Form to add new product
router.get('/products/new', isLoggedIn, isSeller, productController.productForm);

// Create a product
router.post('/products', isLoggedIn, isSeller, validateProduct, productController.createProduct);

// Show product details
router.get('/products/:id', isLoggedIn, productController.showProduct);

// Form to edit product
router.get('/products/:id/edit', isLoggedIn, isSeller, productController.editProductForm);

// Update product
router.patch('/products/:id', isLoggedIn, isSeller, isProductAuthor, validateProduct, productController.updateProduct);

// Delete product
router.delete('/products/:id', isLoggedIn, isSeller, isProductAuthor, productController.deleteProduct);

module.exports = router;
