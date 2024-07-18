import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/auth.slice";
import chatReducer from "./chat/chat.slice";
import footerReducer from "./footer/footer.slice";
import headerReducer from "./header/header.slice";
import userReducer from "./user/user.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    header: headerReducer,
    user: userReducer,
    footer: footerReducer,
    chat: chatReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
