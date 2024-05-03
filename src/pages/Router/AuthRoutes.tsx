import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { AuthLayout } from "@/layouts";

import { AuthSignInForm, AuthSignUpForm } from "@/components";

import { ROUTES } from "@/constants";

import { ResetPassword } from "../ResetPassword/ResetPassword";
import { SetNewPassword } from "../SetNewPassword/SetNewPassword";

const { SIGN_IN, SIGN_UP, RESET_PASSWORD, SET_NEW_PASSWORD } = ROUTES;

export const AuthRoutes: FC = () => {
  return (
    <AuthLayout>
      <Routes>
        <Route path={SIGN_IN} element={<AuthSignInForm />} />
        <Route path={SIGN_UP} element={<AuthSignUpForm />} />
        <Route path={RESET_PASSWORD} element={<ResetPassword />} />
        <Route path={SET_NEW_PASSWORD} element={<SetNewPassword />} />
      </Routes>
    </AuthLayout>
  );
};
