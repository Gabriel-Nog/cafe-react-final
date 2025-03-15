import { readdir } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function runSeeds() {
  const seedsFolder = join(__dirname, 'seeds');
  const seedFiles = await readdir(seedsFolder);

  const prioritizedSeeds = ['RoleSeed.js', 'UserSeed.js'];
  const otherSeeds = seedFiles.filter(
    (file) => !prioritizedSeeds.includes(file) && file.endsWith('.js'),
  );

  for (const file of [...prioritizedSeeds, ...otherSeeds]) {
    if (file.endsWith('.js')) {
      console.log(`Running seed file: ${file}`);
      const seed = await import(join(seedsFolder, file));
      if (typeof seed.default === 'function') {
        await seed.default();
      }
    }
  }

  console.log('Todas as seeders foram enviadas!.');
}

runSeeds()
  .then(() => {
    console.log('Terminou com êxito.');
  })
  .catch((error) => {
    console.error('Error ao enviar as seeders: ', error);
  });
