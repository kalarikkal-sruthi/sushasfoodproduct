import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/api";

export const fetchExtraHarvestHome = createAsyncThunk(
  "extraHarvest/fetchHome",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/whatInFarms-most-cultivated-crops");
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const fetchExtraHarvestAll = createAsyncThunk(
  "extraHarvest/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/whatInFarms-most-cultivated-crops-view-all");
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const fetchExtraHarvestByCategory = createAsyncThunk(
  "extraHarvest/fetchByCategory",
  async (category, { rejectWithValue }) => {
    try {
      const res = await api.get(`/whatInFarms-Category?category=${category}`);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const fetchExtraHarvestSingle = createAsyncThunk(
  "extraHarvest/fetchSingle",
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.get(`/whatInFarms?id=${id}`);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const extraHarvestSlice = createSlice({
  name: "extraHarvest",
  initialState: {
    home: [],
    all: [],
    category: [],
    single: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchExtraHarvestHome.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchExtraHarvestHome.fulfilled, (state, action) => {
        state.loading = false;
        state.home = action.payload;
      })
      .addCase(fetchExtraHarvestHome.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchExtraHarvestAll.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchExtraHarvestAll.fulfilled, (state, action) => {
        state.loading = false;
        state.all = action.payload;
      })
      .addCase(fetchExtraHarvestAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchExtraHarvestByCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchExtraHarvestByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload;
      })
      .addCase(fetchExtraHarvestByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchExtraHarvestSingle.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchExtraHarvestSingle.fulfilled, (state, action) => {
        state.loading = false;
        state.single = action.payload;
      })
      .addCase(fetchExtraHarvestSingle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default extraHarvestSlice.reducer;
