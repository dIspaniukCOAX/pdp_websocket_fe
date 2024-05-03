import { UseMutationOptions, UseQueryOptions } from "react-query";
import { AxiosError } from "axios";

export interface ICustomAxiosError extends Omit<AxiosError, "response"> {
  response: AxiosError["response"] & {
    data: {
      message: string;
      errors?: Array<{ name: string; error: string }>;
    };
  };
}

export type TMutationOnError<TError, TVariables, TContext> = (
  error: TError,
  variables: TVariables,
  context: TContext | undefined
) => Promise<unknown> | void;

export type TQueryOnError<TError> = (err: TError) => void;

export type TAdditionalErrorHandleOption = {
  useCustomAuthError?: boolean;
  preventShowDefaultErrorToast?: boolean;
};

export type TMutationsOptions<
  TData,
  TVariables = void,
  TContext = unknown,
  TError = ICustomAxiosError
> = UseMutationOptions<TData, TError, TVariables, TContext> & TAdditionalErrorHandleOption;

export type TQueryOptions<
  TQueryFnData,
  TData = TQueryFnData,
  TError = ICustomAxiosError
> = UseQueryOptions<TQueryFnData, TError, TData> & TAdditionalErrorHandleOption;
