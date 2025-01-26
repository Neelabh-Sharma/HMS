const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({
      message: err.message || 'Internal Server Error',
      stack: process.env.NODE_ENV === 'development' ? err.stack : {},
    });
  };
  
  module.exports = errorHandler;
  