import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Começou a seed!');
  const roleId = await prisma.role.findUnique({
    where: {
      name: 'Admin',
    },
    select: {
      id: true,
    },
  });

  await prisma.user.create({
    data: {
      name: 'Admin',
      email: 'admin@email.com',
      password: 'admin',
      roleId: roleId.id,
    },
  });
  console.log('Terminou a seed!');
}

export default main;
