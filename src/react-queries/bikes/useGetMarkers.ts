import { useCustomQuery } from "@/hooks/reactQuery/useCustomQuery";

import { api, getJWTToken } from "@/helpers";

import { TQueryOptions } from "@/types";
import { IBike } from "@/types/bike/bike.type";

const fetcher = async () => {
  return api.get("bikes");
};

export const useGetBikes = <TQueryFnData = IBike[], TData = IBike[]>(
  options?: TQueryOptions<TQueryFnData, TData>
) => {
  const token = getJWTToken();

  return useCustomQuery<TQueryFnData, TData>(["get-bikes"], fetcher, {
    ...options,
    staleTime: Infinity,
    enabled: !!token
  });
};
