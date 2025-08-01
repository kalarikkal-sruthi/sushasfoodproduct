import { configureStore,  } from "@reduxjs/toolkit";
import homeDataReducer from "./homeDataSlice";
import productReducer from "./ProductSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    homeData: homeDataReducer,
    product: productReducer,
    cart: cartReducer,
    
    
  },
});
