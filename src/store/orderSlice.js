import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createOrderApi,
  getOrdersApi,
  getOrderItemsApi,
  cancelOrderApi,
  // returnOrderItemApi
} from "./orderService";

const getToken = (getState) => {
  return getState().auth.token || localStorage.getItem("access");
};

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
  "order/getOrderItems",
  async ({ orderId, token }, thunkAPI) => {
    try {
      return await getOrderItemsApi(orderId, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const cancelOrder = createAsyncThunk(
  "orders/cancelOrder",
  async ({ orderId, token }, { rejectWithValue }) => {
    try {
      const response = await cancelOrderApi(orderId, token);
      // return both the API data and the orderId
      return { orderId, data: response };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to cancel order"
      );
    }
  }
);

// --- Slice ---
const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    items: {},

    loading: {
      orders: false,
      items: false,
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
        state.error =
          action.payload || action.error?.message || "Something went wrong";
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
        state.items[orderId] = items; // ✅ store items under the orderId
      })
      .addCase(getOrderItems.rejected, (state, action) => {
        state.loading.items = false;
        state.error = action.payload;
      })

      .addCase(cancelOrder.pending, (state) => {
        state.loading.cancel = true;
        state.error = null;
      })
      .addCase(cancelOrder.fulfilled, (state, action) => {
        state.loading.cancel = false;

        const { orderId } = action.payload;

        // ✅ find and mark the cancelled order
        const orderIndex = state.orders.findIndex((o) => o.id === orderId);
        if (orderIndex !== -1) {
          state.orders[orderIndex] = {
            ...state.orders[orderIndex],
            status: "cancelled",
          };
        }
      })

      .addCase(cancelOrder.rejected, (state, action) => {
        state.loading.cancel = false;
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
