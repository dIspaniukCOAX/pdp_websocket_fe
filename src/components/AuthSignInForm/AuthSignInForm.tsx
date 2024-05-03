import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Form, Typography } from "antd";
import { FormProps } from "antd/lib";

import { Button, FormItem, Input } from "@/elements";

import { useSignIn } from "@/react-queries";

import { useYupSync } from "@/hooks";
import { useFormErrors } from "@/hooks/form/useFormErrors";

import { ROUTES } from "@/constants";

import { ISignIn } from "@/types";

import styles from "./AuthSignInForm.module.scss";

import { signInSchema } from "./AuthSignInSchema";

import { setAuthActivePageInfo } from "@/store/auth/auth.slice";

const INITIAL_VALUES = {
  remember: true
};

const { Link } = Typography;
const { RESET_PASSWORD } = ROUTES

export const AuthSignInForm: FC<FormProps> = (props) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const [form] = Form.useForm<ISignIn>();

  const { t } = useTranslation();

  const onError = useFormErrors(form);

  const { mutate: signIn, isLoading } = useSignIn({ onError });

  const yupSync = useYupSync(signInSchema);

  useEffect(() => {
    dispatch(setAuthActivePageInfo({
      titleForm: t("sign-in.title"),
      linkForm: t("sign-up.btn-text"),
      googleTitle: t("auth-form.google-sign-in")
    }));
  }, [pathname])

  return (
    <Form
      form={form}
      onFinish={signIn}
      className={styles["sign-in-form"]}
      layout="vertical"
      name="sign-in"
      initialValues={INITIAL_VALUES}
      {...props}
    >
      <div className={styles["sign-in-inputs-wrapper"]}>
        <FormItem label="Email" name="email" required rules={[yupSync]}>
          <Input type="email" />
        </FormItem>

        <FormItem label={t("auth-form.password")} name="password" required rules={[yupSync]}>
          <Input type="password" />
        </FormItem>

        <Link className={styles["forgot-password"]} href={`/auth${RESET_PASSWORD}`}>
          {t("auth-form.forgot-password")}
        </Link>
      </div>

      <Button
        size="large"
        htmlType="submit"
        type="primary"
        disabled={isLoading}
        loading={isLoading}
      >
        {t("sign-in.btn-text")}
      </Button>
    </Form>
  );
};
