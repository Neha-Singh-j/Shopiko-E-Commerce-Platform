const User = require('../models/User');
const Product = require('../models/Product');

const wishlist = async (req, res) => {
    try {
        const userId = req.user._id;

        // Fetch user info and populate wishlist
        const user = await User.findById(userId).populate('wishlist'); // gets wishlist + other fields

        res.render('wishlist', { user, currentUser: req.user });
    } catch (e) {
        console.error(e);
        req.flash('error', 'Something went wrong');
        res.redirect('/');
    }
};

module.exports = { wishlist };
