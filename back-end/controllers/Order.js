const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all orders
async function index(req, res) {
  try {
    const orders = await prisma.order.findMany({
      include: {
        user: true, // Include user details
        products: true, // Include associated products
      },
    });
    res.json(orders);
  } catch (error) {
    console.error('Erro ao buscar pedidos:', error);
    res.status(500).json({ error: 'Erro ao buscar pedidos' });
  }
}

// Get a single order by ID
async function show(req, res) {
  try {
    const { id } = req.params;
    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        user: true,
        products: true,
      },
    });

    if (!order) {
      return res.status(404).json({ error: 'Pedido não encontrado' });
    }

    res.json(order);
  } catch (error) {
    console.error('Erro ao buscar pedido:', error);
    res.status(500).json({ error: 'Erro ao buscar pedido' });
  }
}

// Create a new order
async function create(req, res) {
  try {
    const { value, deliveryLocation, userId, productIds } = req.body;

    // Create the order
    const order = await prisma.order.create({
      data: {
        value,
        deliveryLocation,
        userId,
        products: {
          connect: productIds.map((productId) => ({ id: productId })),
        },
      },
    });

    res.status(201).json(order);
  } catch (error) {
    console.error('Erro ao criar pedido:', error);
    res.status(500).json({ error: 'Erro ao criar pedido' });
  }
}

// Update an order
async function update(req, res) {
  try {
    const { id } = req.params;
    const { value, deliveryLocation, productIds } = req.body;

    const order = await prisma.order.update({
      where: { id },
      data: {
        value,
        deliveryLocation,
        products: {
          set: productIds.map((productId) => ({ id: productId })), // Update associated products
        },
      },
    });

    res.json(order);
  } catch (error) {
    console.error('Erro ao atualizar pedido:', error);
    res.status(500).json({ error: 'Erro ao atualizar pedido' });
  }
}

// Delete an order
async function destroy(req, res) {
  try {
    const { id } = req.params;

    await prisma.order.delete({
      where: { id },
    });

    res.status(204).send(); // No content
  } catch (error) {
    console.error('Erro ao deletar pedido:', error);
    res.status(500).json({ error: 'Erro ao deletar pedido' });
  }
}

module.exports = { index, show, create, update, destroy };
