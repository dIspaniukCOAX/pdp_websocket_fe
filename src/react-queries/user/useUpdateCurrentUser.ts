import { useQueryClient } from "react-query";

import { useCustomMutation } from "@/hooks";

import { api } from "@/helpers";

import { IUser, TMutationsOptions } from "@/types";

const fetcher = async (data: IUser) => {
    return api.patch("chat/user/profile", data);
}

export const useUpdateCurrentUser = (
    options?: TMutationsOptions<IUser, IUser>
  ) => {
    const queryClient = useQueryClient();
  
    const { mutate, ...rest } = useCustomMutation<IUser, IUser>(fetcher, {
      ...options,
      onSuccess: async (data, ...args) => {
        options?.onSuccess?.(data, ...args);
        await queryClient.invalidateQueries(["current-user"], { exact: false });
      }
    });
  
    const handleMutate = (data: IUser) => {
      mutate(data);
    };
  
    return { mutate: handleMutate, ...rest };
  };