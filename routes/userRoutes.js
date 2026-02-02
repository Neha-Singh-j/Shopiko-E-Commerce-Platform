const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middlewares');
const { wishlist } = require('../controllers/user');

router.get('/wishlist', isLoggedIn, wishlist);

module.exports = router;
