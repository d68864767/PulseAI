// server/middleware.js

const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const error = require('./middleware/error');
const validation = require('./middleware/validation');

module.exports = {
  logger,
  auth,
  error,
  validation,
};
