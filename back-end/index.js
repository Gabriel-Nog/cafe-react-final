const express = require('express');
const cors = require('cors');
const productRoutes = require('./Routes/products.js'); // Separate routes for products
const slideRoutes = require('./Routes/slides.js'); // Separate routes for slides
const orderRoutes = require('./Routes/orders.js');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes); // Use product routes
app.use('/api/slides', slideRoutes); // Use slide routes
app.use('/api/orders', orderRoutes); // Use order routes

// Start the server
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
