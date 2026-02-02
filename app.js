
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const seedDB = require("./seed");

const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");
const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/review");
const authRoutes = require("./routes/auth");
const cartRoutes = require("./routes/cart");
const userRoutes=require('./routes/userRoutes');
const productApi = require("./routes/api/productapi"); //api
const passport = require("passport"); //pass
const LocalStrategy = require("passport-local"); //pass
const User = require("./models/User"); //pass
const i18n = require('i18n');

const paypalRoutes = require("./routes/paypal");




// mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error(" MongoDB connection error:", err);
  });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// now for public folder
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/paypal", paypalRoutes);
// seeding dummy data
// seedDB();

let configSession = {
  secret: process.env.SECRET || "keyboard cat",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
};


// i18n configuration
i18n.configure({
    locales: ['en', 'es', 'fr'], // supported languages
    directory: path.join(__dirname, 'locales'), // folder for translation files
    defaultLocale: 'en',
    queryParameter: 'lang', // allow changing language via URL ?lang=fr
    cookie: 'locale', // optional: store user's choice in cookie
    autoReload: true,
    updateFiles: false,
    objectNotation: true
});
app.use(i18n.init);
app.use((req, res, next) => {
    if (req.query.lang) {
        res.setLocale(req.query.lang);
        res.cookie('locale', req.query.lang, { maxAge: 30*24*60*60*1000, httpOnly: true });
    } else if (req.cookies && req.cookies.locale) {
        res.setLocale(req.cookies.locale);
    }
    next();
});

app.use(session(configSession));
app.use(flash());

// use static serialize and deserialize of model for passport session support
app.use(passport.initialize()); //pass
app.use(passport.session()); //pass
passport.serializeUser(User.serializeUser()); //pass
passport.deserializeUser(User.deserializeUser()); //pass

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate())); //pass


app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.get("/", (req, res) => {
  res.render("home");
});

// Routes
app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);
app.use(cartRoutes);
app.use(productApi);
app.use(userRoutes);
const port = 8080;
app.listen(port, () => {
  console.log(`server connected at port : ${port}`);
});