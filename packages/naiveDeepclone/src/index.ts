/**
 * A very naive implementation of deepclone
 */
export function naiveDeepclone<T>(someObject: T): T {
  return JSON.parse(JSON.stringify(someObject))
}
