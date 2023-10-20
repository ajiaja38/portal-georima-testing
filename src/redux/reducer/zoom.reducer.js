import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isButtonClick: false,
};

const zoomSlice = createSlice({
  name: 'zoomLevel',
  initialState,
  reducers: {
    setZoomButtonClick: (state, action) => {
      state.isButtonClick = action.payload;
    },
  },
});

export const { setZoomButtonClick } = zoomSlice.actions;
export default zoomSlice.reducer;
