import { z } from 'zod';

/**
 * https://regex101.com/library/ik6xZx
 */
export const ULID_REGEX = /^[0-7][0-9A-HJKMNP-TV-Z]{25}$/;

export const zUlid = z
  .string()
  .length(
    /**
     * https://www.npmjs.com/package/ulid
     */
    26,
  )
  .regex(ULID_REGEX);
