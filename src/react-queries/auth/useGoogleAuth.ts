import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

import { api, setJWTToken } from "@/helpers";

import { ROUTES } from "@/constants";

import { IAuthResponse } from "@/types";

const { INDEX } = ROUTES;

const fetcher = async (code: string) => {
  const res: IAuthResponse = await api.post("/host/auth/google", {
    authorizationCode: code
  });

  const { jwtToken } = res;

  jwtToken && setJWTToken(jwtToken);

  return res;
};

export const useGoogleAuth = () => {
  const navigate = useNavigate();

  const mutation = useMutation(fetcher, {
    onSuccess: () => {
      const redirectPath = INDEX;
      navigate(redirectPath, { replace: true });
    }
  });

  return useGoogleLogin({
    flow: "auth-code",
    onSuccess: async ({ code }) => {
      mutation.mutate(code);
    }
  });
};
