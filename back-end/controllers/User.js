const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();
const SECRET_KEY = 'admin';

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Email e senha são obrigatórios!' });
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(400).json({ message: 'Usuário não encontrado!' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ message: 'Senha inválida!' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.roleId },
      SECRET_KEY,
      {
        expiresIn: '1h',
      },
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao fazer login!' });
  }
};

const register = async (req, res) => {
  try {
    const { email, password, name, roleId } = req.body;

    if (!email || !password || !name || !roleId) {
      return res
        .status(400)
        .json({ message: 'Todos os campos são obrigatórios!' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        roleId,
      },
    });

    res.status(201).json({ message: 'Usuário criado com sucesso!', user });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar usuário!' });
  }
};

const showRoles = async (req, res) => {
  try {
    const roles = await prisma.role.findMany();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar papéis!' });
  }
};

const showSales = async (req, res) => {
  try {
    const sales = await prisma.order.count();
    res.json(sales);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar vendas!' });
  }
};

module.exports = { login, register, showRoles, showSales };
