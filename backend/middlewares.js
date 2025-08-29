const Product = require("./models/Product");
const { productSchema, reviewSchema } = require("./schemas/schema");

// Validate product input
const validateProduct = (req, res, next) => {
  const { name, img, price, desc } = req.body;
  const { error } = productSchema.validate({ name, img, price, desc });

  if (error) {
    const msg = error.details.map((err) => err.message).join(",");
    return res.status(400).json({ error: msg }); // ✅ JSON instead of res.render
  }
  next();
};

// Validate review input
const validateReview = (req, res, next) => {
  const { rating, comment } = req.body;
  const { error } = reviewSchema.validate({ rating, comment });

  if (error) {
    const msg = error.details.map((err) => err.message).join(",");
    return res.status(400).json({ error: msg }); // ✅ JSON response
  }
  next();
};

// Check if user is logged in
const isLoggedIn = (req, res, next) => {
  if (req.xhr && !req.isAuthenticated()) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: "You need to login first" });
  }
  next();
};

// Check if user is a seller
const isSeller = (req, res, next) => {
  const { id } = req.params;
  if (!req.user.role || req.user.role !== "seller") {
    return res
      .status(403)
      .json({ error: "You do not have permission to perform this action" });
  }
  next();
};

// Check if user is product author
const isProductAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    if (!product.author.equals(req.user._id)) {
      return res
        .status(403)
        .json({ error: "You are not the owner of this product" });
    }
    next();
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = {
  validateProduct,
  validateReview,
  isLoggedIn,
  isSeller,
  isProductAuthor,
};
