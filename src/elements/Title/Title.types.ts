import { TitleProps } from "antd/es/typography/Title";

export interface ITitleProps extends Omit<TitleProps, "level"> {
  level?: TitleProps["level"] | 6;
}
