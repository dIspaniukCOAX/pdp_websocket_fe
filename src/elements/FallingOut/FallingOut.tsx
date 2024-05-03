import React, { FC } from "react";

import styles from "./FallingOut.module.scss";

import { Icon } from "../Icon/Icon";

import { IFallingOutProps } from "./FallingOut.type";

export const FallingOut: FC<IFallingOutProps> = ({ content, title, handleClose, headerAction }) => {
  return (
    <div className={styles["falling-out__wrapper"]}>
      <div id="falling" className={styles["falling-out__container"]}>
        {title && handleClose && (
          <div className={styles["falling-out__header"]}>
            <div className={styles["falling-out__header-close"]} onClick={handleClose}>
              <Icon icon="cross" />
            </div>
            <h1 className={styles["falling-out__header-title"]}>{title}</h1>
            {headerAction || null}
          </div>
        )}
        {content}
      </div>
    </div>
  );
};
