const express = require("express");
const Joi = require("joi");
const Product = require("../models/Product");
const Review = require("../models/Review");
const {
  validateProduct,
  isLoggedIn,
  isSeller,
  isProductAuthor,
} = require("../middlewares");

const router = express.Router();

// Get all products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products); // ✅ send JSON instead of rendering
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Form for new product (not needed in React, but keeping API stub)
router.get("/products/new", isLoggedIn, isSeller, (req, res) => {
  res.json({ message: "Render product creation form in frontend React" });
});

// Add product to DB
router.post(
  "/products",
  isLoggedIn,
  isSeller,
  validateProduct,
  async (req, res) => {
    try {
      const { name, img, price, desc } = req.body;
      const product = await Product.create({
        name,
        img,
        price,
        desc,
        author: req.user._id,
      });

      res.status(201).json({
        message: "Product added successfully",
        product,
      });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
);

// Get product details
router.get("/products/:id", isLoggedIn, async (req, res) => {
  try {
    const { id } = req.params;
    const foundProduct = await Product.findById(id).populate("reviews");
    if (!foundProduct) return res.status(404).json({ error: "Product not found" });

    res.json(foundProduct);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Edit product (fetch data for editing)
router.get("/products/:id/edit", isLoggedIn, isSeller, async (req, res) => {
  try {
    const { id } = req.params;
    const foundProduct = await Product.findById(id);
    if (!foundProduct) return res.status(404).json({ error: "Product not found" });

    res.json(foundProduct);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Update product
router.patch(
  "/products/:id",
  isLoggedIn,
  isSeller,
  isProductAuthor,
  validateProduct,
  async (req, res) => {
    try {
      const { id } = req.params;
      const { name, img, price, desc } = req.body;

      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { name, img, price, desc },
        { new: true }
      );

      res.json({
        message: "Product updated successfully",
        product: updatedProduct,
      });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
);

// Delete product
router.delete(
  "/products/:id",
  isLoggedIn,
  isSeller,
  isProductAuthor,
  async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);

      if (!product) return res.status(404).json({ error: "Product not found" });

      // delete associated reviews
      for (let reviewId of product.reviews) {
        await Review.findByIdAndDelete(reviewId);
      }

      await Product.findByIdAndDelete(id);

      res.json({ message: "Product deleted successfully" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
);

module.exports = router;
