import React from "react";

import MapProvider from "@/components/Map/MapProvider";

import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
  return (
    <div className={styles.dashboard__wrapper}>
      <div className={styles.dashboard__container}>
        <MapProvider />
      </div>
    </div>
  );
};
