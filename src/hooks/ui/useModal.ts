import { useState } from "react";

export const useModal = (initialValue?: boolean) => {
  const [isOpen, setIsOpen] = useState(initialValue || false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const setOpen = () => {
    setIsOpen(true);
  };

  const setClose = () => {
    setIsOpen(false);
  };

  return { isOpen, toggleOpen, setOpen, setClose };
};
