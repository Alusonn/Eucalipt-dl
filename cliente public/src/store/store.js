import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cartUiSlice } from "./cartUiSlice";

export const store = configureStore({
  reducer: {
    cartUiSlice: cartUiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
