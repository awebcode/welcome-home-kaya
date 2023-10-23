const notFoundError = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);

  next(error);
};

module.exports = notFoundError;
