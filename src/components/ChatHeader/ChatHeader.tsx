import React from "react";
import { useSelector } from "react-redux";

import styles from "./ChatHeader.module.scss";

import { RootState } from "@/store";

export const ChatHeader = () => {
  const activeUser = useSelector((state: RootState) => state.chat.activeUser);

  return (
    <div className={styles["chat-header__container"]}>
      <p className={styles["chat-header__name"]}>{activeUser?.fullName}</p>
      <p className={styles["chat-header__email"]}>{activeUser?.email}</p>
    </div>
  );
};
