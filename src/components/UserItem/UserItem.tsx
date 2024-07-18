import React from "react";
import { useDispatch } from "react-redux";

import { IUser } from "@/types";

import styles from "./UserItem.module.scss";

import { setActiveUserChat } from "@/store/chat/chat.slice";

export const UserItem = ({ user }: { user: IUser }) => {
  const dispatch = useDispatch();

  const handleChooseUser = () => {
    dispatch(setActiveUserChat(user));
  }

  return (
    <div className={styles["user-item__container"]} onClick={handleChooseUser}>
      <p className={styles["user-item__name"]}> {user.fullName} </p>
      <p className={styles["user-item__email"]}> {user.email} </p>
    </div>
  );
};
