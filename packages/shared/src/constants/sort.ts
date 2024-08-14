import { z } from 'zod';

const _zSortOrder = z.object({
  /**
   * [new, ..., old]
   */
  DESC: z.literal('DESC'),
  /**
   * [old, ..., new]
   */
  ASC: z.literal('ASC'),
});
type _zSortOrder = z.infer<typeof _zSortOrder>;

export const zSortOrder = _zSortOrder.keyof();
export type zSortOrder = z.infer<typeof zSortOrder>;

export const SortOrder: _zSortOrder = {
  /**
   * [new, ..., old]
   */
  DESC: 'DESC',
  /**
   * [old, ..., new]
   */
  ASC: 'ASC',
};
export type SortOrder = keyof typeof SortOrder;

/**
 * [new, ..., old]
 */
export const DefaultSortOrder = SortOrder.DESC;
