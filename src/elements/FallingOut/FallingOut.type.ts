import React from "react";

export interface IFallingOutProps {
  content: React.ReactNode;
  title?: string;
  handleClose?: () => void;
  headerAction?: React.ReactNode;
}
