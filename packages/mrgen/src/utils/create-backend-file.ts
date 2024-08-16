import { SHARED_EXPORTS } from './create-shared-file';
import { camelCase } from '@engervall/shared';

import { MRGenOptions } from '../types/mrgen-options';
import { createFileWithContent } from './create-file-with-content';
import { fileName } from './file-name';
import { formatFile } from './format-file';
import { getAPIType } from './get-api-type';

export function createBackendFile(options: MRGenOptions) {
  const { APIType } = getAPIType(options);

  /**
   * '/Users/.../<monorepo>/packages/backend/src/handlers/v1/user/get-handler.ts'
   * -> get-handler
   */
  const { withoutExt } = fileName(options.backend.file);
  const handlerName = camelCase(withoutExt);

  const payloadContent = options.data.payload
    ? `
const parsed${SHARED_EXPORTS.Payload} = ${APIType.payload}.safeParse(req.body);
if (!parsed${SHARED_EXPORTS.Payload}.success) {
    throw new ServiceError({
      externalErrorCode: 'invalid_payload',
      internalErrorMessage: 'Invalid request payload.',
      externalHttpStatusCode: 400,
    });
}`
    : '';

  const queryParamsContent = options.data.queryParams
    ? `
  const parsed${SHARED_EXPORTS.QueryParams} = ${APIType.queryParams}.safeParse(req.query);
  if (!parsed${SHARED_EXPORTS.QueryParams}.success) {
      throw new ServiceError({
      externalErrorCode: 'invalid_query_params',
      internalErrorMessage: 'Invalid request query params.',
      externalHttpStatusCode: 400,
    });
  }`
    : '';

  const paramsContent = options.data.params
    ? `
  const parsed${SHARED_EXPORTS.Params} = ${APIType.params}.safeParse(req.params);
  if (!parsed${SHARED_EXPORTS.Params}.success) {
      throw new ServiceError({
      externalErrorCode: 'invalid_params',
      internalErrorMessage: 'Invalid request params.',
      externalHttpStatusCode: 400,
    });
  }`
    : '';

  const responseBodyContent = options.data.responseBody
    ? `
const ${camelCase(SHARED_EXPORTS.ResponseBody)}: ${APIType.responseBody} = {
  data: {},
};
return res.status(200).json(responseBody);
    `
    : 'return res.status(200).send();';

  const backendFileContent = `
  import { API, ServiceError } from 'shared';
  import type { RequestHandler } from 'express';
  
  export const ${handlerName}: RequestHandler = async (req, res) => {
    ${payloadContent}

    ${queryParamsContent}

    ${paramsContent}
  
    ${responseBodyContent}
  }
  `;

  createFileWithContent(options.backend.file, backendFileContent);

  formatFile(options.backend.file);
}
