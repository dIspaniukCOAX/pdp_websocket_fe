import { useCustomQuery } from "@/hooks/reactQuery/useCustomQuery";

import { api, getJWTToken } from "@/helpers";

import { TQueryOptions } from "@/types";

const fetcher = async () => {
  return api.get("chat/user/profile");
};

export const useCurrentUser = <TQueryFnData = any, TData = any>(
  options?: TQueryOptions<TQueryFnData, TData>
) => {
  const token = getJWTToken();

  return useCustomQuery<TQueryFnData, TData>(["current-user"], fetcher, {
    ...options,
    staleTime: Infinity,
    enabled: !!token
  });
};
