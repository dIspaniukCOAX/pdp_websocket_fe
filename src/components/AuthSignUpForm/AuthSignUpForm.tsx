import { FC, useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Form, FormProps } from "antd";

import { Button, Checkbox, FormItem, Input, notification } from "@/elements";

import { useSignUp } from "@/react-queries";

import { useYupSync } from "@/hooks";
import { useFormErrors } from "@/hooks/form/useFormErrors";

import { ISignUpForm } from "@/types";

import styles from "./AuthSignUpForm.module.scss";

import { signUpSchema } from "./AuthSignUpSchema";

import { setAuthActivePageInfo } from "@/store/auth/auth.slice";

const INITIAL_VALUES = {
  agreement: true
};

export const AuthSignUpForm: FC<FormProps> = (props) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const [form] = Form.useForm<ISignUpForm>();

  const onError = useFormErrors(form);

  const { mutate: signUp, isLoading } = useSignUp({ onError });

  const yupSync = useYupSync(signUpSchema);

  const onFinish = ({ agreement, ...values }: ISignUpForm) => {
    if (!agreement) {
      notification.error(
        <span className={styles["error-message"]}>{t("auth-form.agreement-error")}</span>
      );

      return;
    }
    signUp(values);
  };

  useEffect(() => {
    dispatch(setAuthActivePageInfo({
      titleForm: t("sign-up"),
      linkForm: t("sign-in.title"),
      googleTitle: t("auth-form.google-sign-up")
    }));
  }, [pathname])

  return (
    <Form
      name="sign-up"
      className={styles["sign-up-form"]}
      form={form}
      onFinish={onFinish}
      initialValues={INITIAL_VALUES}
      layout="vertical"
      {...props}
    >
      <div className={styles["sign-up-inputs-wrapper"]}>
        <FormItem name="fullName" label={t("auth-form.name")} required rules={[yupSync]}>
          <Input placeholder={t("auth-form.fullName-placeholder")} />
        </FormItem>

        <FormItem name="email" label="Email" required rules={[yupSync]}>
          <Input placeholder={t("auth-form.email-placeholder")} />
        </FormItem>

        <FormItem name="phoneNumber" label={t("auth-form.phone")} required rules={[yupSync]}>
          <Input
            type="phone"
            placeholder={t("auth-form.phoneNumber-placeholder")}
          />
        </FormItem>

        <FormItem name="password" label={t("auth-form.password")} required rules={[yupSync]}>
          <Input type="password" placeholder={t("auth-form.password-placeholder")} />
        </FormItem>

        <FormItem name="agreement" valuePropName="checked">
          <Checkbox className={styles.conditionContent} defaultChecked>
            <Trans
              i18nKey={"auth-form.agreement"}
              values={{
                privacy: t("auth-form.privacy"),
                conditionUse: t("auth-form.conditionUse")
              }}
              components={{ a: <a className={styles.conditionLink} href="#" /> }}
            />
          </Checkbox>
        </FormItem>
      </div>

      <Button
        size="large"
        htmlType="submit"
        type="primary"
        disabled={isLoading}
        loading={isLoading}
        className={styles["sign-up-btn"]}
      >
        {t("sign-up.btn-text")}
      </Button>
    </Form>
  );
};
