import React from "react";

import styles from "./BlockContent.module.scss";

export const BlockContent = ({ title, content }: { title: string; content: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>{content}</div>
    </div>
  );
};
