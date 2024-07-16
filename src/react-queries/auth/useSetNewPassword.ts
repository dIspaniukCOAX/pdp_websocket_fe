import { useDispatch } from "react-redux";

import { useCustomMutation } from "@/hooks";

import { api } from "@/helpers";

import { IRequestSetNewPassword, TMutationsOptions } from "@/types";

import { setNewPasswordStatus } from "@/store/auth/auth.slice";

const fetcher = async (body: IRequestSetNewPassword) => {
  const { token, ...rest } = body;

  return api.patch(`/chat/auth/set-new-password/${token}`, rest);
};

export const useSetNewPassword = (
  options?: TMutationsOptions<Promise<void>, IRequestSetNewPassword>
) => {
  const dispatch = useDispatch();

  const { mutate, ...rest } = useCustomMutation<Promise<void>, IRequestSetNewPassword>(fetcher, {
    ...options,
    onSuccess: (data, ...args) => {
      dispatch(setNewPasswordStatus(true));
      options?.onSuccess?.(data, ...args);
    }
  });

  const handleMutate = (data: IRequestSetNewPassword) => {
    mutate(data);
  };

  return { mutate: handleMutate, ...rest };
};
