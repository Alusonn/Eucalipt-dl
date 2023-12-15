import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    selectedSize: [],
    products: [],
    activeProduct: [],
    isLoading: true,
  },
  reducers: {
    onLoadProducts: (state, { payload = [] }) => {
      state.isLoading = false;
      state.products = payload;
    },
    onFilteredProducts: (state, { payload }) => {
      state.isLoading = false;
      state.selectedSize = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onLoadProducts, onFilteredProducts } = productsSlice.actions;
