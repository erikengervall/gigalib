import { RequireAtLeastOne } from 'shared';

export type MRGenOptions = {
  data: RequireAtLeastOne<{
    params: boolean;
    payload: boolean;
    queryParams: boolean;
    responseBody: boolean;
  }>;

  httpMethod: 'GET' | 'POST';

  shared: {
    /**
     * @example '/Users/.../<monorepo>/packages/shared/src/api'
     */
    apiDir: string;
    /**
     * @example '/Users/.../<monorepo>/packages/shared/src/api/v1/user/get.ts'
     */
    file: string;
    /**
     * @example 'yarn workspace shared build'
     */
    buildCommand: string;
  };

  backend: {
    /**
     * @example '/Users/.../<monorepo>/packages/backend/src/handlers/v1/user/get-handler.ts'
     */
    file: string;
  };

  frontend: {
    /**
     * @example '/Users/.../<monorepo>/packages/frontend/src/hooks/api/v1-user-get.ts'
     */
    file: string;
  };
};
