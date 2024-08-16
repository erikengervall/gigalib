import { z } from 'zod';

import { HttpErrorStatusCodes } from '../constants';

const ResponseErrorPayload = z.object({
  code: z.literal('unknown_error'),
  message: z.string(),
  statusCode: z.custom<HttpErrorStatusCodes>(),
});
type ResponseErrorPayload = z.infer<typeof ResponseErrorPayload>;

export class FrontendResponseError extends Error {
  public name: 'FrontendResponseError';
  public code: ResponseErrorPayload['code'];
  public statusCode: number;

  constructor(responseErrorPayload: ResponseErrorPayload) {
    super(responseErrorPayload.message);
    this.name = 'FrontendResponseError';
    this.code = responseErrorPayload.code;
    this.statusCode = responseErrorPayload.statusCode;
  }
}
