import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/api";

export const fetchHomeData = createAsyncThunk("home/fetchData", async () => {
  const response = await api.get("/homepage");
  return response.data;
});

const homeDataSlice = createSlice({
  name: "homeData",
  initialState: {
    data: "null",
    loading: "false",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.loading = "true";
        state.error = null;
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.loading = "false";
        state.data = action.payload;
      })
      .addCase(fetchHomeData.rejected, (state, action) => {
        state.loading = "false";
        state.error = action.error.message;
      });
  },
});

export default homeDataSlice.reducer;
