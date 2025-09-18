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

      const existingItem = state.items.find(
        (item) => item.id === newItem.id && item.sizeId === newItem.sizeId
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      saveCartToStorage(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cartItems");
    },

    incrementQuantity: (state, action) => {
      const { id, sizeId } = action.payload;
      const item = state.items.find(
        (item) => item.id === id && item.sizeId === sizeId
      );
      if (item) {
        item.quantity += 1;
        saveCartToStorage(state.items);
      }
    },

    decrementQuantity: (state, action) => {
      const { id, sizeId } = action.payload;
      const item = state.items.find(
        (item) => item.id === id && item.sizeId === sizeId
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        saveCartToStorage(state.items);
      }
    },

    removeFromCart: (state, action) => {
      const { id, sizeId } = action.payload;
      state.items = state.items.filter(
        (item) => !(item.id === id && item.sizeId === sizeId)
      );
      saveCartToStorage(state.items);
    },
  },
});

export const {
  addToCart,

  clearCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
