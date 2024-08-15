import fs from 'node:fs';
import path from 'node:path';

import { getAPIBit } from './get-api-bit';

// recursively create all index.ts files in dir
export function createIndexFileRecurse({
  dir,
  withAlias,
}: {
  dir: string;
  withAlias: boolean;
}) {
  console.debug(
    '[createIndexFileRecurse] Creating index file for directory',
    dir,
  );
  const filesAndFolders = fs.readdirSync(dir).filter((file) => {
    return (
      !['index.ts', '__snapshots__'].includes(file) &&
      !file.endsWith('.test.ts') &&
      !file.endsWith('.spec.ts')
    );
  });
  const indexFileContent = filesAndFolders
    .map((file) => {
      /**
       * > require('path').parse("a/b/c.ts")
       * { root: '', dir: 'a/b', base: 'c.ts', ext: '.ts', name: 'c' }
       */
      const { name } = path.parse(file);
      const alias = withAlias ? ` as ${getAPIBit(file)} ` : '';
      return `export * ${alias} from './${name}';`;
    })
    .join('\n');

  const indexFilePath = path.join(dir, 'index.ts');
  console.debug('[createIndexFileRecurse] Creating index file', indexFilePath);
  fs.writeFileSync(indexFilePath, indexFileContent, 'utf-8');

  filesAndFolders
    .filter((file) => fs.lstatSync(path.join(dir, file)).isDirectory())
    .forEach((file) => {
      createIndexFileRecurse({ dir: path.join(dir, file), withAlias });
    });
}
