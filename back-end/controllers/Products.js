const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function index(req, res) {
  try {
    const products = await prisma.product.findMany(); // Busca todos os produtos
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
}

function show(req, res) {
  res.send('Products show');
}

function create(req, res) {
  res.send('Products create');
}

function update(req, res) {
  res.send('Products update');
}

function destroy(req, res) {
  res.send('Products destroy');
}

module.exports = { index, show, create, update, destroy };
