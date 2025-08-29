const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const cors = require("cors");
const User = require("./models/User");
require("dotenv").config();

// Routes
const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/review");
const authRoutes = require("./routes/auth");
const cartRoutes = require("./routes/cart");
const productApi = require("./routes/api/productapi");

// ✅ CORS setup to allow frontend
app.use(cors({
  origin: "http://localhost:3000", // frontend URL
  credentials: true
}));

// ✅ MongoDB connection
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Middlewares
app.use(express.json()); // parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// ✅ Session setup
const configSession = {
  secret: process.env.SECRET || "keyboard cat",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
};
app.use(session(configSession));
app.use(flash());

// ✅ Passport setup
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ✅ Custom middleware to attach current user
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

// ✅ Root API response
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Shopiko API" });
});

// ✅ Routes
app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);
app.use(cartRoutes);
app.use("/api", productApi);


// ✅ Start server
const port = 5000;
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
