import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { ROUTES } from "@/constants";

import { AuthRoutes } from "./AuthRoutes";
import { MainRoutes } from "./MainRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

const { DASHBOARD, AUTH } = ROUTES;

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={DASHBOARD} replace />} />

      <Route element={<PrivateRoutes />}>
        <Route path="*" element={<MainRoutes />} />
      </Route>
      <Route path={`${AUTH}/*`} element={<AuthRoutes />} />
    </Routes>
  );
};
