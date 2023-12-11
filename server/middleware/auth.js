// server/middleware/auth.js

const jwt = require('jsonwebtoken');
const config = require('../config');

/**
 * Middleware to authenticate user using JWT token.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const authenticate = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization;

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, config.jwtSecret);

    // Attach the decoded user to the request object
    req.user = decoded.user;

    // Call the next middleware
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = authenticate;
