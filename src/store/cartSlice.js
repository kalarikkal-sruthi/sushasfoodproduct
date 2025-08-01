
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // each item: { id, name, price, quantity, ... }
  },
  reducers: {
    addToCart: (state, action) => {
     console.log("👉 ADDING TO CART: from slice", action.payload); 
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === 
        newItem.id);
      
      if (existingItem) {
        existingItem.quantity += 1; // increase quantity
      } else {
        state.items.push({ ...newItem, quantity: 1 }); // add new item
      }
       console.log("🛒 CART ITEMS AFTER ADD: from cartslice", state.items); 
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    }
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
