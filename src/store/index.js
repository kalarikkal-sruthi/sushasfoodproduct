import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "../store/authSlice";
import homeDataReducer from "../store/homeDataSlice";
import productReducer from "../store/ProductSlice";
import cartReducer from "../store/cartSlice";
import categoryProductReducer from "../store/categoryProductSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  homeData: homeDataReducer,
  product: productReducer,
  cart: cartReducer,
  categoryProducts: categoryProductReducer,
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
