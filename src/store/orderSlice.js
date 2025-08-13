import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createOrderApi,
  getOrdersApi,
  getOrderItemsApi,
  cancelOrderApi,
  returnOrderItemApi
} from "./orderService";

// Create Order
export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (orderData, { getState }) => {
    const state = getState();
    const token = state.auth.token || localStorage.getItem("access");
    return await createOrderApi(orderData, token);
  }
);

// Get Orders
export const getOrders = createAsyncThunk(
  "orders/getOrders",
  async (_, { getState }) => {
    const state = getState();
    const userId = state.auth.user?.id;
    const token = state.auth.token || localStorage.getItem("access");
    return await getOrdersApi(userId, token);
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders.push(action.payload);
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default orderSlice.reducer;
