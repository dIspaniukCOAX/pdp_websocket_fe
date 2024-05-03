import dayjs from "dayjs";
import { PhoneNumberUtil } from "google-libphonenumber";
import i18next from "i18next";

import { BookingStatus } from "@/constants/bookings/bookings.constant";
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

export const getHistoryIconColor = (changeType: string) => {
  switch (changeType) {
    case BookingStatus.CREATED:
      return "grey";
    default:
      return "blue";
  }
};

export const checkPhoneValidation = (value: string) => {
  if (value.length < 5) {
    return false;
  }
  
  const phoneUtil = PhoneNumberUtil.getInstance();

  return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(value));
}

export const getHistoryDescription = (changeType: string) => {
  switch (changeType) {
    case BookingStatus.CREATED:
      return i18next.t("booking.history.created");
    case BookingStatus.APPROVED:
      return i18next.t("booking.history.approved");
    case BookingStatus.REJECTED:
      return i18next.t("booking.history.rejected");
    case BookingStatus.CANCELED:
      return i18next.t("booking.history.canceled");
    case BookingStatus.UDPATED:
      return i18next.t("booking.history.updated");
    default:
      return "Unknown";
  }
};
