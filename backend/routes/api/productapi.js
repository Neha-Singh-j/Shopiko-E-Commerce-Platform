const express = require('express');
const { isLoggedIn } = require('../../middlewares');  // goes 2 levels up to root
const User = require('../../models/User');            // goes 2 levels up, then into models

const router = express.Router();



router.post('/products/:productId/like', isLoggedIn, async (req, res) => {
    try {
        let { productId } = req.params;
        let user = req.user;

        let isLiked = user.wishlist.includes(productId);

        if (isLiked) {
            await User.findByIdAndUpdate(req.user._id, { $pull: { wishlist: productId } });
        } else {
            await User.findByIdAndUpdate(req.user._id, { $addToSet: { wishlist: productId } });
        }

        res.status(201).send('ok');
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

module.exports = router;
