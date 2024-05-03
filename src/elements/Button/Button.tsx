import { FC, MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { Button as AntdButton } from "antd";
import { ButtonProps } from "antd/lib";
import classNames from "classnames";

import { IButtonProps } from "./Button.types";

import styles from "./Button.module.scss";

export const Button: FC<IButtonProps> = ({
  children,
  type = "default",
  size = "middle",
  danger,
  icon,
  reverse,
  className,
  fullWidth,
  to,
  onClick,
  ...rest
}) => {
  const navigate = useNavigate();

  const btnClassName = classNames(
    styles["host-btn"],
    styles[`host-btn__${size}`],
    styles[`host-btn__${type}`],
    className,
    {
      [styles.danger]: danger,
      [styles["btn-with-icon"]]: icon,
      [styles.reverse]: reverse,
      [styles.fullWidth]: fullWidth
    }
  );

  const handleClick: MouseEventHandler<HTMLElement> = (e) => {
    if (to) {
      navigate(to);

      return;
    }

    onClick && onClick(e);
  };

  return (
    <AntdButton
      onClick={handleClick}
      className={btnClassName}
      type={type as ButtonProps["type"]}
      danger={danger}
      icon={icon}
      {...rest}
    >
      {children}
    </AntdButton>
  );
};
