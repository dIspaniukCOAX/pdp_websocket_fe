import React from "react"

import { ChatApp } from "@/components/ChatApp/ChatApp"
import { ListOfUsers } from "@/components/ListOfUsers/ListOfUsers"

import styles from "./Chat.module.scss"

export const Chat = () => {

  return (
    <div className={styles.chat__container}>
        <ListOfUsers />

        <ChatApp />
    </div>
  )
}
