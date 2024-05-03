import { FC } from "react";

import { Button, Icon } from "@/elements";

import { useGoogleAuth } from "@/react-queries";

import { IGoogleAuthProps } from "./GoogleAuth.types";

import styles from "./GoogleAuth.module.scss";

export const GoogleAuth: FC<IGoogleAuthProps> = ({ title }) => {
  const googleLogin = useGoogleAuth();

  return (
    <Button
      size="large"
      ghost
      fullWidth
      icon={<Icon icon="google" />}
      onClick={googleLogin}
      className={styles["form-auth-google-button"]}
    >
      {title}
    </Button>
  );
};
