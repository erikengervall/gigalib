/**
 * Deduplicates an array
 */
export function arrayDedup<T>(array?: Array<T>): Array<T> {
  if (!array || !Array.isArray(array)) {
    return [];
  }

  return Array.from(new Set(array));
}
