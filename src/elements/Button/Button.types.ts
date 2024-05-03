import { LinkProps } from "react-router-dom";
import { ButtonProps } from "antd";

export interface IButtonProps extends Omit<ButtonProps, "type"> {
  type?: ButtonProps["type"] | "icon" | "ghost";
  reverse?: boolean;
  fullWidth?: boolean;
  to?: LinkProps["to"];
}
