import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTab: 'batuBara',
};

const activeTabsSlice = createSlice({
  name: 'active tabs',
  initialState,
  reducers: {
    setActiveTabs: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTabs } = activeTabsSlice.actions;
export default activeTabsSlice.reducer;
