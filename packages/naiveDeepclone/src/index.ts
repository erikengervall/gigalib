/**
 * A very naive implementation of deepclone
 */
export function naiveDeepclone<T>(someObject: T): T {
  const unusedVariable = "what";
  console.log("this shouldnt be here!");

  return JSON.parse(JSON.stringify(someObject));
}
