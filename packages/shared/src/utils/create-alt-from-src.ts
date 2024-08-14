import { upperCaseFirstCharacter } from './upper-case-first-character';

export function createAltFromSrc(src: string): string {
  const fullFilename = src.split('/').pop();

  if (!fullFilename) {
    return src;
  }

  const [filename] = fullFilename.split('.');

  const alt = upperCaseFirstCharacter(filename.toLowerCase()).replace(
    /-/g,
    ' ',
  );

  return alt ?? src;
}
