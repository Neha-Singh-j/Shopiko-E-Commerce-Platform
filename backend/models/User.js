const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  // username and password will be added by passport-local-mongoose
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true, // ✅ ensures no duplicate emails
    lowercase: true,
  },
  role: {
    type: String,
    default: "buyer",
    enum: ["buyer", "seller", "admin"], // ✅ restrict to specific roles
  },
  gender: {
    type: String,
    trim: true,
    required: true,
    enum: ["male", "female", "other"], // ✅ prevents invalid values
  },
  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

// ✅ Apply passport-local-mongoose plugin
// This automatically adds username + password hash + salt fields
// and gives us helper methods like .register(), .authenticate(), etc.
userSchema.plugin(passportLocalMongoose, {
  usernameField: "email", // ✅ login with email instead of username
});

const User = mongoose.model("User", userSchema);
module.exports = User;
