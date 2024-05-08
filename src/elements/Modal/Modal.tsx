import { FC } from "react";
import { Modal as AntdModal, ModalProps } from "antd";

import styles from "./Modal.module.scss";

export const Modal: FC<ModalProps> = ({ children, ...rest }) => {
  return (
    <AntdModal {...rest}
    className={styles.container}
    data-testid="modal">
      {children}
    </AntdModal>
  );
};
