import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { Layout, Typography } from "antd";

import { ProfileDropDown } from "@/components";

import { Icon } from "@/elements";

import styles from "./MainLayoutHeader.module.scss";

import { RootState } from "@/store";

const { Link } = Typography;
const { Header } = Layout;

export const MainLayoutHeader: FC = () => {
  const header = useSelector((state: RootState) => state.header);

  const isNavigation = header.navigation.title;

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
        <Icon icon="message" className={styles["logo-header"]} />
      </Link>
    );
  }, [header]);

  return (
    <Header className={styles.header}>
      {handleNavigation}

      <div className={styles.content}>
        <ProfileDropDown />
      </div>
    </Header>
  );
};
