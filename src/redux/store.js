import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features";
import modalReducer from "./modalFeatures";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
