import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { getJWTToken } from "@/helpers";

import { ROUTES } from "@/constants";

const { AUTH, SIGN_IN } = ROUTES;

export const PrivateRoutes: FC = () => {
  const token = getJWTToken();

  return token ? <Outlet /> : <Navigate to={`${AUTH}${SIGN_IN}`} replace />;
};
