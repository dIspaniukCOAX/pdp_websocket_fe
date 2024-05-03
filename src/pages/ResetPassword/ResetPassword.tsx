import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { AuthResetPasswordForm, AuthResetPasswordSuccess } from "@/components";

import styles from "./ResetPassword.module.scss";

import { RootState } from "@/store";
import { setAuthActivePageInfo } from "@/store/auth/auth.slice";

export const ResetPassword = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(setAuthActivePageInfo({
      titleForm: t("reset-password.title"),
      linkForm: "",
      googleTitle: ""
    }));
  }, [pathname])

  if (auth.resetPassword.isSuccess) {
    return <AuthResetPasswordSuccess userEmail={auth.resetPassword.userEmail} />;
  }

  return (
    <>
      <div className={styles.reset__description}>{t("reset-password.description")}</div>
      <AuthResetPasswordForm />
    </>
  );
};
