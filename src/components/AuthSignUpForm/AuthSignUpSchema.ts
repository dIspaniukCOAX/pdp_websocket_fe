import { t } from "i18next";
import { boolean, object, string } from "yup";

import { checkPhoneValidation, ValidEmail } from "@/helpers";

import { REGEXP } from "@/constants";

export const signUpSchema = object().shape({
  fullName: string().required(),
  email: string()
    .required()
    .test("email", (value) => ValidEmail(value)),
  phoneNumber: string()
    .required()
    .test("matches", (value) => {
      return checkPhoneValidation(value);
    }),
  password: string()
    .required()
    .min(8, t("auth-form.min-8-char"))
    .matches(REGEXP.PASSWORD, t("auth-form.numbers-and-chars")),
  remember: boolean()
});
