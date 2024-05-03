import React from "react";

import styles from "./Loader.module.scss";

export const Loader = ({ isFullScreen = false }) => {
  return (
    <div className={`${isFullScreen ? styles["full-screen"] : ""}`}>
      <div className={styles.loader}></div>
    </div>
  );
};
