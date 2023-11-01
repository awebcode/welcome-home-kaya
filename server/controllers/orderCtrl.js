// @desc    Create a new order
// @route   POST /api/orders

const { orderModel } = require("../models/orderModel");
const ErrorHandler = require("../utils/ErrorHandler");

// @access  Private
exports.createOrder = async (req, res, next) => {
  try {
    const {
      shippingInfo,
      orderItems,
      paymentInfo,
      paidAt,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      orderStatus,
      deliveredAt,
    } = req.body;

    const order = await orderModel.create({
      shippingInfo,
      orderItems,
      user: req.user._id, // Assuming you have a middleware to authenticate the user
      paymentInfo,
      paidAt,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      orderStatus,
      deliveredAt,
    });

    res.status(201).json({ success: true, order });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all orders (for admin)
// @route   GET /api/orders
// @access  Private (Admin)
exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await orderModel.find({});
    res.status(200).json({ success: true, orders });
  } catch (error) {
    next(error);
  }
};

// @desc    Get a single order by ID
// @route   GET /api/orders/:id
// @access  Private
exports.getOrderById = async (req, res, next) => {
  try {
    const order = await orderModel.findById(req.params.id);

    if (!order) {
      return next(new ErrorHandler("Order Not Found", 404));
    }

    res.status(200).json({ success: true, order });
  } catch (error) {
    if (error.name === "CastError") {
      return next(new ErrorHandler("Invalid Order ID", 400));
    }
    next(error);
  }
};

// @desc    Get orders by logged in user
// @route   GET /api/orders/myorders
// @access  Private
exports.getMyOrders = async (req, res, next) => {
  try {
    const orders = await orderModel.find({ user: req.user._id });
    res.status(200).json({ success: true, orders });
  } catch (error) {
    next(error);
  }
};
// @desc    Update order by ID
// @route   PUT /api/orders/:id
// @access  Private
exports.updateOrder = async (req, res, next) => {
  try {
    const {
      shippingInfo,
      orderItems,
      paymentInfo,
      paidAt,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      orderStatus,
      deliveredAt,
    } = req.body;

    let order = await orderModel.findById(req.params.id);

    if (!order) {
      return next(new ErrorHandler("Order Not Found", 404));
    }

    order.shippingInfo = shippingInfo;
    order.orderItems = orderItems;
    order.paymentInfo = paymentInfo;
    order.paidAt = paidAt;
    order.itemsPrice = itemsPrice;
    order.taxPrice = taxPrice;
    order.shippingPrice = shippingPrice;
    order.totalPrice = totalPrice;
    order.orderStatus = orderStatus;
    order.deliveredAt = deliveredAt;

    await order.save();

    res.status(200).json({ success: true, order });
  } catch (error) {
    if (error.name === "CastError") {
      return next(new ErrorHandler("Invalid Order ID", 400));
    }
    next(error);
  }
};

// @desc    Update order status
// @route   PUT /api/orders/:id/status
// @access  Private (Admin)
exports.updateOrderStatus = async (req, res, next) => {
  try {
    const { status } = req.body;

    let order = await orderModel.findById(req.params.id);

    if (!order) {
      return next(new ErrorHandler("Order Not Found", 404));
    }

    
    if (status === "delivered") {
      order.deliveredAt = new Date(Date.now());
      }
    order.orderStatus = status;
    await order.save();

    res.status(200).json({ success: true, order });
  } catch (error) {
    if (error.name === "CastError") {
      return next(new ErrorHandler("Invalid Order ID", 400));
    }
    next(error);
  }
};

// @desc    Delete an order by ID
exports.deleteOrder = async (req, res, next) => {
  try {
    const order = await orderModel.findById(req.params.id);

    if (!order) {
      return next(new ErrorHandler("Order Not Found", 404));
    }

    await order.deleteOne(); // This will remove the order from the database

    res.status(200).json({
      success: true,
      message: "Order deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
