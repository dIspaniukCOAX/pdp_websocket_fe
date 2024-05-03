import { FC } from "react";
import AntdParagraph, { ParagraphProps } from "antd/es/typography/Paragraph";
import classNames from "classnames";

import styles from "./Paragraph.module.scss";

interface IParagraphProps extends ParagraphProps {
  fontSize?: number;
}

export const Paragraph: FC<IParagraphProps> = ({ children, className, fontSize, ...rest }) => {
  const paragraphClassNames = classNames(styles.paragraph, className);

  return (
    <AntdParagraph
      className={paragraphClassNames}
      {...(fontSize && { style: { fontSize } })}
      {...rest}
    >
      {children}
    </AntdParagraph>
  );
};
