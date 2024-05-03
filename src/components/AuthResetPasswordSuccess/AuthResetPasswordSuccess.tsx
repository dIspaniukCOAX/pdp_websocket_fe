import React, { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { Icon, Title } from "@/elements";

import styles from "./AuthResetPasswordSuccess.module.scss";

import { setAuthActivePageInfo } from "@/store/auth/auth.slice";

export const AuthResetPasswordSuccess = ({
  userEmail
}: {
  userEmail: string;
}) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setAuthActivePageInfo({
        titleForm: t("reset-password.send-email-success"),
        linkForm: "",
        googleTitle: ""
      })
    );
  }, [pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <p className={styles.description__icon}>
            <Icon icon="success" />
        </p>
        <p className={styles.description__text}>
            <Trans
                i18nKey="reset-password.send-email-text"
                values={{ email: userEmail }}
                components={{
                    emailLink: <span className={styles["description__text-selection"]} />
                }}
            />
        </p>
      </div>
      <div className={styles["step-list"]}>
        <Title className={styles["step-list__title"]}>{ t("reset-password.step-title") }</Title>
        <p className={styles["step-item"]}>
          <Icon className={styles["step-item__icon"]} icon="info" />
          <span className={styles["step-item__text"]}> { t("reset-password.step-check-email") } </span>
        </p>
        <p className={styles["step-item"]}>
          <Icon className={styles["step-item__icon"]} icon="info" />
          <span className={styles["step-item__text"]}> { t("reset-password.step-click-link") } </span>
        </p>
        <p className={styles["step-item"]}>
          <Icon className={styles["step-item__icon"]} icon="info" />
          <span className={styles["step-item__text"]}> { t("reset-password.step-change-password") } </span>
        </p>
      </div>
    </div>
  );
};
