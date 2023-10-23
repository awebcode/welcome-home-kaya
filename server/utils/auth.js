const jwt = require("jsonwebtoken");

const ErrorHandler = require("./ErrorHandler");
const { User } = require("../models/userSchema");

exports.isAuthenticatedUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return;
  }
  ///next(new ErrorHandler("Please Login to access this resource", 401));
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData._id);

  next();
};

exports.authorizeRoles = (roles) => {
  return (req, res, next) => {
    if (req.user.role !== "admin" && roles !== "admin") {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to access this resouce `,
          403
        )
      );
    }

    next();
  };
};
