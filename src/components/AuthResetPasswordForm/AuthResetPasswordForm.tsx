import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Button, Form, Input, Typography } from "antd";

import { FormItem } from "@/elements";

import { useResetPassword } from "@/react-queries/auth/useResetPassword";

import { useYupSync } from "@/hooks";
import { useFormErrors } from "@/hooks/form/useFormErrors";

import { IResetPassword } from "@/types";

import styles from "./AuthResetPasswordForm.module.scss";

import { resetPasswordSchema } from "./AuthResetPasswordSchema";

import { RootState } from "@/store";

const { Link } = Typography;

export const AuthResetPasswordForm = () => {
  const isSuccessResetPassword = useSelector(
    (state: RootState) => state.auth.resetPassword.isSuccess
  );
  const [form] = Form.useForm<IResetPassword>();

  const { t } = useTranslation();

  const onError = useFormErrors(form);

  const { mutate: resetPassword, isLoading } = useResetPassword({ onError });

  const yupSync = useYupSync(resetPasswordSchema);

  const handleSubmit = (values: IResetPassword) => {
    resetPassword(values);
  };

  useEffect(() => {
    if (isSuccessResetPassword) {
      form.resetFields();
    }
  }, [isSuccessResetPassword]);

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      className={styles["reset-password-form"]}
      layout="vertical"
      name="reset-password"
    >
      <div className={styles["reset-password-inputs-wrapper"]}>
        <FormItem label={t("auth-form.email-label")} name="email" required rules={[yupSync]}>
          <Input placeholder={t("reset-password.email-placeholder")} />
        </FormItem>
      </div>

      <Button
        size="large"
        htmlType="submit"
        type="primary"
        disabled={isLoading}
        loading={isLoading}
        className={styles["reset-password-btn"]}
      >
        {t("reset-password.btn-text")}
      </Button>

      <Link href="/sign-in" className={styles["reset-password-link"]}>
        {t("reset-password.back-home")}
      </Link>
    </Form>
  );
};
