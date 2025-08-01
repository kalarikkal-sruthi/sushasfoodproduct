import { configureStore,  } from "@reduxjs/toolkit";
import homeDataReducer from "./homeDataSlice";
import productReducer from "./ProductSlice";

import authReducer from './authSlice'

import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    homeData: homeDataReducer,
    product: productReducer,
    auth:authReducer,

    cart: cartReducer,
    

  },
});
