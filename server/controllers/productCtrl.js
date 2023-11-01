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

    console.log(req.query);
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const sortOption = {};

    if (req.query.sortBy) {
      // Update sortOption based on the selected value from the frontend
      switch (req.query.sortBy) {
        case "createdAt":
          sortOption.createdAt = req.query.order === "desc" ? -1 : 1;
          break;
        case "price":
          sortOption.price = req.query.order === "desc" ? -1 : 1;
          break;
        case "category":
          sortOption.category = req.query.order === "desc" ? -1 : 1;
          break;
        default:
          // Handle other sorting options if needed
          break;
      }
    }

    const filterOptions = {};

    if (req.query.category) {
      filterOptions.$or = [
        { category: req.query.category },
        { subcategory: req.query.category },
        { subSubcategory: req.query.category }
      ]
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
      .sort(sortOption) //sortOption
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
      return next(new ErrorHandler("Product not found", 404));
    }

    res.status(200).json({ success: true, product });
  } catch (error) {
    next(error);
  }
};

// Update a Product
exports.updateProduct = async (req, res, next) => {
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

//reviews *-*******************************
// Create New Review or Update the review
exports.createProductReview = async (req, res, next) => {
  try {
    const { rating, comment } = req.body;
    const review = {
      user: req.user._id,
      name: req.user.username,
      rating: Number(rating),
      createdAt: new Date(),
      comment,
    };

    const product = await Product.findById(req.params.productId);

    const isReviewed = product?.reviews?.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
      product.reviews.forEach((rev) => {
        if (rev.user.toString() === req.user._id.toString()) {
          rev.rating = rating;
          rev.comment = comment;
          rev.createdAt = new Date();
        }
      });
    } else {
      product.reviews.push(review);
      product.numOfReviews = product.reviews.length;
      product.ratings =
        product.reviews.reduce((sum, review) => sum + review.rating, 0) /
        product.reviews.length;
    }

    await product.save({ validateBeforeSave: false });

    const updatedReview = isReviewed
      ? product.reviews.find((rev) => rev.user.toString() === req.user._id.toString())
      : review;

    res.status(200).json({
      success: true,
      message: "Review saved successfully",
      review: {
        _id: updatedReview._id,
        user: { _id: req.user.id, username: req.user.username, avatar: req.user.avatar },

        rating: updatedReview.rating,
        createdAt: updatedReview.createdAt,
        comment: updatedReview.comment,
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get All Reviews of a product
exports.getProductReviews = async (req, res, next) => {
  try {
    const isValidId = mongoose.Types.ObjectId.isValid(req.params.productId);
    if (!isValidId) {
      return next(new ErrorHandler("Invalid ID", 404));
    }
    const product = await Product.findById(req.params.productId).populate("reviews.user");

    if (!product) {
      return next(new ErrorHandler("Product Not Found", 404));
    }

    res.status(200).json({
      success: true,
      reviews: product.reviews,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.deleteReview = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const reviewId = req.params.reviewId;
    console.log(req.params);
    const product = await Product.findById(productId);

    if (!product) {
      return next(new ErrorHandler("Product Not Found", 404));
    }

    const updatedReviews = product.reviews.filter(
      (review) => review._id.toString() !== reviewId.toString()
    );

    let newRatings = 0;
    let numOfReviews = 0;

    if (updatedReviews.length > 0) {
      const totalRatings = updatedReviews.reduce((sum, review) => sum + review.rating, 0);
      newRatings = totalRatings / updatedReviews.length;
      numOfReviews = updatedReviews.length;
    }

    await Product.updateOne(
      { _id: productId },
      {
        $set: {
          ratings: newRatings,
          numOfReviews: numOfReviews,
          reviews: updatedReviews,
        },
      }
    );

    res.json({ success: true });
  } catch (error) {
    console.error(error);

    next(error);
  }
};
