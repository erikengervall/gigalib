import { z } from 'zod';

export const GENERIC_PAGINATION_DEFAULT_LIMIT = 20;

export const zGenericPaginationQueryParams = z
  .object({
    limit: z.string(),
    offset: z.string(),
    page: z.string(),
    sort_key: z.string(),
    sort_order: z.union([z.literal('ASC'), z.literal('DESC')]),
  })
  .partial();
export type zGenericPaginationQueryParams = z.infer<
  typeof zGenericPaginationQueryParams
>;

export const zGenericPaginationResponseBody = z.object({
  count: z.number(),
});
export type zGenericPaginationResponseBody = z.infer<
  typeof zGenericPaginationResponseBody
>;
