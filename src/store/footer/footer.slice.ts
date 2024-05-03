import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IFooterContent } from "@/types/footer/footer.type";

export interface FooterSlice {
  footerContent: null | IFooterContent,
  priceSetup: {
    isSubmitData: boolean | null;
  }
}

const initialState: FooterSlice = {
  footerContent: null,
  priceSetup: {
    isSubmitData: null
  }
};

export const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {
    setFooterContent: (state, action: PayloadAction<null | IFooterContent>) => {
      state.footerContent = action.payload;
    },
    setHandleSubmitData: (state, action: PayloadAction<boolean>) => {
      state.priceSetup.isSubmitData = action.payload;
    }
  }
});

export const { setFooterContent, setHandleSubmitData } = footerSlice.actions;

export default footerSlice.reducer;
