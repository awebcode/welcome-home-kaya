const express = require("express");
const router = express.Router();
const {
  createOrder,
  getAllOrders,
  getOrderById,
  getMyOrders,
  updateOrderStatus,
  deleteOrder,
  updateOrder,
} = require("../controllers/orderCtrl");
const { isAuthenticatedUser } = require("../utils/auth");

// Create a new order
router.post("/order/new",isAuthenticatedUser, createOrder);

// Get all orders (for admin)
router.get("/orders",isAuthenticatedUser, getAllOrders);

// Get a single order by ID
router.get("/order/:id", isAuthenticatedUser, getOrderById);

// Get orders by logged in user
router.get("/orders/myorders", isAuthenticatedUser, getMyOrders);
// Update order 
router.put("/order/:id/update", isAuthenticatedUser, updateOrder);
// Update order status
router.put("/order/:id/status", isAuthenticatedUser, updateOrderStatus);

// Delete an order by ID
router.delete("/order/:id", isAuthenticatedUser, deleteOrder);

module.exports = router;
