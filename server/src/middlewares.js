// Not found middleware - typically the last middleware you want registered
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404); // sets 404 status code
  next(error); // next goes onto the next middleware
};

// Error handling middleware
// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack
  });
};

module.exports = {
  notFound,
  errorHandler
};
