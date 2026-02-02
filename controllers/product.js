const Product = require("../models/Product");
const Review = require("../models/Review");

// Display all products or search by name
const showAllProducts = async (req, res) => {
    try {
        const searchQuery = req.query.search || ""; 

        const products = searchQuery
            ? await Product.find({ name: { $regex: searchQuery, $options: "i" } })
            : await Product.find({});

        res.render('products/index', { products, searchQuery });
    } catch (e) {
        res.status(500).render('error', { err: e.message });
    }
};



// // Display all products
// const showAllProducts = async (req, res) => {
//     try {
//         const products = await Product.find({});
//         res.render('products/index', { products });
//     } catch (e) {
//         res.status(500).render('error', { err: e.message });
//     }
// };

// Render form to add new product
const productForm = (req, res) => {
    try {
        res.render('products/new');
    } catch (e) {
        res.status(500).render('error', { err: e.message });
    }
};

// Create a new product in DB
const createProduct = async (req, res) => {
    try {
        const { name, img, desc, price } = req.body;
        await Product.create({
            name,
            img,
            price: parseFloat(price),
            desc,
            author: req.user._id
        });
        req.flash('success', 'Successfully added a new product!');
        res.redirect('/products');
    } catch (e) {
        res.status(500).render('error', { err: e.message });
    }
};

// Show product details
// const showProduct = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id).populate('reviews');
//         res.render('products/show', { product });
//     } catch (e) {
//         res.status(500).render('error', { err: e.message });
//     }
// };
const showProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const foundProduct = await Product.findById(id).populate('reviews');
        if (!foundProduct) {
            req.flash('error', 'Product not found');
            return res.redirect('/products');
        }
        res.render('products/show', { foundProduct, currentUser: req.user });
    } catch (e) {
        res.status(500).render('error', { err: e.message });
    }
};


// Render form to edit product
const editProductForm = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
       res.render('products/edit', { foundProduct: product });
    } catch (e) {
        res.status(500).render('error', { err: e.message });
    }
};

// Update product in DB
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, img, desc } = req.body;
        await Product.findByIdAndUpdate(id, { name, price, img, desc });
        req.flash('success', 'Product updated successfully');
        res.redirect(`/products/${id}`);
    } catch (e) {
        res.status(500).render('error', { err: e.message });
    }
};

// Delete product
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        // Delete associated reviews if any
        for (let reviewId of product.reviews) {
            await Review.findByIdAndDelete(reviewId);
        }

        await Product.findByIdAndDelete(id);
        req.flash('success', 'Product deleted successfully');
        res.redirect('/products');
    } catch (e) {
        res.status(500).render('error', { err: e.message });
    }
};

module.exports = {
    showAllProducts,
    productForm,
    createProduct,
    showProduct,
    editProductForm,
    updateProduct,
    deleteProduct
};
