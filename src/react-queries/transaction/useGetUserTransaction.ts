import { useCustomQuery } from "@/hooks/reactQuery/useCustomQuery";

import { api } from "@/helpers";

import { TQueryOptions } from "@/types";
import { ITransaction } from "@/types/transaction/transaction.type";

const fetcher = async (userId: number) => {
  return api.get(`transaction/${userId}`);
};

export const useGetUserTransactionActive = <TQueryFnData = ITransaction[], TData = ITransaction[]>(
  userId: number,
  options?: TQueryOptions<TQueryFnData, TData>
) => {
  return useCustomQuery<TQueryFnData, TData>(["get-transaction"], () => fetcher(userId), {
    ...options,
    staleTime: Infinity,
  });
};
