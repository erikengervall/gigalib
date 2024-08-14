import { z } from 'zod';

export const zEmail = z
  .string()
  .email()
  /**
   * In order to prevent Regular expression Denial of Service (ReDoS),
   * a user cannot provide an email that is more than 254 characters long. The max limit
   * comes from the RFC Errata Report: https://www.rfc-editor.org/errata_search.php?rfc=3696&eid=1690
   */
  .max(254)
  /**
   * The refinement below helps us prevent emails which domain contains two subsequent dots.
   */
  .refine((e) => {
    const domain = e.split('@')?.[1] ?? '';
    return !domain.includes('..');
  });
