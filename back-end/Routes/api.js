const express = require('express');
const ProductsController = require('../controllers/Products.js');

const router = express.Router();

router.get('/', ProductsController.index);

module.exports = router;
