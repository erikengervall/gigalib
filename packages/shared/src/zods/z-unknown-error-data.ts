import { z } from 'zod';

export const zUnknownErrorData = z.union([
  z.record(z.unknown()),
  z.array(z.unknown()),
]);
export type zUnknownErrorData = z.infer<typeof zUnknownErrorData>;
