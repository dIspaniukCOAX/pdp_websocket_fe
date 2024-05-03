import { FC, ReactNode } from "react";
import { Layout } from "antd";

import { MainLayoutHeader } from "@/components";

import styles from "./MainLayout.module.scss";


const { Content } = Layout;


interface IMainMainLayoutProps {
  children?: ReactNode;
}

export const MainLayout: FC<IMainMainLayoutProps> = ({ children }) => {

  return (
    <>
    <MainLayoutHeader />
      <Layout id="main" className={styles["main-wrapper"]}>
        <Content className={styles.content}>{children}</Content>
      </Layout>
    </>
  );
};
