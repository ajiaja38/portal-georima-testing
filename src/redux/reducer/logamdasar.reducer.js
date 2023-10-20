import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  airRaksa: [],
  antimon: [],
  seng: [],
  tembaga: [],
  timah: [],
  timbal: [],
  isAirRaksaChecked: false,
  isAntimonChecked: false,
  isSengChecked: false,
  isTembagaChecked: false,
  isTimahChecked: false,
  isTimbalChecked: false,
  isSelectedAllLogamDasarChecked: false,
};

const logamDasarSlice = createSlice({
  name: 'logamDasar',
  initialState,
  reducers: {
    setAirRaksa: (state, action) => {
      state.airRaksa = action.payload;
    },
    setAntimon: (state, action) => {
      state.antimon = action.payload;
    },
    setSeng: (state, action) => {
      state.seng = action.payload;
    },
    setTembaga: (state, action) => {
      state.tembaga = action.payload;
    },
    setTimah: (state, action) => {
      state.timah = action.payload;
    },
    setTimbal: (state, action) => {
      state.timbal = action.payload;
    },
    setIsAirRaksaChecked: (state, action) => {
      state.isAirRaksaChecked = action.payload;
    },
    setIsAntimonChecked: (state, action) => {
      state.isAntimonChecked = action.payload;
    },
    setIsSengChecked: (state, action) => {
      state.isSengChecked = action.payload;
    },
    setIsTembagaChecked: (state, action) => {
      state.isTembagaChecked = action.payload;
    },
    setIsTimahChecked: (state, action) => {
      state.isTimahChecked = action.payload;
    },
    setIsTimbalChecked: (state, action) => {
      state.isTimbalChecked = action.payload;
    },
    setIsSelectedAllLogamDasarChecked: (state, action) => {
      state.isSelectedAllLogamDasarChecked = action.payload;
    },
  },
});

export const {
  setAirRaksa,
  setAntimon,
  setSeng,
  setTembaga,
  setTimah,
  setTimbal,
  setIsAirRaksaChecked,
  setIsAntimonChecked,
  setIsSengChecked,
  setIsTembagaChecked,
  setIsTimahChecked,
  setIsTimbalChecked,
  setIsSelectedAllLogamDasarChecked,
} = logamDasarSlice.actions;
export default logamDasarSlice.reducer;
