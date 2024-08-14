import { executionTime } from './execution-time';

jest.useFakeTimers();

describe('executionTime', () => {
  it.each([
    [0, '0ms'],
    [1, '1ms'],
    [123, '123ms'],
    [1005, '1005ms (1.0s)'],
    [1234, '1234ms (1.2s)'],
    [12345, '12345ms (12.3s)'],
    [123456, '123456ms (2m 3s)'],
    [1234567, '1234567ms (20m 34s)'],
    [12345678, '12345678ms (205m 45s)'],
  ])(
    'should return execution time in milliseconds, %i -> "%s"',
    (ms, expected) => {
      const perf_start = performance.now();
      jest.advanceTimersByTime(ms);

      expect(executionTime(perf_start)).toMatchObject({
        executionTime: expected,
      });
    },
  );
});
