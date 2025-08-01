import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/api";


export const loginUser = createAsyncThunk("auth/login", async(crendentials)=>{
    const res = await api.post("/login",crendentials);
    return res.data;

})


export const registerUser = createAsyncThunk('auth/register',async(formData)=>{
    const res = await api.post("/customer.store",formData);
    return res.data;
})

export const fetchUser = createAsyncThunk('auth/fetchUser',async()=>{

    const res = await api.post("/customer.details");
    return res.data;
})

export const updateUser = createAsyncThunk("auth/updateUser",async(updateData)=>{

    const res = await api.post("/customer.update",updateData);
    return res.data;
})