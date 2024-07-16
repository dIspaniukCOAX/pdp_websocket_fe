import { useDispatch } from "react-redux";

import { useCustomMutation } from "@/hooks";

import { api } from "@/helpers";

import { IResetPassword, TMutationsOptions } from "@/types";

import { setResetPasswordStatus } from "@/store/auth/auth.slice";

const fetcher = async (body: IResetPassword) => {
  return api.post("/chat/auth/forgot-password", body);
};

export const useResetPassword = (options?: TMutationsOptions<Promise<void>, IResetPassword>) => {
  const dispatch = useDispatch();

  const { mutate, ...rest } = useCustomMutation<Promise<void>, IResetPassword>(fetcher, {
    ...options,
    onSuccess: (data, ...args) => {
      dispatch(setResetPasswordStatus({
        isSuccess: true,
        userEmail: args[0].email
      }));
      options?.onSuccess?.(data, ...args);
    }
  });

  const handleMutate = (data: IResetPassword) => {
    mutate(data);
  };

  return { mutate: handleMutate, ...rest };
};
