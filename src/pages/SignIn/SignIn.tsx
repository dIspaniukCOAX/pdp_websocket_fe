import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { AuthSignInForm } from "@/components";

import { ROUTES } from "@/constants";

export const LogIn = () => {
  const { t } = useTranslation();
  const { INDEX } = ROUTES;

  return (
    <div>
      <Link to={INDEX}>{t("home")}</Link>
      <AuthSignInForm />
    </div>
  );
};
