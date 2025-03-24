import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.role.createMany({
    data: [
      { id: "1", name: "Admin" },
      { id: "2", name: "User" },
    ],
  });
  console.log("Seed concluído!");
}

main()
  .catch((error) => console.error(error))
  .finally(() => prisma.$disconnect());
