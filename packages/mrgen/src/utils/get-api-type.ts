import { SHARED_EXPORTS } from './create-shared-file';
import { pascalCase } from '@engervall/shared';

import { MRGenOptions } from '../types/mrgen-options';
import { fileName } from './file-name';

export function getAPIType(options: MRGenOptions) {
  const APIType = options.shared.file // '/Users/.../<monorepo>/packages/shared/src/api/v1/user/get.ts'
    .replace(options.shared.apiDir, '') // '/v1/user/get.ts'
    .split('/') // ['', 'v1', 'user', 'get.ts']
    .filter(Boolean) // ['v1', 'user', 'get.ts']
    .map((curr) => {
      const { withoutExt } = fileName(curr);
      return pascalCase(withoutExt);
    }, []) // ['V1', 'User', 'Get']
    .join('.'); // 'V1.User.Get'

  const base = `API.${APIType}`; // 'API.V1.User.Get'

  return {
    APIType: {
      urlPath: base
        .split('.')
        .map((str) => str.toLowerCase())
        .join('/'), // 'api/v1/user/get'
      base, // 'API.V1.User.Get'
      basePascalCase: pascalCase(base), // 'APIV1UserGet'
      responseBody: `${base}.${SHARED_EXPORTS.ResponseBody}`, // 'API.V1.User.Get.ResponseBody'
      payload: `${base}.${SHARED_EXPORTS.Payload}`, // 'API.V1.User.Get.Payload'
      params: `${base}.${SHARED_EXPORTS.Params}`, // 'API.V1.User.Get.Params'
      queryParams: `${base}.${SHARED_EXPORTS.QueryParams}`, // 'API.V1.User.Get.QueryParams'
    },
  };
}
