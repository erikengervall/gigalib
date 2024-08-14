import { arrayDedup } from './array-dedup';

describe('arrayDedup', () => {
  it('should return an empty array if input is undefined', () => {
    const result = arrayDedup();
    expect(result).toEqual([]);
  });

  it('should return an empty array if input is not an array', () => {
    // TypeScript should prevent this from happening, but just in case...
    const result = arrayDedup('not an array' as unknown as Array<any>);
    expect(result).toEqual([]);
  });

  it('should return the same array if there are no duplicates', () => {
    const input = [1, 2, 3, 4, 5];
    const result = arrayDedup(input);
    expect(result).toEqual(input);
  });

  it('should remove duplicates from the array', () => {
    const input = [1, 2, 2, 3, 4, 4, 5];
    const result = arrayDedup(input);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle arrays with mixed types', () => {
    const input = [1, '2', 2, '3', 4, 4, '5'];
    const result = arrayDedup(input);
    expect(result).toEqual([1, '2', 2, '3', 4, '5']);
  });
});
