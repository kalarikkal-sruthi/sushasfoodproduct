import { createSlice } from "@reduxjs/toolkit";
import {
    loginUser,
    registerUser, 
    fetchUser,
    updateUser, 
    getUser,
    getAddresses,
    createAddress, 
    updateAddress,  
    deleteAddress
     } from "./authService";

const initialState = {
  user: null,
  addresses: [],
  token: localStorage.getItem("access") || null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("access");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("action.payload:", action.payload);
        const token = action.payload.token || action.payload; // handles both string and object
        state.token = token;
        state.user = action.payload.user || null;
        localStorage.setItem("access", token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        const token = action.payload.token || action.payload;
        state.token = token;
        localStorage.setItem("access", token);
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        console.log("getUser payload:", action.payload); // <-- see API user data
        state.user = action.payload.user || action.payload;
      })
      .addCase(getAddresses.fulfilled, (state, action) => {
        console.log("getAddresses payload:", action.payload); // <-- see API address data
        state.addresses = action.payload;
      })
       // ⬇⬇⬇ SID CHANGE 3: Add new address to store
      .addCase(createAddress.fulfilled, (state, action) => {
        state.addresses.push(action.payload);
      })
      // ⬇⬇⬇ SID CHANGE 4: Update address in store
       .addCase(updateAddress.fulfilled, (state, action) => {
        const updated = action.payload; // already the address object
        state.addresses = state.addresses.map(addr =>
          addr.id === updated.id ? updated : addr
        );
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        const deletedId = action.payload;
        state.addresses = state.addresses.filter(addr => addr.id !== deletedId);
      });



  
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
