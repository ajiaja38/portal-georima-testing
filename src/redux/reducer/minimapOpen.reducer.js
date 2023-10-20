import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMiniMapOpen: false,
};

const minimapOpenSlice = createSlice({
  name: 'minimap open',
  initialState,
  reducers: {
    setIsMiniMapOpen: (state, action) => {
      state.isMiniMapOpen = action.payload;
    },
  },
});

export const { setIsMiniMapOpen } = minimapOpenSlice.actions;
export default minimapOpenSlice.reducer;
