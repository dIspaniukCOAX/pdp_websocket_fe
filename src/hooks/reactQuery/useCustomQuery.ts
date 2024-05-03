import { QueryFunction, QueryKey, useQuery } from "react-query";
import { ICustomAxiosError, TQueryOnError, TQueryOptions } from "types";

import { useErrorHandler } from "./useErrorHandler";

export const useCustomQuery = <TFnData = unknown, TData = TFnData, TError = ICustomAxiosError>(
  queryKey: QueryKey,
  queryFn: QueryFunction<TFnData, QueryKey>,
  options?: TQueryOptions<TFnData, TData, TError>
) => {
  const customErrorHandler = useErrorHandler<TQueryOnError<TError>>();

  return useQuery<TFnData, TError, TData>(queryKey, queryFn, {
    retry: 1,
    retryDelay: 10000,
    refetchOnReconnect: false,
    ...options,
    onError: (err) => {
      customErrorHandler(err as ICustomAxiosError, {
        onError: options?.onError,
        useCustomAuthError: options?.useCustomAuthError,
        preventShowDefaultErrorToast: options?.preventShowDefaultErrorToast
      });
    }
  });
};
