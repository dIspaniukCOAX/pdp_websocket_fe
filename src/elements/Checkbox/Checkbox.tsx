import { FC } from "react";
import { Checkbox as AntdCheckbox, CheckboxProps } from "antd";
import classNames from "classnames";

import styles from "./Checkbox.module.scss";

export const Checkbox: FC<CheckboxProps> = ({ children, className, ...rest }) => {
  const checkBoxClassName = classNames(styles.checkboxes, className);

  return (
    <AntdCheckbox className={checkBoxClassName} {...rest}>
      {children}
    </AntdCheckbox>
  );
};
