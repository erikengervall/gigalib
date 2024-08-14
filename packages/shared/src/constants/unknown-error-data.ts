import { z } from 'zod';

export const UnknownErrorData = z.union([
  z.record(z.unknown()),
  z.array(z.unknown()),
]);
export type UnknownErrorData = z.infer<typeof UnknownErrorData>;
