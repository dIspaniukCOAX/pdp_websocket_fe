import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { Button } from "antd";

import { Icon, Title } from "@/elements";

import { useRequestNewLink } from "@/react-queries/auth/useRequestNewLink";

import styles from "./AuthSetNewPasswordInvalid.module.scss";

import { setAuthActivePageInfo } from "@/store/auth/auth.slice";

export const AuthSetNewPasswordInvalid = () => {
  const { t } = useTranslation();
  const { token } = useParams();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const { mutate: requestNewLink } = useRequestNewLink();

  const handleRequestNewLink = () => {
    if (token) {
      requestNewLink({
        token
      })
    }
  }

  useEffect(() => {
    dispatch(
      setAuthActivePageInfo({
        titleForm: t("set-password.invalid-link-title"),
        linkForm: "",
        googleTitle: ""
      })
    );
  }, [pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <p className={styles.description__icon}>
          <Icon icon="decline" />
        </p>
        <p className={styles.description__text}>{t("set-password.invalid-link-description")}</p>
      </div>
      <div className={styles["step-list"]}>
        <Title className={styles["step-list__title"]}>{t("set-password.step-invalid-title")}</Title>
        <p className={styles["step-item"]}>
          <Icon className={styles["step-item__icon"]} icon="info" />
          <span className={styles["step-item__text"]}>
            {t("set-password.step-invalid-expired")}
          </span>
        </p>
        <p className={styles["step-item"]}>
          <Icon className={styles["step-item__icon"]} icon="info" />
          <span className={styles["step-item__text"]}>{t("set-password.step-invalid-used")}</span>
        </p>
        <p className={styles["step-item"]}>
          <Icon className={styles["step-item__icon"]} icon="info" />
          <span className={styles["step-item__text"]}>
            {t("set-password.step-invalid-withdrawn")}
          </span>
        </p>
      </div>
      <Button size="large" className={styles["link-btn"]} ghost onClick={handleRequestNewLink}>
        {t("set-password.request-new-link")}
      </Button>
    </div>
  );
};
