import { ONE_MINUTE_IN_MS, ONE_SECOND_IN_MS } from '../constants';

/**
 * Returns a string representation of the execution time.
 *
 * @example executionTime(105) => '105ms',
 * @example executionTime(1005) => '1005ms (1.0s)'
 */
export function executionTime(perf_start: number): {
  executionTime: string;
} {
  const end = performance.now();
  const durationMs = end - perf_start;

  const ms = durationMs.toFixed(0);

  if (durationMs < ONE_SECOND_IN_MS) {
    // round to 0 decimal, format in milliseconds -> 2ms
    return {
      executionTime: `${ms}ms`,
    };
  }

  const s = (durationMs / ONE_SECOND_IN_MS).toFixed(1);

  if (durationMs < ONE_MINUTE_IN_MS) {
    // round to 1 decimal, format in seconds -> 2.1s
    return {
      executionTime: `${ms}ms (${s}s)`,
    };
  }

  const m = Math.floor(durationMs / ONE_MINUTE_IN_MS);
  const sRemaining = Math.floor(
    (durationMs - m * ONE_MINUTE_IN_MS) / ONE_SECOND_IN_MS,
  );

  return {
    // round to 1 decimal, format in minutes -> 2.1m 2.1s
    executionTime: `${ms}ms (${m}m ${sRemaining}s)`,
  };
}
