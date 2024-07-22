import { FC, ReactNode, useEffect } from "react";
import { Layout } from "antd";

import { MainLayoutHeader } from "@/components";

import { sendAnalytics } from "@/helpers/analytics/analytics";

import styles from "./MainLayout.module.scss";

const { Content } = Layout;

interface IMainMainLayoutProps {
  children?: ReactNode;
}

export const MainLayout: FC<IMainMainLayoutProps> = ({ children }) => {
  useEffect(() => {
    window.addEventListener("unload", sendAnalytics);

    return () => {
      window.removeEventListener("unload", sendAnalytics);
    };
  }, []);

  return (
    <>
      <MainLayoutHeader />
      <Layout id="main" className={styles["main-wrapper"]}>
        <Content className={styles.content}>{children}</Content>
      </Layout>
    </>
  );
};
