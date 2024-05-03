import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Typography } from "antd";

import { Icon, Title } from "@/elements";

import styles from "./AuthSetNewPasswordSuccess.module.scss";

import { setAuthActivePageInfo } from "@/store/auth/auth.slice";

const { Link } = Typography;

export const AuthSetNewPasswordSuccess = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setAuthActivePageInfo({
        titleForm: t("set-password.success-title"),
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
        <p className={styles.description__text}>{t("set-password.success-description")}</p>
      </div>
      <div className={styles["step-list"]}>
        <Title className={styles["step-list__title"]}>{t("set-password.step-success-title")}</Title>
        <p className={styles["step-item"]}>
          <Icon className={styles["step-item__icon"]} icon="info" />
          <span className={styles["step-item__text"]}>
            {t("set-password.step-success-share")}
          </span>
        </p>
        <p className={styles["step-item"]}>
          <Icon className={styles["step-item__icon"]} icon="info" />
          <span className={styles["step-item__text"]}>
            {t("set-password.step-success-strong")}
          </span>
        </p>
        <p className={styles["step-item"]}>
          <Icon className={styles["step-item__icon"]} icon="info" />
          <span className={styles["step-item__text"]}>
            {t("set-password.step-success-update")}
          </span>
        </p>
      </div>
      <Link className={styles["link-btn"]} href="/auth/sign-in">
        {t("set-password.main")}
      </Link>
    </div>
  );
};
