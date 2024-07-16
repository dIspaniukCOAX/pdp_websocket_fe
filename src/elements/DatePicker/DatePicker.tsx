import { FC } from "react";
import { useTranslation } from "react-i18next";
import { DatePicker as AntdDatePicker } from "antd";
import { DatePickerProps } from "antd/lib";
import en from "antd/locale/en_US";
import uk from "antd/locale/uk_UA";
import classNames from "classnames";

import styles from "./DatePicker.module.scss";

const DATE_PICKER_LOCALE = { en, uk };

export const DatePicker: FC<DatePickerProps> = ({
  className,
  format = "DD.MM.YYYY",
  ...rest
}) => {
  const {
    i18n: { language }
  } = useTranslation();

  const { DatePicker } = language === "en" ? DATE_PICKER_LOCALE.en : DATE_PICKER_LOCALE.uk;

  return (
    <AntdDatePicker
      locale={
        {
          ...DatePicker,
          lang: { ...DatePicker?.lang, monthFormat: "MMMM" }
        } as DatePickerProps["locale"]
      }
      className={classNames(styles["chat-date-picker"], className)}
      format={format}
      {...rest}
    />
  );
};
