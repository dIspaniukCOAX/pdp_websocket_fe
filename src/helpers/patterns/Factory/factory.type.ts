import { ReactNode } from "react";
import { InputProps } from "antd";

export interface IInputProps extends InputProps {
  type?: "default" | "password" | "number" | "textarea" | "email" | "phone";
  validated?: boolean;
  value?: string | number | undefined;
  prefix?: ReactNode | string | undefined;
}
