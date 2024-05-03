import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, Navigate, useLocation } from "react-router-dom";

import { GoogleAuth } from "@/components";

import { Title } from "@/elements";

import { getJWTToken } from "@/helpers";

import { ROUTES } from "@/constants";

import Logo from "@/assets/icons/bike.svg";

import styles from "./AuthLayout.module.scss";

import { RootState } from "@/store";

const { INDEX, AUTH, SIGN_IN, SIGN_UP } = ROUTES;

interface IAuthProps {
  children?: ReactNode;
  current?: number;
}

export const AuthLayout: FC<IAuthProps> = ({ children }) => {
  const jwtToken = getJWTToken();
  const { pathname } = useLocation();
  const auth = useSelector((state: RootState) => state.auth);

  const { t } = useTranslation();
  const linkHeader = pathname.includes(`${SIGN_IN}`) ? `${AUTH}${SIGN_UP}` : `${AUTH}${SIGN_IN}`;

  if (jwtToken) {
    return <Navigate to={INDEX} replace />;
  }

  return (
    <div className={styles["auth-wrapper"]}>
      <img className={styles["logo-img"]} src={Logo} alt="HOSTY" />

      <div className={styles["form-container"]}>
        <div className={styles["form-container-header"]}>
          <Title className={styles["title-form-header"]}>{auth.activePage.titleForm}</Title>
          <Link className={styles["link-form"]} to={linkHeader}>{auth.activePage.linkForm}</Link>
        </div>

        {children}

        {auth.activePage.googleTitle && (
          <div className={styles["form-container-auth-google"]}>
            <Title className={styles["form-auth-google-title"]} level={6}>
              {t("auth-form.or")}
            </Title>
            <GoogleAuth title={auth.activePage.googleTitle} />
          </div>
        )}
      </div>
    </div>
  );
};
