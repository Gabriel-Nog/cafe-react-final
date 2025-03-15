import { PrismaClient } from '@prisma/client';
import slideData from '../../data/slide.json' assert { type: 'json' };

const prisma = new PrismaClient();

async function main() {
  for (const slide of slideData) {
    // Find the user by name (assuming the user already exists)
    const user = await prisma.user.findUnique({
      where: { email: 'admin@email.com' }, // Adjust the email or other unique identifier as needed
    });

    if (user) {
      await prisma.banner.create({
        data: {
          title: slide.title,
          description: slide.description,
          type: slide.type,
          imageUrl: slide.image,
          createdById: user.id,
        },
      });
    } else {
      console.warn(
        `User ${slide.createdBy} not found. Skipping banner creation for ${slide.title}.`,
      );
    }
  }

  console.log('Banners have been seeded.');
}

export default main;
