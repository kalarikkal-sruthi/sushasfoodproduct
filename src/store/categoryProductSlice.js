// store/categoryProductSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/api";

// Async thunk to fetch all categories with their products
export const fetchCategoriesWithProducts = createAsyncThunk(
  "categoryProducts/fetchAllWithProducts",
  async () => {
    const res = await api.get("/categories-with-products");
    return res.data;
  }
);

const categoryProductSlice = createSlice({
  name: "categoryProducts", // This is the state key in Redux
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesWithProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategoriesWithProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCategoriesWithProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categoryProductSlice.reducer;
