import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    totalPrice: 0,
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const duplicateItem = state.items.find(item => item.id === action.payload.id);

            if (duplicateItem) {
                duplicateItem.count++;
            } else {
                state.items.push({...action.payload, count: 1})
            }

            state.totalPrice = state.items.reduce((sum, item) => {
                return item.price * item.count + sum
            }, 0)
        },

        removeItem(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },

        clearCart(state) {
            state.items = [];
        },

        minus(state, action) {
            const duplicateItem = state.items.find(item => item.id === action.payload);
            if (duplicateItem) {
                duplicateItem.count--;
            }
        }
    },

});

export const {addItem, removeItem, clearCart, minus} = cartSlice.actions;

export default cartSlice.reducer;
