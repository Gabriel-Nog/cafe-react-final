// prisma/runSeeds.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Adicione aqui os dados que você deseja inserir
  await prisma.user.create({
    data: {
      email: 'user@example.com',
      name: 'John Doe',
      password: 'password123',
      roleId: 'role-id', // Substitua pelo ID do role
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
