import { pascalCase } from '@engervall/shared';

import { MRGenOptions } from '../types/mrgen-options';
import { createFileWithContent } from './create-file-with-content';
import { formatFile } from './format-file';
import { getAPIType } from './get-api-type';

export function createFrontendFile(options: MRGenOptions) {
  const { APIType } = getAPIType(options);

  const hookName = pascalCase(APIType.base);
  // const queryVarName = `use${hookName}Query`;

  let frontendFileContent = '';
  const responseBody = options.data.responseBody
    ? APIType.responseBody
    : 'void';

  switch (options.httpMethod) {
    case 'POST': {
      const mutationVarName = `use${hookName}Mutation`;
      const mutationInput = (
        options.data.payload || options.data.params || options.data.queryParams
          ? `{
              ${options.data.payload ? `payload: ${APIType.payload};` : ''}
              ${options.data.params ? `params: ${APIType.params};` : ''}
              ${options.data.queryParams ? `queryParams: ${APIType.queryParams};` : ''}
            }`
          : 'void'
      )
        .split('\n')
        .join('');

      frontendFileContent = `
    import { apiClient } from './api-client';
    import type { FrontendResponseError } from '@engervall/shared';
    import { UseMutationOptions, useMutation } from '@tanstack/react-query';
    import { API } from 'shared';
    ${options.data.queryParams ? "import QueryString from 'qs';" : ''}
    
    export const ${mutationVarName} = (
      options?: UseMutationOptions<
        ${responseBody},
        FrontendResponseError,
        ${mutationInput}
      >,
    ) => {
      return useMutation({
        mutationFn: async (input) => {
          ${options.data.queryParams ? 'const queryParams = QueryString.stringify(input.queryParams);' : ''}
          const response = await apiClient.post<${responseBody}>(
            \`${APIType.urlPath}${options.data.queryParams ? '?${queryParams}' : ''}\`,
            ${options.data.payload ? 'input.payload' : 'undefined'},
            ${options.data.params ? '{ params: input.params }' : ''}
          );
          return response.data;
        },
        mutationKey: ['${mutationVarName}'],
        ...options,
      });
    };
    `;
      break;
    }

    case 'GET': {
      const queryVarName = `use${hookName}Query`;
      const queryInput = (
        options.data.params || options.data.queryParams
          ? `{
              ${options.data.params ? `params: ${APIType.params};` : ''}
              ${options.data.queryParams ? `queryParams: ${APIType.queryParams};` : ''}
            }`
          : 'void'
      )
        .split('\n')
        .join('');

      frontendFileContent = `
    import { apiClient } from './api-client';
    import type { FrontendResponseError } from '@engervall/shared';
    import { UseQueryOptions, useQuery } from '@tanstack/react-query';
    import { API } from 'shared';
    ${options.data.queryParams ? "import QueryString from 'qs';" : ''}

    export const ${queryVarName} = (
      input: ${queryInput},
      options?: UseQueryOptions<
        ${responseBody},
        FrontendResponseError
      >,
    ) => {
      return useQuery({
        queryFn: async () => {
          ${options.data.queryParams ? 'const queryParams = QueryString.stringify(input.queryParams);' : ''}
          const response = await apiClient.get<${responseBody}>(
            \`${APIType.urlPath}${options.data.queryParams ? '?${queryParams}' : ''}\`,
            ${options.data.params ? '{ params: input.params }' : ''}
          );
          return response.data;
        },
        queryKey: ['${queryVarName}'],
        ...options,
      });
    };
`;
      break;
    }

    default: {
      throw new Error(`Unsupported httpMethod: ${options.httpMethod}`);
    }
  }

  createFileWithContent(options.frontend.file, frontendFileContent);

  formatFile(options.frontend.file);
}
