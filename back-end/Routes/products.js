const express = require('express');
const router = express.Router();
const {
  index,
  show,
  create,
  update,
  destroy,
} = require('../controllers/Products');
const multer = require('multer');
const path = require('path');

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, './../../front-end/public/Images')); // Caminho correto para a pasta front-end
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Routes for products
router.get('/', index); // Get all products
router.get('/sale-order/:id', show); // Get a product by slug
router.post('/', upload.single('image'), create);
router.put('/:id', update); // Update a product
router.delete('/:id', destroy); // Delete a product

module.exports = router;
