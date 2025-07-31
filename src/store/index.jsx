import { configureStore } from "@reduxjs/toolkit";
import homeDataReducer from "./homeDataSlice";

export const store = configureStore({
  reducer: {
    homeData: homeDataReducer,
  },
});
