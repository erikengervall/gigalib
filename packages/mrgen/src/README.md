Input: 'api/v1/user/get'

API URL: 'https://example.com/api/v1/user/get'

Shared

```ts
// shared/src/api/v1/user/get.ts
import { z } from 'zod';

export const Payload = z.object({});
export type Payload = z.infer<typeof Payload>;

export const Params = z.object({});
export type Params = z.infer<typeof Params>;

export const QueryParams = z.object({});
export type QueryParams = z.infer<typeof QueryParams>;

export type ResponseBody = {
  data: unknown;
};
```

Backend

```ts
// backend/src/handlers/v1/user/get.ts
import type { RequestHandler } from 'express';

import { API } from 'shared';

export const getHandler: RequestHandler = async (req, res) => {
  const NOT_IMPLEMENTED = true;
  if (NOT_IMPLEMENTED) {
    return res.status(404).send();
  }

  const parsedPayload = API.V1.User.Get.Payload.safeParse(req.body);
  if (!parsedPayload.success) {
    res.status(400).json(); // TODO: Include error details.
    return;
  }
  const parsedQueryParams = API.V1.User.Get.QueryParams.safeParse(req.query);
  if (!parsedQueryParams.success) {
    res.status(400).json(); // TODO: Include error details.
    return;
  }
  const parsedParams = API.V1.User.Get.Params.safeParse(req.params);
  if (!parsedParams.success) {
    res.status(400).json(); // TODO: Include error details.
    return;
  }

  const responseBody: API.V1.User.Get.ResponseBody = {
    data: {},
  };
  return res.status(200).json(responseBody);
};
```

Frontend

```ts
// frontend1/src/api/hooks/api/v1-user-get.ts

export const useApiV1UserGetMutation = (
  options?: UseMutationOptions<
    API.V1.User.Get.ResponseBody,
    FrontendResponseError,
    API.V1.User.Get.Payload
  >,
) => {
  return useMutation<
    any, // API.Frontend1.Auth_DevvyLoginPost_ResponseBody,
    FrontendResponseError,
    CredentialResponse
  >({
    mutationFn: async () => {
      const response =
        await apiClient.post<API.V1.User.Get.ResponseBody>('/api/v1/user/get');
      return response.data;
    },
    mutationKey: ['useApiV1UserGetMutation'],
    ...options,
  });
};

export const useApiV1UserGetQuery = (
  options?: UseQueryOptions<
    API.V1.User.Get.ResponseBody,
    FrontendResponseError
  >,
) => {
  return useQuery<
    API.Frontend1.Counters_List_ResponseBody,
    FrontendResponseError
  >({
    queryFn: async () => {
      const response =
        await apiClient.get<API.V1.User.Get.ResponseBody>('/api/v1/user/get');
      return response.data;
    },
    queryKey: ['useApiV1UserGetQuery'],
    ...options,
  });
};
```
