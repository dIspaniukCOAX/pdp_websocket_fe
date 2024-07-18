import { object, string } from "yup";

import { checkPhoneValidation } from "@/helpers";

export const userSchema = object().shape({
  fullName: string().required(),
  phoneNumber: string().test("matches", (value) => {
    if (!value) {
      return true;
    }

    return checkPhoneValidation(value);
  })
});
