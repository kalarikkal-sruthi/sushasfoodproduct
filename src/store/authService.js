import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/api";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (crendentials) => {
    const res = await api.post("/login", crendentials);
    // console.log("Login API response.data:", res);
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
  async (_, { getState }) => {
    const state = getState();
    const storedToken = state.auth.token || localStorage.getItem("access");

    // Extract only the part after "|"
    const token = storedToken?.includes("|")
      ? storedToken.split("|")[1]
      : storedToken;

    const response = await api.get("/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
console.log("response",response.data)
    return response.data; // { id, name, email, ... }
    
    
  }
);



export const getAddresses = createAsyncThunk(
  "auth/getAddresses",
  async (_, { getState }) => {
    const state = getState();
    const storedToken = state.auth.token || localStorage.getItem("access");

    const token = storedToken?.includes("|")
      ? storedToken.split("|")[1]
      : storedToken;

    const response = await api.get("/addresses", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data.data; // array of addresses
  }
)


// ⬇⬇⬇ SID CHANGE 1: Create a new address
export const createAddress = createAsyncThunk(
  "auth/createAddress",
  async (addressData, { getState }) => {
    const state = getState();
    const storedToken = state.auth.token || localStorage.getItem("access");

    const token = storedToken?.includes("|")
      ? storedToken.split("|")[1]
      : storedToken;

    const response = await api.post("/addresses", addressData, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data; // return created address object
  }
);

// 🆕 sid change: updateAddress uses flat payload with id + fields
export const updateAddress = createAsyncThunk(
  "auth/updateAddress",
  async (addressData, { getState }) => {
    const state = getState();
    const storedToken = state.auth.token || localStorage.getItem("access");

    const token = storedToken?.includes("|")
      ? storedToken.split("|")[1]
      : storedToken;

    const response = await api.put(`/addresses/${addressData.id}`, addressData, {
      headers: { Authorization: `Bearer ${token}` },
    });

    // ✅ Only return the updated address object
    return response.data.data;
  }
);


