import { useCustomMutation } from "@/hooks";

import { api } from "@/helpers";

import { ICheckValidationToken, TMutationsOptions } from "@/types";

const fetcher = async (body: ICheckValidationToken) => {
  const { token } = body;

  return api.post(`/host/auth/resend-forgot-password/${token}`);
};

export const useRequestNewLink = (
  options?: TMutationsOptions<Promise<void>, ICheckValidationToken>
) => {

  const { mutate, ...rest } = useCustomMutation<Promise<void>, ICheckValidationToken>(fetcher, {
    ...options,
    onSuccess: (data, ...args) => {
      options?.onSuccess?.(data, ...args);
    }
  });

  const handleMutate = (data: ICheckValidationToken) => {
    mutate(data);
  };

  return { mutate: handleMutate, ...rest };
};
