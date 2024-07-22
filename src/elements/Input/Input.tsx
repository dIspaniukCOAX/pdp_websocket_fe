import { FC } from "react";
import { TextAreaProps } from "antd/es/input";

import { InputFactory } from "@/helpers";
import { IInputProps } from "@/helpers/patterns/Factory/factory.type";

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

  return <InputFactory
    type={type}
    validated={validated}
    className={className}
    value={value}
    hidden={hidden}
    onChange={onChange}
    disabled={disabled}
    {...rest}
  />;
};
