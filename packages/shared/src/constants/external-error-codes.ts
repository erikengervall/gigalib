import { z } from 'zod';

export const ExternalErrorCode = z.union([
  z.literal('invalid_payload'),
  z.literal('invalid_params'),
  z.literal('invalid_query_params'),
  z.literal('unknown_error'),
]);
export type ExternalErrorCode = z.infer<typeof ExternalErrorCode>;
