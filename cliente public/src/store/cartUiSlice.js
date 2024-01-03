import { createSlice } from "@reduxjs/toolkit";

export const cartUiSlice = createSlice({
  name: "cartUi",
  initialState: {
    products: [],
    isOpen: false,
  },
  reducers: {
    onOpenCartUi: (state) => {
      state.isOpen = true;
    },
    onCloseCartUi: (state) => {
      state.isOpen = false;
    },
    onAddProduct: (state, { payload = {} }) => {
      state.products.push(payload);
    },
  },
});

export const { onOpenCartUi, onCloseCartUi, onAddProduct } =
  cartUiSlice.actions;
