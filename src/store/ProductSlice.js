import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/api";

export const fetchProductById = createAsyncThunk(
  "product/fetchById",
  async (id) => {
    const response = await api.get(`/product/${id}`);
    return response.data;
  }
);

export const submitReview = createAsyncThunk(
  "product/submitReview",
  async (reviewData, { rejectWithValue }) => {
    try {
      const response = await api.post("/reviews", reviewData);
      return response.data;
    } catch (error) {
      console.error("❌ Review submit error:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(
          error.response.data.message || error.response.data
        );
      }
      return rejectWithValue("Something went wrong. Please try again.");
    }
  }
);
export const reviewProductById = createAsyncThunk(
  "product/reviewfetchById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/product-reviews`, {
        params: { product_id: productId },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: error.message }
      );
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: null,
    loading: false,
    error: null,
    reviewLoading: false,
    reviewError: null,
    reviewSuccess: false,
    reviews: [],
  },
  reducers: {
    resetReviewState: (state) => {
      state.reviewLoading = false;
      state.reviewError = null;
      state.reviewSuccess = false;
    },
  },
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
    builder
      .addCase(submitReview.pending, (state) => {
        state.reviewLoading = true;
        state.reviewError = null;
        state.reviewSuccess = false;
      })
      .addCase(submitReview.fulfilled, (state, action) => {
        console.log("✅ Review submitted:", action.payload);
        state.reviewLoading = false;
        state.reviewSuccess = true;
        if (state.data && state.data.reviews) {
          state.data.reviews.push(action.payload);
        }
      })
      .addCase(submitReview.rejected, (state, action) => {
        state.reviewLoading = false;
        if (action.payload && action.payload.errors) {
          const firstErrorField = Object.keys(action.payload.errors)[0];
          state.reviewError = action.payload.errors[firstErrorField][0];
        } else {
          state.reviewError = action.payload || action.error.message;
        }

        state.reviewSuccess = false;
      })
      .addCase(reviewProductById.pending, (state) => {
        state.reviewLoading = true;
        state.reviewError = null;
      })
      .addCase(reviewProductById.fulfilled, (state, action) => {
        console.log("✅ Reviews fetched:", action.payload);
        state.reviewLoading = false;
        state.reviews = action.payload;
      })
      .addCase(reviewProductById.rejected, (state, action) => {
        state.reviewLoading = false;
        state.reviewError = action.error.message;
      });
  },
});

export const { resetReviewState } = productSlice.actions;
export default productSlice.reducer;
