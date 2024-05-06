import React from "react";

export default function useOutsideClickDetect({
  ref,
  callback
}: {
  ref: React.RefObject<HTMLElement>;
  callback: () => void;
}) {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);
}
