import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/api";

export const fetchWhatWillData = createAsyncThunk(
  "whatwill/fetchData",
  async () => {
    const response = await api.get("/whatInFarms-Full");
    return response.data.data;
  }
);
export const fetchWhatWillDataById = createAsyncThunk(
  "whatwill/fetchById",
  async (id) => {
    const response = await api.get(`/whatInFarms?id=${id}`);
    return response.data.data;
  }
);

const whatwillDataSlice = createSlice({
  name: "whatwillData",
  initialState: {
    data: null,
    selectedItem: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWhatWillData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWhatWillData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWhatWillData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchWhatWillDataById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWhatWillDataById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedItem = action.payload;
      })
      .addCase(fetchWhatWillDataById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default whatwillDataSlice.reducer;
