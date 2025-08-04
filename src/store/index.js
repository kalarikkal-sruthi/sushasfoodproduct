import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./authSlice";
import homeDataReducer from "./homeDataSlice";
import productReducer from "./ProductSlice";
import cartReducer from "./cartSlice";
import categoryProductReducer from "./categoryProductSlice";
import whatwillDataReducer from "./whatwillDataSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  homeData: homeDataReducer,
  product: productReducer,
  cart: cartReducer,
  categoryProducts: categoryProductReducer,
  whatwillData: whatwillDataReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
