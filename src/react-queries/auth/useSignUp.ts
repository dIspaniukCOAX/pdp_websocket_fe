import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

import { useCustomMutation } from "@/hooks";

import { api, setJWTToken } from "@/helpers";

import { ROUTES } from "@/constants";

import { IAuthResponse, ISignUp, TMutationsOptions } from "@/types";

const fetcher = async (body: ISignUp) => {
  const res: IAuthResponse = await api.post("/host/auth/register", body);

  const { jwtToken } = res;

  jwtToken && setJWTToken(jwtToken);

  return res;
};

const { INDEX } = ROUTES;

export const useSignUp = (options?: TMutationsOptions<IAuthResponse, ISignUp>) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, ...rest } = useCustomMutation<IAuthResponse, ISignUp>(fetcher, {
    ...options,
    onSuccess: async (data, ...args) => {
      options?.onSuccess?.(data, ...args);

      await queryClient.invalidateQueries(["current-user"], { exact: false });

      const redirectPath = INDEX;
      navigate(redirectPath, { replace: true });
    }
  });

  const handleMutate = (data: ISignUp) => {
    mutate(data);
  };

  return { mutate: handleMutate, ...rest };
};
