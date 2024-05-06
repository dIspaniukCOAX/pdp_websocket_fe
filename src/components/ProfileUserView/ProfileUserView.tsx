import React from "react"
import { useSelector } from "react-redux"
import { Form } from "antd"

import { FormItem, Input } from "@/elements"

import styles from "./ProfileUserView.module.scss"

import { RootState } from "@/store"

export const ProfileUserView = () => {
    const user = useSelector((state: RootState) => state.user.main)
    
  return (
    <Form
        layout="vertical"
        className={styles.container}
    >
        <FormItem label="Full name" value="John">
            <Input value={user?.fullName} disabled/>
        </FormItem>
        <FormItem label="Email" value="John">
            <Input value={user?.email} type="email" disabled/>
        </FormItem>
        <FormItem label="Phone Number" value="John">
            <Input value={user?.phoneNumber} type="phone" disabled/>
        </FormItem>
    </Form>
  )
}
