import { configureStore } from "@reduxjs/toolkit";
import homeDataReducer from "./homeDataSlice";
import productReducer from "./ProductSlice";
import authReducer from './authSlice'

export const store = configureStore({
  reducer: {
    homeData: homeDataReducer,
    product: productReducer,
    auth:authReducer,
  },
});
