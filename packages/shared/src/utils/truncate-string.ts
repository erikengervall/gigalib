export function truncateString(str: string, limit = 50) {
  if (str.length <= limit) {
    return str;
  }

  return `${str.substring(0, limit - 3).trimEnd()}...`;
}
