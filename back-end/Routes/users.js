const express = require('express');
const {
  login,
  register,
  showRoles,
  showSales,
} = require('../controllers/User');

const router = express.Router();

//Login
router.post('/login', login);
//Registro
router.post('/register', register);
//Resgatar papel desempenhado
router.get('/role', showRoles);
//Resgatar total de vendas
router.get('/sales', showSales);

module.exports = router;
