export function upperCaseFirstCharacter(str: string) {
  const lowerCase = str.toLowerCase();
  return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
}
