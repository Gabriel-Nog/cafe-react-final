const express = require('express');
const { login, register, showRoles } = require('../controllers/User');

const router = express.Router();

//Login
router.post('/login', login);
//Registro
router.post('/register', register);
//Resgatar papel desempenhado
router.get('/role', showRoles);

module.exports = router;
