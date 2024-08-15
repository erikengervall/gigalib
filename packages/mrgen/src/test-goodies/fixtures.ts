import { MRGenOptions } from '../types/mrgen-options';

export const createMockMRGenOptions = (
  overrides?: Partial<MRGenOptions>,
): { mrGenOptions: MRGenOptions } => {
  return {
    mrGenOptions: {
      data: {
        queryParams: true,
        payload: true,
        params: true,
        responseBody: true,
      },

      httpMethod: 'POST',

      shared: {
        apiDir: 'packages/shared/src/api',
        file: 'packages/shared/src/api/v1/user/get.ts',
        buildCommand: 'yarn workspace shared ci:build',
      },
      backend: {
        file: 'packages/backend/src/handlers/v1/user/get-handler.ts',
      },
      frontend: {
        file: 'packages/frontend1/src/api/hooks/v1-user-get.ts',
      },
      ...overrides,
    },
  };
};
