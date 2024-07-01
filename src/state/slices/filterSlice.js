import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 0,
  sort: {
    name: 'популярности',
    property: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = filterSlice.actions;

export default filterSlice.reducer;
