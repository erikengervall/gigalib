import { createSharedFile } from './utils/create-shared-file';
import { pascalCase } from '@engervall/shared';

import { MRGenOptions } from './types/mrgen-options';
import { createBackendFile } from './utils/create-backend-file';
import { createFrontendFile } from './utils/create-frontend-file';

export async function MRGen(options: MRGenOptions) {
  console.debug('options', options);

  if (options.dryRun) {
    console.log('Dry run', pascalCase('pascal-case-me-pls'));
    return;
  }

  createSharedFile(options);
  createBackendFile(options);
  createFrontendFile(options);
}

// MRGen({
//   data: {
//     queryParams: true,
//     payload: true,
//     params: true,
//     responseBody: true,
//   },

//   httpMethod: 'POST',

//   shared: {
//     apiDir: path.join(process.cwd(), 'packages/shared/src/api'),
//     file: path.join(process.cwd(), 'packages/shared/src/api/v1/user/get.ts'),
//     buildCommand: 'yarn workspace shared ci:build',
//   },
//   backend: {
//     file: path.join(
//       process.cwd(),
//       'packages/backend/src/handlers/v1/user/get-handler.ts',
//     ),
//   },
//   frontend: {
//     file: path.join(
//       process.cwd(),
//       'packages/frontend1/src/api/hooks/v1-user-get.ts',
//     ),
//   },
// });
