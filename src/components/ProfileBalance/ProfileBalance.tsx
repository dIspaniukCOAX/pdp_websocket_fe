import React from "react"

import styles from "./ProfileBalance.module.scss";

import { Payment } from "../Payment/Payment";

export const ProfileBalance = () => {
  return (
    <div className={styles.container}>
        <Payment />
    </div>
  )
}
