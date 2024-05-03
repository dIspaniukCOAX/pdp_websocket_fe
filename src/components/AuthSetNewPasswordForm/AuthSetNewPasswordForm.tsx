import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router-dom";
import { Button, Form, Typography } from "antd";

import { FormItem, Input } from "@/elements";

import { useSetNewPassword } from "@/react-queries/auth/useSetNewPassword";

import { useYupSync } from "@/hooks";
import { useFormErrors } from "@/hooks/form/useFormErrors";

import { ISetNewPassword } from "@/types";

import styles from "./AuthSetNewPasswordForm.module.scss";

const { Link } = Typography;

import { useDispatch } from "react-redux";

import { setNewPasswordSchema } from "./AuthSetNewPasswordSchema";

import { setAuthActivePageInfo } from "@/store/auth/auth.slice";

export const AuthSetNewPasswordForm = () => {
  const { token } = useParams();
  const { t } = useTranslation();
  const [form] = Form.useForm<ISetNewPassword>();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const onError = useFormErrors(form);

  const yupSync = useYupSync(setNewPasswordSchema, form.getFieldsValue);

  const { mutate: setNewPassword, isLoading } = useSetNewPassword({ onError });

  const handleSubmit = (values: ISetNewPassword) => {
    setNewPassword({
      newPassword: values.password,
      token: token || ""
    })
  }

  useEffect(() => {
    dispatch(
      setAuthActivePageInfo({
        titleForm: t("set-password.title"),
        linkForm: "",
        googleTitle: ""
      })
    );
  }, [pathname]);

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      className={styles["set-new-password-form"]}
      layout="vertical"
      name="set-new-password-form"
    >
      <div className={styles["set-new-password-form__container"]}>
        <FormItem
          label={t("set-password.new-password")}
          name="password"
          required
          rules={[yupSync]}
        >
          <Input type="password" />
        </FormItem>

        <FormItem
          label={t("set-password.confirm-password")}
          name="repeatPassword"
          required
          rules={[yupSync]}
        >
          <Input type="password" />
        </FormItem>
      </div>

      <Button
        size="large"
        htmlType="submit"
        type="primary"
        disabled={isLoading}
        loading={isLoading}
        className={styles["set-new-password__btn"]}
      >
        {t("set-password.btn-text")}
      </Button>
      <Link className={styles["set-new-password__link-back"]} href="/auth/sign-in">
        {t("set-password.decline")}
      </Link>
    </Form>
  );
};
