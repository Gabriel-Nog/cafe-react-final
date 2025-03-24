const jwt = require('jsonwebtoken');
const SECRET_KEY = 'admin'; // Replace with the same key used in login

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Attach user info to the request
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
};

module.exports = { authenticate };
