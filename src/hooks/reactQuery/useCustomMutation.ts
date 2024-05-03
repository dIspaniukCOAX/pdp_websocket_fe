import { MutationFunction, useMutation } from "react-query";

import { ICustomAxiosError, TMutationOnError, TMutationsOptions } from "@/types";

import { useErrorHandler } from "./useErrorHandler";

export const useCustomMutation = <
  TData = unknown,
  TVariables = void,
  TContext = unknown,
  TError = ICustomAxiosError
>(
  queryFn: MutationFunction<TData, TVariables>,
  options?: TMutationsOptions<TData, TVariables, TContext, TError>
) => {
  const customErrorHandler = useErrorHandler<TMutationOnError<TError, TVariables, TContext>>();

  return useMutation<TData, TError, TVariables, TContext>(queryFn, {
    retry: false,
    retryDelay: 10000,
    ...options,
    onError: (error, ...args) =>
      customErrorHandler(error as ICustomAxiosError, {
        ...(options?.onError && { onError: (err) => options?.onError?.(err || error, ...args) }),
        useCustomAuthError: options?.useCustomAuthError,
        preventShowDefaultErrorToast: options?.preventShowDefaultErrorToast
      })
  });
};
