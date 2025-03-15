import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const roles = [{ name: 'Admin' }, { name: 'Customer' }, { name: 'Manager' }];

  for (const role of roles) {
    await prisma.role.upsert({
      where: { name: role.name },
      update: {},
      create: role,
    });
  }

  console.log('Roles have been seeded.');
}

export default main;
