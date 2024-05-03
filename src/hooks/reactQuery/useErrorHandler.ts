import { useNavigate } from "react-router-dom";
import { TAdditionalErrorHandleOption } from "types";

import { queryClient } from "@/providers";

import { notification } from "@/elements";

import { removeJWTToken } from "@/helpers";

import { ROUTES } from "@/constants";

import { useQueryCache } from "./useQueryCache";

const { AUTH, SIGN_IN } = ROUTES;

export const useErrorHandler = <TOnError>() => {
  const navigate = useNavigate();
  const cache = useQueryCache();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (error: any, options: TAdditionalErrorHandleOption & { onError?: TOnError }) => {
    if (error.code === "ERR_NETWORK") {
      console.info(error);
    } else if (error?.response) {
      const { status } = error;

      if (status === 401 && !options?.useCustomAuthError) {
        removeJWTToken();
        cache.clear();
        queryClient.clear();
        navigate(`${AUTH}/${SIGN_IN}`, { replace: true });

        return;
      }

      if (error.response?.data?.message) {
        notification.error(error.response.data.message);

        return;
      }

      if (options?.onError && typeof options?.onError === "function") {
        return options.onError(error, options?.onError);
      }

      if (!options?.preventShowDefaultErrorToast) {
        notification.error();
      }
    }
  };
};
