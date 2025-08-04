import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/api";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (crendentials) => {
    const res = await api.post("/login", crendentials);
    console.log("Login API response.data:", res);
    return {
      token: res.data,
      // user: res.data.user,
    };
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (formData) => {
    const res = await api.post("/customer.store", formData);
    return res.data;
  }
);

export const fetchUser = createAsyncThunk("auth/fetchUser", async (userId) => {
  const res = await api.post("/customer.details", { user_id: userId });
  return res.data;
});

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (updateData) => {
    const res = await api.post("/customer.update", updateData);
    return res.data;
  }
);

export const getUser = createAsyncThunk(
  "auth/getUser",

  async (_, {getState}) => {
    const state = getState();
    const token = state.auth.token || localStorage.getItem("access");
    const response = await api.get("/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("user", response.data);

    return response.data;
  }
);
