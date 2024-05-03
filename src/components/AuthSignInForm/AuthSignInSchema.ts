import { boolean, object, string } from "yup";

import { ValidEmail } from "@/helpers";

export const signInSchema = object().shape({
  email: string().required().test("email", (value) => ValidEmail(value)),
  password: string().required(),
  remember: boolean()
});
