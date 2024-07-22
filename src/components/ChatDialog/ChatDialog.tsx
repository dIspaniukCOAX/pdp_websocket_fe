import React from "react";

import { IChatMessage } from "@/types";

import styles from "./ChatDialog.module.scss";

export const ChatDialog = ({ messages }: { messages: IChatMessage[] }) => {

  return (
    <div className={styles["chat-dialog__container"]}>
      {messages.map((message: IChatMessage, index: number) => {
        return (
          <div key={index} className={styles["chat-dialog__message"]}>
            <div className={styles["chat-dialog__message-sender"]}>{message.senderId}</div>
            <div className={styles["chat-dialog__message-content"]}>{message.content}</div>
          </div>
        );
      })}
    </div>
  );
};
