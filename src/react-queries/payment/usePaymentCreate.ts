import { useQueryClient } from "react-query";

import { notification } from "@/elements";

import { useCustomMutation } from "@/hooks";

import { api } from "@/helpers";

import { TMutationsOptions } from "@/types";
import { IPayment } from "@/types/payment/payment.type";

const fetcher = async (body: IPayment) => {
  return api.post("stripe", body);
};

export const usePaymentSend = (
  options?: TMutationsOptions<Promise<void>, IPayment>
) => {
  const queryClient = useQueryClient();

  const { mutate, ...rest } = useCustomMutation<Promise<void>, IPayment>(fetcher, {
    ...options,
    onSuccess: async (data, ...args) => {
      options?.onSuccess?.(data, ...args);
      notification.success("Payment successful");
      await queryClient.invalidateQueries(["current-user"], { exact: false });
    }
  });

  const handleMutate = (data: IPayment) => {
    mutate(data);
  };

  return { mutate: handleMutate, ...rest };
};
