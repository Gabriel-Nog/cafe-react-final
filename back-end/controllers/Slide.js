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

function create(req, res) {
  try {
    const { type, title, description, imageUrl } = req.body;
    prisma.banner
      .create({
        data: {
          type,
          title,
          description,
          imageUrl,
        },
      })
      .then(() => {
        res.status(201).json({ message: 'Slide criado' });
      });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar slide' });
  }
}

module.exports = { showAll, create };
