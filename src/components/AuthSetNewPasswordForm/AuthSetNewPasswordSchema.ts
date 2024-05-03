import { object, ref, string } from "yup";

import { REGEXP } from "@/constants";

export const setNewPasswordSchema = object().shape({
  password: string().required().min(8).matches(REGEXP.PASSWORD),
  repeatPassword: string()
    .required()
    .oneOf([ref("password")])
});

export default setNewPasswordSchema;
