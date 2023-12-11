// server/middleware/logger.js

/**
 * Middleware function to log incoming requests.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const logger = (req, res, next) => {
  const { method, url } = req;
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${method} ${url}`);
  next();
};

module.exports = logger;
