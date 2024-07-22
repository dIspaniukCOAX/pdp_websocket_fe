import { ChangeEvent, FC } from "react";
import { Input as AntdInput } from "antd";
import { TextAreaProps } from "antd/es/input";
import classNames from "classnames";

import { AntPhone } from "@/elements/PhoneField/PhoneField";

import styles from "./factory.module.scss";

import { IInputProps } from "./factory.type";

const InputPassword = ({
  disabled,
  inputClassName,
  value,
  onChange,
  ...rest
}: IInputProps & { inputClassName: string }) => {
  return (
    <AntdInput.Password
      disabled={disabled}
      className={inputClassName}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

const InputPhone = ({ onChange, value: valueInput, disabled, ...rest }: IInputProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { size, ...restProps } = rest;

  console.log("valueInput :>> ", valueInput);

  const handleOnAccept = (value: string) => {
    if (onChange) {
      onChange({ target: { value } } as ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <AntPhone
      value={valueInput as string}
      onChange={handleOnAccept}
      disabled={disabled}
      {...restProps}
    />
  );
};

const InputNumber = ({
  onChange,
  value: valueInput,
  inputClassName,
  disabled,
  ...rest
}: IInputProps & { inputClassName: string }) => {
  return (
    <AntdInput
      disabled={disabled}
      className={inputClassName}
      value={valueInput}
      onChange={onChange}
      type="number"
      onWheel={(e) => e.currentTarget.blur()}
      {...rest}
    />
  );
};

const InputTextArea = ({
  value: valueInput,
  inputClassName,
  disabled,
  ...rest
}: TextAreaProps & { inputClassName: string }) => {
  return (
    <AntdInput.TextArea
      disabled={disabled}
      className={inputClassName}
      value={valueInput}
      {...rest}
    />
  );
};

export const InputFactory: FC<IInputProps & TextAreaProps> = ({
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

  switch (type) {
    case "password":
      return (
        <InputPassword
          disabled={disabled}
          value={value}
          onChange={onChange}
          inputClassName={inputClassName}
          {...rest}
        />
      );
    case "phone":
      return <InputPhone disabled={disabled} value={value} onChange={onChange} {...rest} />;
    case "number":
      return (
        <InputNumber
          disabled={disabled}
          value={value}
          onChange={onChange}
          inputClassName={inputClassName}
          {...rest}
        />
      );
    case "textarea":
      return (
        <InputTextArea
          value={value}
          onChange={onChange}
          inputClassName={inputClassName}
          {...rest}
        />
      );
    default:
      return (
        <AntdInput
          disabled={disabled}
          className={inputClassName}
          onChange={onChange}
          value={value}
          prefix={rest.prefix ?? ""}
          {...rest}
        />
      );
  }
};
