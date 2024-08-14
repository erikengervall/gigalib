/**
 * A type safe way to pick an item from an array.
 *
 * Without this, TypeScript won't include `undefined` as a possible return value.
 */
export function arrayPickAt<T>(
  array: T[] | null | undefined = [],
  index: number,
): T | undefined {
  if (!Array.isArray(array)) {
    return undefined;
  }

  return array[index];
}
