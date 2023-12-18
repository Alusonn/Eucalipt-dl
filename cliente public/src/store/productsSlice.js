import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    selectedSize: null,
    products: [],
    activeProduct: [],
    isLoading: true,
  },
  reducers: {
    onLoadProducts: (state, { payload = [] }) => {
      state.isLoading = false;
      state.products = payload;
    },
    onSelectSize: (state, { payload }) => {
      state.isLoading = true;
      state.selectedSize = payload;
      state.products = []
    },
    onFilteredProducts: (state, { payload = [] }) => {
      state.isLoading = false;
      state.products = payload;
      state.activeProduct = payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { onLoadProducts, onFilteredProducts, onSelectSize } =
  productsSlice.actions;
