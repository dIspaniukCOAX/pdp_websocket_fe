import { FC } from "react";
import { Button, Dropdown } from "antd";
import { DropdownProps } from "antd/lib";

import { Icon } from "@/elements";

import styles from "./DropDown.module.scss";

export const DropDown: FC<DropdownProps> = ({ children, ...rest }) => {
  return (
    <Dropdown className={styles.dropDown} {...rest}>
      <Button
        type="link"
        className={styles["host-dropdown-button"]}
        onClick={(e) => e.preventDefault()}
      >
        {children}
        <Icon icon="dropdown" />
      </Button>
    </Dropdown>
  );
};
