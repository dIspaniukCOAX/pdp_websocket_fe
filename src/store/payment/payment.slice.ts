import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PaymentSlice {
  isShowModal: boolean;
}

const initialState: PaymentSlice = {
  isShowModal: false
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setHandleShowModal: (state, action: PayloadAction<boolean>) => {
      state.isShowModal = action.payload;
    }
  }
});

export const { setHandleShowModal } = paymentSlice.actions;

export default paymentSlice.reducer;
