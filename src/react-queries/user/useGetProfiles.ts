import { useCustomQuery } from "@/hooks/reactQuery/useCustomQuery";

import { api, getJWTToken } from "@/helpers";

import { IUser, TQueryOptions } from "@/types";

const fetcher = async () => {
  return api.get("chat/user/profiles");
};

export const useGetProfiles = <TQueryFnData = IUser[], TData = IUser[]>(
  options?: TQueryOptions<TQueryFnData, TData>
) => {
  const token = getJWTToken();

  return useCustomQuery<TQueryFnData, TData>(["get-profiles"], fetcher, {
    ...options,
    staleTime: Infinity,
    enabled: !!token
  });
};
