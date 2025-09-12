import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/api"; // ✅ make sure api is exported correctly

// 1️⃣ Fetch most harvested crops for home page
export const fetchMostHarvestFull = createAsyncThunk(
  "mostHarvest/fetchHome",
  async (_, { rejectWithValue }) => {
    console.log(
      "[mostHarvestSlice] Fetching Home data (backend calls it 'Full')..."
    );
    try {
      const res = await api.get("/whatInFarms-Full");
      console.log("[mostHarvestSlice] Home data fetched:", res.data);
      return res.data.data;
    } catch (err) {
      console.error("[mostHarvestSlice] Error fetching Home data:", err);
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);


export const fetchMostHarvestViewAll = createAsyncThunk(
  "mostHarvest/fetchViewAll",
  async (_, { rejectWithValue }) => {
    console.log("[mostHarvestSlice] Fetching View All data...");
    try {
      const res = await api.get("/whatInFarms-viewall");
      console.log("[mostHarvestSlice] View All data fetched:", res.data);
      return res.data.data;
    } catch (err) {
      console.error("[mostHarvestSlice] Error fetching View All:", err);
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// 3️⃣ Fetch detail by ID
export const fetchMostHarvestDetail = createAsyncThunk(
  "mostHarvest/fetchDetail",
  async (id, { rejectWithValue }) => {
    console.log(`[mostHarvestSlice] Fetching Detail for ID: ${id}...`);
    try {
      const res = await api.get(`/whatInFarms?id=${id}`);
      console.log("[mostHarvestSlice] Detail data fetched:", res.data);
      return res.data.data;
    } catch (err) {
      console.error("[mostHarvestSlice] Error fetching Detail:", err);
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const mostHarvestSlice = createSlice({
  name: "mostHarvest",
  initialState: {
    homeData: [], 
    allData: [],
    detailData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
     
      .addCase(fetchMostHarvestFull.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMostHarvestFull.fulfilled, (state, action) => {
        state.loading = false;
        state.homeData = action.payload; 
      })
      .addCase(fetchMostHarvestFull.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      
      .addCase(fetchMostHarvestViewAll.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMostHarvestViewAll.fulfilled, (state, action) => {
        state.loading = false;
        state.allData = action.payload;
      })
      .addCase(fetchMostHarvestViewAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

     
      .addCase(fetchMostHarvestDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMostHarvestDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.detailData = action.payload;
      })
      .addCase(fetchMostHarvestDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default mostHarvestSlice.reducer;
