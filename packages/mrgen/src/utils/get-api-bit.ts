import path from 'node:path';

import { pascalCase } from './change-case';

export function getAPIBit(file: string) {
  const { name } = path.parse(file);

  return pascalCase(name);
}
