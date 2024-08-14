import cp from 'node:child_process';

import { MRGenOptions } from '../types/mrgen-options';
import { createFileWithContent } from './create-file-with-content';
import { createIndexFileRecurse } from './create-index-file-recursively';
import { formatFile } from './format-file';

export const SHARED_EXPORTS = {
  Payload: 'Payload',
  Params: 'Params',
  QueryParams: 'QueryParams',
  ResponseBody: 'ResponseBody',
} as const;

export function createSharedFile(options: MRGenOptions) {
  const SHARED_FILE_CONTENT = `
  import { z } from 'zod';
  
  ${options.data.payload ? `export const ${SHARED_EXPORTS.Payload} = z.object({});` : ''}
  ${options.data.payload ? `export type ${SHARED_EXPORTS.Payload} = z.infer<typeof ${SHARED_EXPORTS.Payload}>;` : ''}
  
  ${options.data.params ? `export const ${SHARED_EXPORTS.Params} = z.object({});` : ''}
  ${options.data.params ? `export type ${SHARED_EXPORTS.Params} = z.infer<typeof ${SHARED_EXPORTS.Params}>;` : ''}
  
  ${options.data.queryParams ? `export const ${SHARED_EXPORTS.QueryParams} = z.object({});` : ''}
  ${options.data.queryParams ? `export type ${SHARED_EXPORTS.QueryParams} = z.infer<typeof ${SHARED_EXPORTS.QueryParams}>;` : ''}
  
  ${options.data.responseBody ? `export type ${SHARED_EXPORTS.ResponseBody} = { data: unknown; };` : ''}
  `;

  createFileWithContent(options.shared.file, SHARED_FILE_CONTENT);
  createIndexFileRecurse({ dir: options.shared.apiDir, withAlias: true });

  formatFile(options.shared.apiDir);

  const cmd2 = options.shared.buildCommand;
  console.debug('Running command', cmd2);
  cp.execSync(cmd2);
}
