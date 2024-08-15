import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import QueryString from 'qs';

import { API } from 'shared';

import { apiClient } from '../api-client';
import type { FrontendResponseError } from '../frontend-response-error';

export const useApiV1UserGetMutation = (
  options?: UseMutationOptions<
    API.V1.User.Get.ResponseBody,
    FrontendResponseError,
    {
      payload: API.V1.User.Get.Payload;
      params: API.V1.User.Get.Params;
      queryParams: API.V1.User.Get.QueryParams;
    }
  >,
) => {
  return useMutation({
    mutationFn: async (input) => {
      const queryParams = QueryString.stringify(input.queryParams);
      const response = await apiClient.post<API.V1.User.Get.ResponseBody>(
        `api/v1/user/get?${queryParams}`,
        input.payload,
        { params: input.params },
      );
      return response.data;
    },
    mutationKey: ['useApiV1UserGetMutation'],
    ...options,
  });
};
