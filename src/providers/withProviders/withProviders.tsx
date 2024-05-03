import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import dayjs from "dayjs";

import { AntdProvider } from "@/providers";

import { queryClient } from "../queryClient/queryClient";

import "../i18n/i18n";
import "dayjs/locale/uk";
import "dayjs/locale/en";
import { store } from "@/store";

export const withProviders = (Component: React.ComponentType): FC => {
  const AppProviders: FC = () => {
    const {
      i18n: { language }
    } = useTranslation();

    dayjs.locale(language);

    return (
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}>
        <BrowserRouter>
          <AntdProvider>
            <Provider store={store}>
              <QueryClientProvider client={queryClient}>
                <Component />
              </QueryClientProvider>
            </Provider>
          </AntdProvider>
        </BrowserRouter>
      </GoogleOAuthProvider>
    );
  };

  return AppProviders;
};
