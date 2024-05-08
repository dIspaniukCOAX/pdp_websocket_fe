import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IBike } from "@/types/bike/bike.type";

export interface PaymentSlice {
  isShowModal: boolean;
  activeBike: IBike | null;
}

const initialState: PaymentSlice = {
  isShowModal: false,
  activeBike: null
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setHandleShowModal: (state, action: PayloadAction<boolean>) => {
      state.isShowModal = action.payload;
    },
    setActiveBike: (state, action: PayloadAction<IBike | null>) => {
      state.activeBike = action.payload;
    }
  }
});

export const { setHandleShowModal, setActiveBike } = paymentSlice.actions;

export default paymentSlice.reducer;
