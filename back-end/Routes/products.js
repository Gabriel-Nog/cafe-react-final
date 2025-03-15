const express = require('express');
const router = express.Router();
const {
  index,
  show,
  create,
  update,
  destroy,
} = require('../controllers/Products');

// Routes for products
router.get('/', index); // Get all products
router.get('/sale-order/:id', show); // Get a product by slug
router.post('/', create); // Create a product
router.put('/:id', update); // Update a product
router.delete('/:id', destroy); // Delete a product

module.exports = router;
