// seeds/RoleSeed.js

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function seed() {
  console.log('Criando roles...');
  await prisma.role.create({
    data: {
      name: 'Admin',
    },
  });
  await prisma.role.create({
    data: {
      name: 'User',
    },
  });
  console.log('Roles criados com sucesso.');
}
