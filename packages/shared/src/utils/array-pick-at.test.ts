import { arrayPickAt } from './array-pick-at';

describe('arrayPickAt', () => {
  it('should return the item at the specified index', () => {
    const array = [1, 2, 3, 4, 5];
    const index = 2;
    const result = arrayPickAt(array, index);

    expect(result).toBe(3);
  });

  it('should return undefined if the array is empty', () => {
    const array: number[] = [];
    const index = 0;
    const result = arrayPickAt(array, index);

    expect(result).toBeUndefined();
  });

  it('should return undefined if the index is out of range', () => {
    const array = [1, 2, 3];
    const index = 5;
    const result = arrayPickAt(array, index);

    expect(result).toBeUndefined();
  });

  it('should return undefined if the input is not an array', () => {
    // TypeScript should prevent this from happening, but just in case...
    const array = 'not an array' as unknown as Array<any>;
    const index = 0;
    const result = arrayPickAt(array, index);

    expect(result).toBeUndefined();
  });

  it('should return undefined if the input is null', () => {
    const array = null;
    const index = 0;
    const result = arrayPickAt(array, index);

    expect(result).toBeUndefined();
  });

  it('should return undefined if the input is undefined', () => {
    const array = undefined;
    const index = 0;
    const result = arrayPickAt(array, index);

    expect(result).toBeUndefined();
  });
});
