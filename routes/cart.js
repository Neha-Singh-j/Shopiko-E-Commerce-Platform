const express = require("express");
const { isLoggedIn } = require("../middlewares");
const User = require("../models/User");
const Product = require("../models/Product");
const router = express.Router();

router.get("/user/cart", isLoggedIn, async (req, res) => {
  let userId = req.user._id;
  let user = await User.findById(userId).populate("cart");
  //   console.log(user, "sam");
  let totalAmount = user.cart.reduce((sum, curr) => sum + curr.price, 0);
  //   console.log(totalAmount);

  res.render("cart/cart", { user, totalAmount ,paypalClientId: process.env.PAYPAL_CLIENT_ID  });
});

router.post("/user/:productId/add", isLoggedIn, async (req, res) => {
  let { productId } = req.params;
  let userId = req.user._id;
  let user = await User.findById(userId);
  //   console.log(user, "sam");
  let product = await Product.findById(productId);
  user.cart.push(product);
  await user.save();
  req.flash("success","Item added to cart");
  res.redirect("/user/cart");
});

router.post("/user/:productId/remove", isLoggedIn, async (req, res) => {
  let { productId } = req.params;
  let userId = req.user._id;

  // Find the user
  let user = await User.findById(userId);
  // Remove the product from the cart
  user.cart = user.cart.filter(
    (item) => item._id.toString() !== productId.toString()
  );

  // Save the updated user
  await user.save();
    req.flash("success","Item removed from cart successfully");
  res.redirect("/user/cart");
});



module.exports = router;