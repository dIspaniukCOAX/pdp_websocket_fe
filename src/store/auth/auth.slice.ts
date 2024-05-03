import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  activePage: {
    titleForm: string;
    linkForm: string;
    googleTitle: string;
  };
  resetPassword: {
    isSuccess: boolean;
    userEmail: string;
  };
  setNewPassword: {
    isValid: boolean;
    isSuccess: boolean;
  };
}

const initialState: AuthState = {
  activePage: {
    titleForm: "",
    linkForm: "",
    googleTitle: ""
  },
  resetPassword: {
    isSuccess: false,
    userEmail: "",
  },
  setNewPassword: {
    isValid: false,
    isSuccess: false
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthActivePageInfo: (state, action: PayloadAction<AuthState["activePage"]>) => {
      state.activePage = action.payload;
    },
    setResetPasswordStatus: (state, action: PayloadAction<AuthState["resetPassword"]>) => {
      state.resetPassword = action.payload;
    },
    setNewPasswordStatus: (state, action: PayloadAction<boolean>) => {
      state.setNewPassword.isSuccess = action.payload;
    },
    setNewPasswordValid: (state, action: PayloadAction<boolean>) => {
      state.setNewPassword.isValid = action.payload;
    },
    clearAuthStates: (state) => {
      state.activePage = {
        titleForm: "",
        linkForm: "",
        googleTitle: ""
      };
      state.resetPassword = {
        isSuccess: false,
        userEmail: ""
      };
      state.setNewPassword = {
        isValid: false,
        isSuccess: false
      };
    }
  }
});

export const {
  setAuthActivePageInfo,
  setResetPasswordStatus,
  setNewPasswordStatus,
  setNewPasswordValid,
  clearAuthStates
} = authSlice.actions;

export default authSlice.reducer;
