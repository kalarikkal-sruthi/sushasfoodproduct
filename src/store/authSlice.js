import { createSlice } from "@reduxjs/toolkit";

import { loginUser, registerUser, fetchUser, updateUser, getUser } from "./authService";

const initialState = {
  user: null,
  token: localStorage.getItem("access") || null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      // state.user = null;
      state.token = null;
      localStorage.removeItem("access");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("action.payload:", action.payload);
        state.token = action.payload.token;
        // state.user = action.payload.user;
        localStorage.setItem("access", action.payload.token);
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(registerUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        localStorage.setItem("access", action.payload.token);
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })

      .addCase(getUser.fulfilled,(state,action)=>{
         state.user = action.payload;
      })
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
