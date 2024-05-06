import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Typography } from "antd";

import { Icon } from "@/elements";

import { ROUTES } from "@/constants";

import styles from "./MainLayoutFooter.module.scss";

const { Link } = Typography;

const { DASHBOARD } = ROUTES

export const MainLayoutFooter = () => {
  const { pathname } = useLocation();

  const { t } = useTranslation();

  const handleIsActiveTab = (tabPathname: string) => {
    const currentPagePathName = pathname.split("/").filter((item) => item)[0];
    const isActive = currentPagePathName.includes(tabPathname);

    if (currentPagePathName === "guests") {
      return `${styles["navigation-item"]} ${isActive ? styles["active-guests"] : ""}`;
    }

    return `${styles["navigation-item"]} ${isActive ? styles.active : ""}`;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link href={DASHBOARD} className={handleIsActiveTab("dashboard")}>
          <Icon icon="map" className={styles["navigation-item__icon"]} />
          <span className={styles["navigation-item__text"]}>{t("navigation.calendar")}</span>
        </Link>
      </div>
    </div>
  );
};
