/**
 * Gets a random number between minNumber and maxNumber (both included)
 */
export function getRandomNumber({
  inclusiveFrom,
  inclusiveTo,
}: {
  inclusiveFrom: number;
  inclusiveTo: number;
}) {
  return (
    Math.floor(Math.random() * (inclusiveTo - inclusiveFrom + 1)) +
    inclusiveFrom
  );
}
