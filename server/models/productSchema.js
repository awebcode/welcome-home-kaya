const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: "User" },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: {
    type: [String],
    validate: (v) => Array.isArray(v) && v.length > 0,
  },
  discount: { type: Number, required: true },
  companyName: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  subSubcategory: { type: String },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      createdAt: Date,
    },
  ],

  ratings: {
    type: Number,
    default: 0,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
