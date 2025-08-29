const express = require("express");
const { isLoggedIn } = require("../middlewares");
const User = require("../models/User");
const Product = require("../models/Product");
const router = express.Router();

// Get user cart
router.get("/user/cart", isLoggedIn, async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).populate("cart");

    if (!user) {
      return res.status(404).send("User not found");
    }

    const totalAmount = user.cart.reduce((sum, item) => sum + item.price, 0);

    res.render("cart/cart", { user, totalAmount });
  } catch (err) {
    console.error("Error fetching cart:", err);
    res.status(500).send("Something went wrong");
  }
});

// Add product to user cart
router.post("/user/:productId/add", isLoggedIn, async (req, res) => {
  try {
    const { productId } = req.params;
    const userId = req.user._id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).send("Product not found");
    }

    user.cart.push(product);
    await user.save();

    res.redirect("/user/cart");
  } catch (err) {
    console.error("Error adding product to cart:", err);
    res.status(500).send("Something went wrong");
  }
});

module.exports = router;
