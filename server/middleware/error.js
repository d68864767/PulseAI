// server/middleware/error.js

const errorHandler = (err, req, res, next) => {
  // Log the error
  console.error(err);

  // Set the response status code
  res.status(500);

  // Send the error message as the response
  res.json({ error: err.message });
};

module.exports = errorHandler;
