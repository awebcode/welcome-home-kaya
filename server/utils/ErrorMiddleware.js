const ErrorHandler = require("./ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Wrong Mongodb Id error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  // Wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid, Try again `;
    err = new ErrorHandler(message, 400);
  }

  // JWT EXPIRE error
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is Expired, Try again `;
    err = new ErrorHandler(message, 400);
  }
  // Reference error
  if (err.name === "ReferenceError") {
    const message = "Reference error occurred";
    err = new ErrorHandler(message, 500);
  }

  // Validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    err = new ErrorHandler(message, 400);
  }

  // Invalid ObjectId error
  if (err.name === "CastError" && err.path === "_id" && err.kind === "ObjectId") {
    const message = "Invalid ObjectId";
    err = new ErrorHandler(message, 400);
  }
  // PostgreSQL Unique Violation Error
  if (err.code === "23505") {
    
    const message = `Duplicate ${(err.detail)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  // PostgreSQL Invalid Input Syntax Error
  if (err.code === "22P02") {
    const message = `Invalid input syntax for type ${err.column}`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
