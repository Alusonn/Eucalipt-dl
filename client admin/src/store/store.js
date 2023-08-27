import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./admin/adminSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})