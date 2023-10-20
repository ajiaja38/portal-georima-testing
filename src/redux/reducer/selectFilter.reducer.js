import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedKabupatenNameRedux: '',
};

const selectFilter = createSlice({
  name: 'select kabupaten',
  initialState,
  reducers: {
    setSelectedKabupatenRedux: (state, action) => {
      state.selectedKabupatenNameRedux = action.payload;
    },
  },
});

export const { setSelectedKabupatenRedux } = selectFilter.actions;
export default selectFilter.reducer;
