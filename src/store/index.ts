import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/auth.slice";
import footerReducer from "./footer/footer.slice";
import headerReducer from "./header/header.slice";
import paymentReducer from "./payment/payment.slice";
import userReducer from "./user/user.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    header: headerReducer,
    user: userReducer,
    footer: footerReducer,
    payment: paymentReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
