import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { MainLayout } from "@/layouts";

import { ROUTES } from "@/constants";

import { ActiveRent } from "../ActiveRent/ActiveRent";
import { Dashboard } from "../Dashboard/Dashboard";
import { Profile } from "../Profile/Profile";

const { DASHBOARD, PROFILE, ACTIVE_RENT } = ROUTES;

export const MainRoutes: FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path={DASHBOARD} element={<Dashboard />} />
        <Route path={PROFILE} element={<Profile />} />
        <Route path={ACTIVE_RENT} element={<ActiveRent />} />
      </Routes>
    </MainLayout>
  );
};
