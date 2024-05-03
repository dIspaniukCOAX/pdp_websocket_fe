import { FormInstance } from "antd";

import { notification } from "@/elements";

import { ICustomAxiosError } from "@/types";

interface IFormFieldError {
  name: string;
  errors: string[];
}

export const useFormErrors = (formInstance: FormInstance) => {
  return ({ response }: ICustomAxiosError) => {
    const { errors, message } = response?.data || {};

    if (errors) {
      const formattedErrors: IFormFieldError[] = errors.map(({ name, error }) => ({
        name,
        errors: [error]
      }));

      formInstance.setFields(formattedErrors);

      return;
    }

    if (message || message !== "Bad Request") {
      notification.error(message);

      return;
    }

    notification.error();
  };
};
