import React from "react";

import styles from "./Dashboard.module.scss";

import { Chat } from "@/container";

export const Dashboard = () => {
  return (
    <div className={styles.dashboard__wrapper}>
      <div className={styles.dashboard__container}>
        <Chat />
      </div>
    </div>
  );
};
