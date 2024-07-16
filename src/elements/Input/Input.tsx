import { ChangeEvent, FC } from "react";
import { Input as AntdInput } from "antd";
import { TextAreaProps } from "antd/es/input";
import classNames from "classnames";

import { IInputProps } from "./Input.types";

import styles from "./Input.module.scss";

import { AntPhone } from "../PhoneField/PhoneField";

export const Input: FC<IInputProps & TextAreaProps> = ({
  type,
  validated = false,
  className,
  value,
  hidden,
  onChange,
  disabled,
  ...rest
}) => {
  const inputClassName = classNames(styles[`chat-inp-${type}`], className, {
    [styles["chat-inp-def"]]: !type,
    [styles["chat-inp-validate"]]: validated === true,
    [styles["chat-inp-number"]]: type === "number",
    [styles["chat-inp-hidden"]]: hidden
  });

  if (type === "phone") {
    //eslint-disable-next-line
    const { size, ...restProps } = rest;

    const handleOnAccept = (value: string) => {
      if (onChange) {
        onChange({ target: { value } } as ChangeEvent<HTMLInputElement>);
      }
    }

    return (
      <AntPhone
        value={value as string}
        onChange={handleOnAccept}
        disabled={disabled}
        {...restProps}
      />
    );
  }

  if (type === "password") {
    return (
      <AntdInput.Password disabled={disabled} className={inputClassName} value={value} onChange={onChange} {...rest} />
    );
  }

  if (type === "number") {
    return (
      <AntdInput
        disabled={disabled}
        className={inputClassName}
        value={value}
        onChange={onChange}
        type="number"
        onWheel={(e) => e.currentTarget.blur()}
        {...rest}
      />
    );
  }

  if (type === "textarea") {
    return <AntdInput.TextArea disabled={disabled} className={inputClassName} value={value} {...rest} />;
  }

  return <AntdInput disabled={disabled} className={inputClassName} onChange={onChange} value={value} {...rest} />;
};
