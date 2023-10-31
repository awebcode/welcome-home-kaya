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
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
