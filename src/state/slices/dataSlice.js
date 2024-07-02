import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";

export const fetchData = createAsyncThunk(
    'data/fetchData',
    async (params) => {
        const sortByCategory = params.category ? `category=${params.category}` : '';
        const {data} = await axios.get(`https://667f0707f2cb59c38dc7d61e.mockapi.io/items?${sortByCategory}&sortBy=${params.property}`);
        return data;
    }
)
const initialState = {
    items: []
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.items = action.payload
        })
    },
});

export const {setData} = dataSlice.actions;

export default dataSlice.reducer;
