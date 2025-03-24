const express = require('express');
const { login, register } = require('../controllers/User');

const router = express.Router();

//Login
router.post('/login', login);
//Registro
router.post('/register', register);

module.exports = router;
