import { FC } from "react";
import { Drawer as AntdDrawer } from "antd";
import { DrawerProps } from "antd/lib";
import classNames from "classnames";

import styles from "./Drawer.module.scss";

export const Drawer: FC<DrawerProps> = ({ children, className, ...rest }) => {
  const drawerClassName = classNames(styles["chat-drawer"], className);

  return (
    <AntdDrawer className={drawerClassName} {...rest}>
      <div className={styles["chat-drawer-content"]}>{children}</div>
    </AntdDrawer>
  );
};
