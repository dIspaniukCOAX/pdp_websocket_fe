import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { AuthSignUpForm } from "@/components/AuthSignUpForm/AuthSignUpForm";

import { ROUTES } from "@/constants";

const { INDEX } = ROUTES;

export const SignUp = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Link to={INDEX}>{t("home")}</Link>

      <AuthSignUpForm />
    </div>
  );
};
