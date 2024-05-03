import { REGEXP } from "@/constants";

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const ValidEmail = (email: string): boolean => {
  return REGEXP.EMAIL.test(email);
}
