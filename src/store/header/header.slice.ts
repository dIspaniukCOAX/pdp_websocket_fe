import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HeaderSlice {
  navigation: {
    title: string;
    link: string;
  };
}

const initialState: HeaderSlice = {
  navigation: {
    title: "",
    link: ""
  }
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setHeaderNavigation: (state, action: PayloadAction<HeaderSlice>) => {
      state.navigation = action.payload.navigation;
    },
    clearHeaderStates: (state) => {
      state.navigation = {
        title: "",
        link: ""
      };
    }
  }
});

export const { setHeaderNavigation, clearHeaderStates } = headerSlice.actions;

export default headerSlice.reducer;
