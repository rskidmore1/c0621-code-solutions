const { JsonWebTokenError } = require('jsonwebtoken');
const ClientError = require('./client-error');

function errorMiddleware(err, req, res, next) { // Custom func for logging err
  if (err instanceof ClientError) {
    res.status(err.status).json({
      error: err.message
    });
  } else if (err instanceof JsonWebTokenError) { // I kept getting this last night
    res.status(401).json({
      error: 'invalid access token'
    });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
}

module.exports = errorMiddleware;
