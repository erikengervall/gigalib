import path from 'node:path';

import { pascalCase } from '@engervall/shared';

export function getAPIBit(file: string) {
  const { name } = path.parse(file);

  return pascalCase(name);
}
