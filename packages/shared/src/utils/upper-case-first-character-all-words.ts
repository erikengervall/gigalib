import { upperCaseFirstCharacter } from './upper-case-first-character';

export function upperCaseFirstCharacterAllWords(str: string, separator = ' ') {
  return str.split(separator).map(upperCaseFirstCharacter).join(' ');
}
