import { upperCaseFirstCharacter } from './upper-case-first-character';

export function upperCaseFirstCharacterAllWords(str: string) {
  return str.split(' ').map(upperCaseFirstCharacter).join(' ');
}
