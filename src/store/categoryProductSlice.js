import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/api";

export const fetchCategoriesWithProducts = createAsyncThunk(
  "categoryProducts/fetchAllWithProducts",
  async () => {
    const res = await api.get("/categories-with-products");
    return res.data;
  }
);

const categoryProductSlice = createSlice({
  name: "categoryProducts",
  initialState: {
    data: [],
    loading: false,
    error: null,
    searchQuery: "",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
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

export const { setSearchQuery } = categoryProductSlice.actions;

export const selectFilteredProducts = (query) => (state) => {
  if (!query) return [];

  const lowerQuery = query.toLowerCase();
  let results = [];

  state.categoryProducts.data.forEach((category) => {
    category.products?.forEach((product) => {
      if (product.product_name.toLowerCase().includes(lowerQuery)) {
        results.push({
          ...product,
          categoryName: category.name,
        });
      }
    });
  });

  return results;
};

export default categoryProductSlice.reducer;
