const express = require("express");
const User = require("../models/User");
const passport = require("passport");
const router = express.Router();

// Register API
router.post("/register", async (req, res) => {
  try {
    let { username, password, email, role, gender } = req.body;
    let user = new User({ username, email, gender, role });
    let newUser = await User.register(user, password);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: { id: newUser._id, username: newUser.username, email: newUser.email }
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// Login API
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    if (!user) return res.status(401).json({ success: false, message: "Invalid credentials" });

    req.logIn(user, (err) => {
      if (err) return res.status(500).json({ success: false, message: err.message });

      res.json({
        success: true,
        message: "Login successful",
        user: { id: user._id, username: user.username, email: user.email }
      });
    });
  })(req, res, next);
});

// Logout API
router.post("/logout", (req, res) => {
  req.logout(() => {
    res.json({ success: true, message: "Logged out successfully" });
  });
});

module.exports = router;
