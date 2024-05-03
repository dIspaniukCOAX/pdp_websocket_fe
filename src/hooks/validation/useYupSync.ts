import { useTranslation } from "react-i18next";
import { Rule } from "antd/es/form";
import { isArray, set } from "lodash";
import { AnyObject, Maybe, ObjectSchema, ValidationError } from "yup";

interface IValidateRule {
  field: string;
}

export const useYupSync = <T extends AnyObject>(
  schema: ObjectSchema<Maybe<AnyObject>>,
  formValues: (() => T) | undefined = undefined
) => {
  const { t } = useTranslation();

  const yupSync: Rule = {
    async validator(rule: Rule, value: string) {
      const { field } = rule as IValidateRule;
      const validationField = isArray(field) ? field.join(".") : field;

      try {
        const obj = {};
        set(obj, validationField, value);

        if (formValues) {
          return await schema.validateSyncAt(validationField, formValues());
        }

        await schema.validateSyncAt(validationField, obj);
      } catch (error: unknown) {
        if (error instanceof ValidationError) {
          throw new Error(t(`error.${validationField}.${error.type}`));
        }
      }
    }
  };

  return yupSync;
};
