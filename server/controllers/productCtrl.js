const { default: mongoose } = require("mongoose");
const Product = require("../models/productSchema");
const ErrorHandler = require("../utils/ErrorHandler");
const { User } = require("../models/userSchema");

// Create a New Product
exports.createProduct = async (req, res, next) => {
  try {
    console.log(req.body);
    // Find the user
    const user = await User.findById(req.user.id);

    // Check if the user has an admin role
    if (!user || user.role !== "admin") {
     
      return next(
        new ErrorHandler("You are not authorized to perform this action.", 401)
      );
    }
    const product = await Product.create({ ...req.body, user: req.user.id });
    res.status(201).json({ success: true, product });
  } catch (error) {
    next(error);
  }
};

// Get All Products with Sorting, Pagination, Category Filter, Min and Max Price Filter, and Search
exports.getAllProducts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const sortOption = {};
    if (req.query.sortBy) {
      sortOption[req.query.sortBy] = req.query.order === "desc" ? -1 : 1;
    }

    const filterOptions = {};

    if (req.query.category) {
      filterOptions.category = req.query.category;
    }

    if (req.query.minPrice && req.query.maxPrice) {
      filterOptions.price = {
        $gte: parseFloat(req.query.minPrice),
        $lte: parseFloat(req.query.maxPrice),
      };
    } else if (req.query.minPrice) {
      filterOptions.price = { $gte: parseFloat(req.query.minPrice) };
    } else if (req.query.maxPrice) {
      filterOptions.price = { $lte: parseFloat(req.query.maxPrice) };
    }

    if (req.query.search) {
      filterOptions.$or = [
        { title: { $regex: req.query.search, $options: "i" } },
        { description: { $regex: req.query.search, $options: "i" } },
        { companyName: { $regex: req.query.search, $options: "i" } },
      ];
    }

    const products = await Product.find(filterOptions)
      .sort(sortOption)
      .limit(limit)
      .skip(skip);

    res.status(200).json({ success: true, products });
  } catch (error) {
    next(error);
  }
};

// Read a Single Product by ID
exports.getProductById = async (req, res, next) => {
  try {
    const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);
    if (!isValidId) {
        return next(new ErrorHandler("Invalid ID", 404));
        
    }

    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Product not found",404));
    }

    res.status(200).json({ success: true, product });
  } catch (error) {
    next(error);
  }
};



// Update a Product
exports.updateProduct = async (req, res, next) => {
  try {
    console.log(req.body)
    // Find the user
    const user = await User.findById(req.user.id);

    // Check if the user has an admin role
    if (!user || user.role !== "admin") {
      return next(
        new ErrorHandler("You are not authorized to perform this action.", 401)
      );
    }
    const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);
    if (!isValidId) {
      return next(new ErrorHandler("Invalid ID", 400));
    }

    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return next(new ErrorHandler("Product Not found", 404));
    }

    res.status(200).json({ success: true, product });
  } catch (error) {
    next(error);
  }
};

// Delete a Product
exports.deleteProduct = async (req, res, next) => {
  try {
    // Find the user
    const user = await User.findById(req.user.id);

    // Check if the user has an admin role
    if (!user || user.role !== "admin") {
      return next(
        new ErrorHandler("You are not authorized to perform this action.", 401)
      );
    }
    const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);
    if (!isValidId) {
      return next(new ErrorHandler("Invalid ID", 400));
    }

    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return next(new ErrorHandler("Product Not found", 404));
    }

    res.status(200).json({ success: true, message: "Product deleted", product });
  } catch (error) {
    next(error);
  }
};

// Assuming you have a Product model

const applyDiscount = (product, discountPercentage) => {
  const discountedPrice = (product.price * (100 - discountPercentage)) / 100;
  return discountedPrice.toFixed(2); // Limit to 2 decimal places
};

exports.applyDiscountToProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const discountPercentage = req.body.discountPercentage;

    // Assuming you have a Product model
    const product = await Product.findById(productId);

    if (!product) {
      return next(new ErrorHandler("Product Not found", 404));
    }

    // Apply the discount
    const discountedPrice = applyDiscount(product, discountPercentage);

    // Update the product price
    product.price = discountedPrice;
    await product.save();

    return res.status(200).json({ success: true, product });
  } catch (error) {
    next(error);
  }
};
