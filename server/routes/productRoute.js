const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../utils/auth");
const { applyDiscountToProduct, createProduct, updateProduct, deleteProduct, getProductById, getAllProducts } = require("../controllers/productCtrl");
const router = express.Router();


// Create a new product
router.post("/product/new",isAuthenticatedUser,authorizeRoles("admin"), createProduct);

// Get all products with filters
router.get("/products", getAllProducts);

// Get product by ID
router.get("/product/:id", getProductById);

// Update a product
router.patch("/product/:id", isAuthenticatedUser, authorizeRoles("admin"), updateProduct);

// Delete a product
router.delete(
  "/product/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteProduct
);
// Define the route
router.put('/product/:productId/discount', applyDiscountToProduct);
module.exports = router;
