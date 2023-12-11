// server/routes/pulseRoutes.js

const express = require('express');
const router = express.Router();
const { analyzeDataStream } = require('../controllers/pulseController');
const { validateDataStream } = require('../middleware/validation');

// Route for analyzing a data stream
router.post('/analyze', validateDataStream, analyzeDataStream);

module.exports = router;
