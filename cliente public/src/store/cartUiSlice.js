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
    onDeleteProduct: (state, { payload }) => {
      state.products = state.products.filter((product) => product._id !== payload)
    }
  },
});

export const { onOpenCartUi, onCloseCartUi, onAddProduct, onDeleteProduct } =
  cartUiSlice.actions;
