import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    activeProduct: [],
    isLoading: true,
  },
  reducers: {
    onLoadProducts: (state, { payload = [] }) => {
      state.isLoading = false;
      state.products = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onLoadProducts } = productsSlice.actions;
