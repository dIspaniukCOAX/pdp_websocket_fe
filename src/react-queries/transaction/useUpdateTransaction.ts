import { useQueryClient } from "react-query";

import { useCustomMutation } from "@/hooks";

import { api } from "@/helpers";

import { TMutationsOptions } from "@/types";
import { ITransaction } from "@/types/transaction/transaction.type";

const fetcher = async (body: ITransaction) => {
  return api.patch(`transaction/${body.id}`, body);
};

export const useUpdateTransaction = (
  options?: TMutationsOptions<Promise<void>, ITransaction>
) => {
  const queryClient = useQueryClient();

  const { mutate, ...rest } = useCustomMutation<Promise<void>, ITransaction>(fetcher, {
    ...options,
    onSuccess: async (data, ...args) => {
      options?.onSuccess?.(data, ...args);
      await queryClient.invalidateQueries(["current-user"], { exact: false });
      await queryClient.invalidateQueries(["get-transaction"], { exact: false });
      await queryClient.invalidateQueries(["get-bikes"], { exact: false });
    }
  });

  const handleMutate = (data: ITransaction) => {
    mutate(data);
  };

  return { mutate: handleMutate, ...rest };
};
