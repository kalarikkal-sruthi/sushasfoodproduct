import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
  try {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  } catch (err) {
    console.error("Failed to load cart from localStorage:", err);
    return [];
  }
};

const saveCartToStorage = (items) => {
  try {
    localStorage.setItem("cartItems", JSON.stringify(items));
  } catch (err) {
    console.error("Failed to save cart to localStorage:", err);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromStorage(),
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      saveCartToStorage(state.items);
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToStorage(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cartItems");
    },
       // sid:changes on 21 aug 2025 - increment quantity
        incrementQuantity: (state, action) => {
          const item = state.items.find((item) => item.id === action.payload);
          if (item) {
            item.quantity += 1;
            saveCartToStorage(state.items);
          }
        },

          // sid:changes on 21 aug 2025 - decrement quantity
            decrementQuantity: (state, action) => {
              const item = state.items.find((item) => item.id === action.payload);
              if (item && item.quantity > 1) {
                item.quantity -= 1;
                saveCartToStorage(state.items);
              }
            },
  },
});

export const {
   addToCart,
   removeFromCart,
   clearCart,
   incrementQuantity,
   decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
