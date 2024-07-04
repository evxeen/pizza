import { createSlice } from '@reduxjs/toolkit';

const searchElementByID = (state, action) => {
  const value =
    action.payload !== null && typeof action.payload === 'object' && !Array.isArray(action.payload);

  if (value) {
    return state.items.find((item) => item.id === action.payload.id);
  } else {
    return state.items.find((item) => item.id === action.payload);
  }
};

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const duplicateItem = searchElementByID(state, action);
      if (duplicateItem) {
        duplicateItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);
    },

    removeItem(state, action) {
      const desiredElement = searchElementByID(state, action);
      state.totalPrice -= desiredElement.price * desiredElement.count;
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },

    minus(state, action) {
      const foundElement = searchElementByID(state, action);
      if (foundElement) {
        foundElement.count--;
        state.totalPrice -= foundElement.price;
      }
    },
  },
});

export const { addItem, removeItem, clearCart, minus } = cartSlice.actions;

export default cartSlice.reducer;
