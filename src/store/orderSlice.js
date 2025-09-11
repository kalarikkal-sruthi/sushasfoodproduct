// src/features/orders/orderSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createOrderApi,
  getOrdersApi,
  getOrderItemsApi,
  cancelOrderApi,
  // returnOrderItemApi
} from "./orderService";

// --- Utility: get token from state or localStorage ---
const getToken = (getState) => {
  return getState().auth.token || localStorage.getItem("access");
};

// --- Create Order ---
export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (orderData, { getState, rejectWithValue }) => {
    try {
      const token = getToken(getState);
      return await createOrderApi(orderData, token);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// --- Get Orders ---
export const getOrders = createAsyncThunk(
  "orders/getOrders",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const userId = state.auth.user?.id;
      const token = getToken(getState);
      return await getOrdersApi(userId, token);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// --- Get Order Items ---
export const getOrderItems = createAsyncThunk(
  "orders/getOrderItems",
  async (orderId, { getState, rejectWithValue }) => {
    try {
      const token = getToken(getState);
      
      const items = await getOrderItemsApi(orderId, token);
      return { orderId, items };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Cancel order thunk
export const cancelOrder = createAsyncThunk(
  "orders/cancelOrder",
  async ({ orderId, token }, { rejectWithValue }) => {
    try {
      return await cancelOrderApi(orderId, token);
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// --- Slice ---
const orderSlice = createSlice({
  name: "orders",
  initialState: {
     orders: [],
  orderItems: {},
  loading: {
    items: false,
    orders: false,
    cancel: false,
  },
  error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // --- Create Order ---
      .addCase(createOrder.pending, (state) => {
        state.loading.create = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading.create = false;
        state.orders.push(action.payload);

        console.log("✅ New Order Created:", action.payload);
        console.log("📦 All Orders after push:", state.orders);
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading.create = false;
        state.error = action.payload || action.error?.message || "Something went wrong";
      
      })

      // --- Get Orders ---
      .addCase(getOrders.pending, (state) => {
        state.loading.fetch = true;
        state.error = null;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.loading.fetch = false;
        state.orders = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.loading.fetch = false;
        state.error = action.payload || action.error?.message;
      })

      // --- Get Order Items ---
      .addCase(getOrderItems.pending, (state) => {
        state.loading.items = true;
        state.error = null;
      })
      .addCase(getOrderItems.fulfilled, (state, action) => {
        state.loading.items = false;
        const { orderId, items } = action.payload;
        state.orderItems[orderId] = items;
      })
      .addCase(getOrderItems.rejected, (state, action) => {
        state.loading.items = false;
        state.error = action.payload || action.error?.message;
      })

      // 
       .addCase(cancelOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(cancelOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = state.orders.map((order) =>
          order.id === action.payload.id ? action.payload : order
        );
      })
      .addCase(cancelOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
