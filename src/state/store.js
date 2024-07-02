import {configureStore} from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import cartSlice from './slices/cartSlice';
import dataSlice from "./slices/dataSlice";

export const store = configureStore({
    reducer: {
        filterSlice,
        cartSlice,
        dataSlice
    },
});
