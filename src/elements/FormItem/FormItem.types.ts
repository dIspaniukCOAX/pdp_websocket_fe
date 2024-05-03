import { FormItemProps } from "antd";

export interface IFormItemProps extends FormItemProps {
  preview?: boolean;
  value?: string;
}
