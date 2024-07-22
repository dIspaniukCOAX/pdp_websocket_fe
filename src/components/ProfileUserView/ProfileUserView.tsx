import React, { useEffect } from "react";
import { Button, Form } from "antd";

import { FormItem, Input, Loader } from "@/elements";

import { useCurrentUser } from "@/react-queries";
import { useUpdateCurrentUser } from "@/react-queries/user/useUpdateCurrentUser";

import { useYupSync } from "@/hooks";

import { userSchema } from "./Profile.schema";

import { IUser } from "@/types";

import styles from "./ProfileUserView.module.scss";

export const ProfileUserView = () => {
  const [form] = Form.useForm();
  const yupSync = useYupSync(userSchema);
  const { data: user, isLoading: isUserDataLoading } = useCurrentUser();
  const { mutate: handleUpdateUserInfo, isLoading: isUpdateUserInfo } = useUpdateCurrentUser();

  const handleSubmit = (values: IUser) => {
    console.log("values :>> ", values);
    const objectKeys = Object.keys(values);
    const sortedData = objectKeys.reduce((acc, key) => {
      if (values[key] !== user[key]) {
        acc[key] = values[key];
      }

      return acc;
    }, {} as IUser);
    // handleUpdateUserInfo(sortedData);
  };

  useEffect(() => {
    form.setFieldsValue(user);
  }, [user]);

  if (isUserDataLoading || isUpdateUserInfo) {
    return <Loader isFullScreen />;
  }

  return (
    <Form form={form} onFinish={handleSubmit} layout="vertical" className={styles.container}>
      <FormItem rules={[yupSync]} name="fullName" label="Full name" value="John">
        <Input value={user?.fullName} />
      </FormItem>
      <FormItem rules={[yupSync]} name="email" label="Email" value="John">
        <Input value={user?.email} type="email" disabled />
      </FormItem>
      <FormItem rules={[yupSync]} name="phoneNumber" label="Phone Number" value="John">
        <Input value={user?.phoneNumber} type="phone" />
      </FormItem>

      <Button className={styles.form__button} type="primary" htmlType="submit">
        Save
      </Button>
    </Form>
  );
};
