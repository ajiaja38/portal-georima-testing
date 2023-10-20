import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  batuBaraRendah: [],
  batuBaraSedang: [],
  batuBaraTinggi: [],
  batuBaraSangatTinggi: [],
  isRendahChecked: false,
  isSedangChecked: false,
  isTinggiChecked: false,
  isSangatTinggiChecked: false,
  isSelecAllChecked: false,
};

const batuBaraSlice = createSlice({
  name: 'batuBara',
  initialState,
  reducers: {
    setBatuBaraRendah: (state, action) => {
      state.batuBaraRendah = action.payload;
    },
    setBatuBaraSedang: (state, action) => {
      state.batuBaraSedang = action.payload;
    },
    setBatuBaraTinggi: (state, action) => {
      state.batuBaraTinggi = action.payload;
    },
    setBatuBaraSangatTinggi: (state, action) => {
      state.batuBaraSangatTinggi = action.payload;
    },
    setIsRendahChecked: (state, action) => {
      state.isRendahChecked = action.payload;
    },
    setIsSedangChecked: (state, action) => {
      state.isSedangChecked = action.payload;
    },
    setIsTinggiChecked: (state, action) => {
      state.isTinggiChecked = action.payload;
    },
    setIsSangatTinggiChecked: (state, action) => {
      state.isSangatTinggiChecked = action.payload;
    },
    setIsSelectAllChecked: (state, action) => {
      state.isSelecAllChecked = action.payload;
    },
  },
});

export const {
  setBatuBaraRendah,
  setBatuBaraSedang,
  setBatuBaraTinggi,
  setBatuBaraSangatTinggi,
  setIsRendahChecked,
  setIsSedangChecked,
  setIsTinggiChecked,
  setIsSangatTinggiChecked,
  setIsSelectAllChecked,
} = batuBaraSlice.actions;

export default batuBaraSlice.reducer;
