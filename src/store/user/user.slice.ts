import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "@/types";

export interface UserSlice {
  main: IUser | null;
}

const initialState: UserSlice = {
  main: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInformation: (state, action: PayloadAction<IUser>) => {
      state.main = action.payload;
    },
    clearUserInfo: (state) => {
      state.main = null;
    }
  }
});

export const { setUserInformation, clearUserInfo } = userSlice.actions;

export default userSlice.reducer;
