import { SHARED_EXPORTS } from './create-shared-file';

import { MRGenOptions } from '../types/mrgen-options';
import { camelCase } from './change-case';
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
  res.status(400).json(); // TODO: Include error details.
  return;
}`
    : '';

  const queryParamsContent = options.data.queryParams
    ? `
  const parsed${SHARED_EXPORTS.QueryParams} = ${APIType.queryParams}.safeParse(req.query);
  if (!parsed${SHARED_EXPORTS.QueryParams}.success) {
    res.status(400).json(); // TODO: Include error details.
    return;
  }`
    : '';

  const paramsContent = options.data.params
    ? `
  const parsed${SHARED_EXPORTS.Params} = ${APIType.params}.safeParse(req.params);
  if (!parsed${SHARED_EXPORTS.Params}.success) {
    res.status(400).json(); // TODO: Include error details.
    return;
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
  import { API } from 'shared';
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
