const express = require('express');
const Product = require('../models/Product');
const Review = require('../models/Review');
const { validateReview, isLoggedIn } = require('../middlewares');

const router = express.Router();

router.post('/products/:productId/review', isLoggedIn, validateReview, async (req, res) => {
    try {
        const { productId } = req.params;
        const { rating, comment } = req.body;

        const product = await Product.findById(productId);
        if (!product) {
            req.flash('error', 'Product not found');
            return res.redirect('/products');
        }

        // creating a new review
        const review = new Review({
            rating,
            comment,
            author: req.user._id   // link review to logged in user
        });

        // adding review id to product's reviews array
        product.reviews.push(review._id);

        await review.save();
        await product.save();

        req.flash('success', 'Review added successfully');
        res.redirect(`/products/${productId}`);
    } catch (e) {
        console.error(e);
        res.status(500).render('error', { err: e.message });
    }
});

module.exports = router;
