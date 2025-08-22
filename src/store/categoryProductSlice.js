// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { api } from "../utils/api";

// export const fetchCategoriesWithProducts = createAsyncThunk(
//   "categoryProducts/fetchAllWithProducts",
//   async () => {
//     const res = await api.get("/categories-with-products");
//     return res.data;
//   }
// );

// const categoryProductSlice = createSlice({
//   name: "categoryProducts",
//   initialState: {
//     data: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCategoriesWithProducts.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchCategoriesWithProducts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchCategoriesWithProducts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default categoryProductSlice.reducer;


// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { api } from "../utils/api";

// export const fetchCategoriesWithProducts = createAsyncThunk(
//   "categoryProducts/fetchAllWithProducts",
//   async () => {
//     const res = await api.get("/categories-with-products");
//     return res.data;
//   }
// );

// const categoryProductSlice = createSlice({
//   name: "categoryProducts",
//   initialState: {
//     data: [],
//     loading: false,
//     error: null,

//     // 🔹 START SEARCH FUNCTIONALITY (21 Aug 2025)
//     searchQuery: "",
//     searchResults: [],
//     // 🔹 END SEARCH FUNCTIONALITY (21 Aug 2025)
//   },
//   reducers: {
//     // 🔹 START SEARCH FUNCTIONALITY (21 Aug 2025)
//     setSearchQuery: (state, action) => {
//       state.searchQuery = action.payload;

//       if (!state.searchQuery) {
//         state.searchResults = [];
//         return;
//       }

//       const lowerQuery = state.searchQuery.toLowerCase();

//       // Flatten categories into product list & filter
//       state.searchResults = state.data.flatMap((cat) =>
//         cat.products
//           .filter(
//             (p) =>
//               p.product_name.toLowerCase().includes(lowerQuery) ||
//               cat.name.toLowerCase().includes(lowerQuery) // optional: search by category too
//           )
//           .map((p) => ({
//             ...p,
//             categoryName: cat.name,
//           }))
//       );
//     },
//     clearSearch: (state) => {
//       state.searchQuery = "";
//       state.searchResults = [];
//     },
//     // 🔹 END SEARCH FUNCTIONALITY (21 Aug 2025)
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCategoriesWithProducts.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchCategoriesWithProducts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchCategoriesWithProducts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// // 🔹 START SEARCH FUNCTIONALITY (21 Aug 2025)
// export const { setSearchQuery, clearSearch } = categoryProductSlice.actions;
// // 🔹 END SEARCH FUNCTIONALITY (21 Aug 2025)

// export default categoryProductSlice.reducer;







// 📌 categoryProductSlice.js
// Date: 21 Aug 2025 - Added search functionality

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
    data: [],       // categories with products
    loading: false,
    error: null,
    searchQuery: "", // 👈 added for search
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

// ✅ export actions
export const { setSearchQuery } = categoryProductSlice.actions;

// ✅ selector to filter products by name
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
