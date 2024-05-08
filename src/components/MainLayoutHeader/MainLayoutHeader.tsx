import { FC, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Layout, Typography } from "antd";

import { ProfileDropDown } from "@/components";

import { Icon } from "@/elements";

import { useGetUserTransactionActive } from "@/react-queries/transaction/useGetUserTransaction";

import { ROUTES } from "@/constants";

import styles from "./MainLayoutHeader.module.scss";

import { RootState } from "@/store";

const { Link } = Typography;
const { Header } = Layout;

const { ACTIVE_RENT, DASHBOARD, PROFILE } = ROUTES;

export const MainLayoutHeader: FC = () => {
  const header = useSelector((state: RootState) => state.header);
  const user = useSelector((state: RootState) => state.user.main);
  const navigate = useNavigate();

  const { data: activeTransaction } = useGetUserTransactionActive(user?.id || 0, {
    enabled: !!user?.id,
    cacheTime: 0
  });

  const balanceValue = useMemo(() => {
    const convertToFloat = parseFloat(String((user?.balance || 0) / 100) || "0");

    return convertToFloat.toFixed(2);
  }, [user]);

  const isNavigation = header.navigation.title;

  useEffect(() => {
    if (activeTransaction && activeTransaction?.length) {
      navigate(ACTIVE_RENT);
    } else {
      navigate(DASHBOARD);
    }
  }, [activeTransaction]);

  const handleNavigation = useMemo(() => {
    if (isNavigation) {
      return (
        <Link className={styles["header__navigation-container"]} href={header.navigation.link}>
          <span className={styles["navigation-icon__title"]}>{header.navigation.title}</span>
        </Link>
      );
    }

    return (
      <Link href="/dashboard">
        <Icon icon="bike" className={styles["logo-header"]} />
      </Link>
    );
  }, [header]);

  return (
    <Header className={styles.header}>
      {handleNavigation}

      <div className={styles.content}>
        <p onClick={() => navigate(PROFILE)} className={styles.balance}>Balance: {balanceValue}₴</p>
        <ProfileDropDown />
      </div>
    </Header>
  );
};
