const express = require('express');
const router = express.Router();
const { showAll } = require('../controllers/Slide'); // Import slides controller

// Route to get all slides
router.get('/', showAll);

module.exports = router;
