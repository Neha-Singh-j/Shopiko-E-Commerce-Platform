const Joi = require("joi");

// Product validation schema
const productSchema = Joi.object({
    name: Joi.string().required(),
    img: Joi.string().required(),
    price: Joi.number().min(0).required(),
    desc: Joi.string().required()
});

// Review validation schema
const reviewSchema = Joi.object({
    rating: Joi.number().min(0).max(5).required(),
    comment: Joi.string().trim().required()
});

module.exports = { productSchema, reviewSchema };
