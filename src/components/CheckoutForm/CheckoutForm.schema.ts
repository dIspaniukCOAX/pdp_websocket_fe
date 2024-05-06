import { number, object } from "yup";

export const checkInSchema = object().shape({
  amount: number().required().min(1),
});
