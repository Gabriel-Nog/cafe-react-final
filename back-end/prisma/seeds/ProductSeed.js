import { PrismaClient } from '@prisma/client';
import ProductsData from '../../data/products.json' assert { type: 'json' };

const prisma = new PrismaClient();

async function main() {
  console.log('Começou a seed!');
  for (const product of ProductsData) {
    await prisma.product.create({
      data: {
        name: product.name,
        image: product.img,
        slug: product.slug,
        price: product.price,
      },
    });
  }
  console.log('Terminou a seed!');
}

export default main;
