import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

import {
  AuthSetNewPasswordForm,
  AuthSetNewPasswordInvalid,
  AuthSetNewPasswordSuccess
} from "@/components";

import { useCheckValidationToken } from "@/react-queries/auth/useCheckValidationToken";

import { RootState } from "@/store";
import { setAuthActivePageInfo } from "@/store/auth/auth.slice";

export const SetNewPassword = () => {
  const { token } = useParams();
  const isTokenValid = useSelector((state: RootState) => state.auth.setNewPassword.isValid);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { mutate: handleTokenValid, isLoading } = useCheckValidationToken();

  useEffect(() => {
    if (token) {
      handleTokenValid(token);
    }
  }, [token]);

  useEffect(() => {
    dispatch(
      setAuthActivePageInfo({
        titleForm: t("set-password.title"),
        linkForm: "",
        googleTitle: ""
      })
    );
  }, [pathname]);

  const isSuccessSetNewPassword = useSelector(
    (state: RootState) => state.auth.setNewPassword.isSuccess
  );

  if (isSuccessSetNewPassword) {
    return <AuthSetNewPasswordSuccess />;
  }

  if (!isTokenValid && !isLoading) {
    return <AuthSetNewPasswordInvalid />;
  }

  return <AuthSetNewPasswordForm />;
};
