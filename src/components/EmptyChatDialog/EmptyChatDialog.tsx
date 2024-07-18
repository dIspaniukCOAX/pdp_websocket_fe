import React from "react"

import styles from "./EmptyChatDialog.module.scss"

export const EmptyChatDialog = () => {
  return (
    <div className={styles["empty-chat"]}>
        <h1 className={styles["empty-chat__title"]}>Start a conversation</h1>
        <p className={styles["empty-chat__text"]}>Send a message to start a conversation</p>
    </div>
  )
}
