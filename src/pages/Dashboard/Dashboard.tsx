import React from "react";

import { Map } from "@/components/Map/Map";

import styles from "./Dashboard.module.scss";

export const Dashboard = () => {

  return (
    <div className={styles.dashboard__wrapper}>
      <div className={styles.dashboard__container}>
        <Map />
      </div>
    </div>
  );
};
