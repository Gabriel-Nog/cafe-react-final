const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function showAll(req, res) {
  try {
    const slides = await prisma.banner.findMany();
    res.json(slides);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar slides' });
  }
}

module.exports = { showAll };
