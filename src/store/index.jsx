import { configureStore } from "@reduxjs/toolkit";
import homeDataReducer from "./homeDataSlice";
import productReducer from "./ProductSlice";

export const store = configureStore({
  reducer: {
    homeData: homeDataReducer,
    product: productReducer,
  },
});
