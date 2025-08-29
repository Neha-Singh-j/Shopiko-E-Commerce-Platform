const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true,   // rating should always be present
        min: 0,
        max: 5
    },
    comment: {
        type: String,
        trim: true
    }
}, {
    timestamps: true  // adds createdAt and updatedAt fields automatically
});

// Prevent model overwrite upon multiple imports
const Review = mongoose.models.Review || mongoose.model('Review', reviewSchema);

module.exports = Review;
