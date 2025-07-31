import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/api";


export const fetchProductById = createAsyncThunk(
  "product/fetchById",
  async (id) => {
    const response = await api.get(`/product/${id}`);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
     .addCase(fetchProductById.fulfilled, (state, action) => {
        console.log("✅ Product loaded");
        state.loading = false;
        state.data = action.payload;
        })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;