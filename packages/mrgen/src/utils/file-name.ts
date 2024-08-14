import path from 'node:path';

export function fileName(file: string) {
  const { name, base } = path.parse(file);

  return {
    withExt: base,
    withoutExt: name,
  };
}
