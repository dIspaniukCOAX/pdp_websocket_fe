import React, { FC } from "react";

import { Icon } from "@/elements";

import styles from "./EmptyContent.module.scss";

import { IEmptyContentProps } from "./EmptyContent.type";

export const EmptyContent: FC<IEmptyContentProps> = ({ content, className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <Icon icon="emptySearch" className={styles.icon} />
      <div className={styles.content}>{content}</div>
    </div>
  );
};
