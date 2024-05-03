import { FC } from "react";
import { Typography } from "antd/";
import classNames from "classnames";

import { ITitleProps } from "./Title.types";

import styles from "./Title.module.scss";

export const Title: FC<ITitleProps> = ({ level = 1, children, className, ...rest }) => {
  const antdTitleLevel = level === 6 ? 5 : level;
  const titleClassNames = classNames(styles.title, styles[`title-${level}`], className);

  return (
    <Typography.Title className={titleClassNames} level={antdTitleLevel} {...rest}>
      {children}
    </Typography.Title>
  );
};
