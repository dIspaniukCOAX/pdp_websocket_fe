import { object, string } from "yup";

import { ValidEmail } from "@/helpers";


export const resetPasswordSchema = object().shape({
  email: string().required().test("email", (value) => ValidEmail(value)),
});
