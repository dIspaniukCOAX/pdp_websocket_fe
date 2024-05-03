import { FC } from "react";
import { Form } from "antd";
import classNames from "classnames";

import { IFormItemProps } from "./FormItem.types";

import styles from "./FormItem.module.scss";

export const FormItem: FC<IFormItemProps> = ({ children, className, value, preview, ...rest }) => {
  return (
    <Form.Item className={classNames(styles["host-form-item"], className)} {...rest}>
      {preview ? value || "-" : children}
    </Form.Item>
  );
};
