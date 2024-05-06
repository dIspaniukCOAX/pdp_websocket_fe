import dayjs from "dayjs";
import { PhoneNumberUtil } from "google-libphonenumber";

import { ScrollTypes } from "@/constants/global";

import styles from "./general.module.scss";

export const handleScroll = (type: ScrollTypes) => {
  const mainBlock = document.querySelector("#main");
  if (mainBlock && type === ScrollTypes.ADD) {
    mainBlock.classList.add(styles["no-scroll"]);
  }
  if (mainBlock && type === ScrollTypes.REMOVE) {
    mainBlock.classList.remove(styles["no-scroll"]);
  }
};

export const getCountOfDays = ({ fromDate, toDate }: { fromDate: string; toDate: string }) => {
  const countOfHours = dayjs(toDate).diff(fromDate, "hours");
  const days = Math.ceil(countOfHours / 24);
  
return days;
};


export const checkPhoneValidation = (value: string) => {
  if (value.length < 5) {
    return false;
  }
  
  const phoneUtil = PhoneNumberUtil.getInstance();

  return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(value));
}
