import { useDispatch } from "react-redux";

import { useCustomMutation } from "@/hooks";

import { api } from "@/helpers";

import { TMutationsOptions } from "@/types";

import { setNewPasswordValid } from "@/store/auth/auth.slice";

const fetcher = async (tokenId: string) => {
  const res: any = await api.patch(`/host/auth/verify-forgot-token/${tokenId}`);
  
  return res;
};

export const useCheckValidationToken = (options?: TMutationsOptions<string, string>) => {
    const dispatch = useDispatch();

  const { mutate, ...rest } = useCustomMutation<string, string>(fetcher, {
    ...options,
    onSuccess: (data, ...args) => {
      options?.onSuccess?.(data, ...args);
      dispatch(setNewPasswordValid(true));
    }
  });

  const handleMutate = (data: string) => {
    mutate(data);
  };

  return { mutate: handleMutate, ...rest };
};
