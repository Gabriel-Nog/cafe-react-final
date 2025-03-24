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

async function show(req, res) {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: { id },
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produto' });
  }
}

const create = async (req, res) => {
  try {
    const { name, price, slug } = req.body;
    const image = req.file ? `/Images/${req.file.filename}` : null; // Caminho relativo ao frontend
    const product = await prisma.product.create({
      data: {
        name,
        price: parseFloat(price),
        slug,
        image,
      },
    });

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
};

function update(req, res) {
  res.send('Products update');
}

function destroy(req, res) {
  res.send('Products destroy');
}

module.exports = { index, show, create, update, destroy };
