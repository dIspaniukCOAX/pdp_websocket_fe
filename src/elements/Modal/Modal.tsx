import { FC } from "react";
import { Modal as AntdModal, ModalProps } from "antd";

export const Modal: FC<ModalProps> = ({ children, ...rest }) => {
  return (
    <AntdModal {...rest} data-testid="modal">
      {children}
    </AntdModal>
  );
};
