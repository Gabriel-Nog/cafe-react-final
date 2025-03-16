const express = require('express');
const router = express.Router();
const { index, show, create } = require('../controllers/Order');

// Routes for orders
router.get('/', index); // Get all orders
router.get('/:id', show); // Get an order by ID
router.post('/', create); // Create an orders

module.exports = router;
