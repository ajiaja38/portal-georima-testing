import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bauksit: [],
  monasit: [],
  titanPlaser: [],
  titanLaterit: [],
  xenotim: [],
  isBauksitChecked: false,
  isMonasitChecked: false,
  isTitanPlaserChecked: false,
  isTitanLateritChecked: false,
  isXenotimChecked: false,
  isLogamRinganSelecAllChecked: false,
};

const logamRingan = createSlice({
  name: 'logamRingan',
  initialState,
  reducers: {
    setBauksit: (state, action) => {
      state.bauksit = action.payload;
    },
    setMonasit: (state, action) => {
      state.monasit = action.payload;
    },
    setTitanPlaser: (state, action) => {
      state.titanPlaser = action.payload;
    },
    setTitanLaterit: (state, action) => {
      state.titanLaterit = action.payload;
    },
    setXenotim: (state, action) => {
      state.xenotim = action.payload;
    },
    setIsBauksitChecked: (state, action) => {
      state.isBauksitChecked = action.payload;
    },
    setIsMonasitChecked: (state, action) => {
      state.isMonasitChecked = action.payload;
    },
    setIsTitanPlaserChecked: (state, action) => {
      state.isTitanPlaserChecked = action.payload;
    },
    setIsTitanLateritChecked: (state, action) => {
      state.isTitanLateritChecked = action.payload;
    },
    setIsXenotimChecked: (state, action) => {
      state.isXenotimChecked = action.payload;
    },
    setIsLogamRinganSelecAllChecked: (state, action) => {
      state.isLogamRinganSelecAllChecked = action.payload;
    },
  },
});

export const {
  setBauksit,
  setMonasit,
  setTitanPlaser,
  setTitanLaterit,
  setXenotim,
  setIsBauksitChecked,
  setIsMonasitChecked,
  setIsTitanPlaserChecked,
  setIsTitanLateritChecked,
  setIsXenotimChecked,
  setIsLogamRinganSelecAllChecked,
} = logamRingan.actions;
export default logamRingan.reducer;
