import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "@/types";

export interface ChatSlice {
  activeUser: IUser | null;
}

const initialState: ChatSlice = {
    activeUser: null
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setActiveUserChat: (state, action: PayloadAction<IUser>) => {
      state.activeUser = action.payload;
    },
    clearChatInfo: (state) => {
      state.activeUser = null;
    }
  }
});

export const { setActiveUserChat, clearChatInfo } = chatSlice.actions;

export default chatSlice.reducer;
