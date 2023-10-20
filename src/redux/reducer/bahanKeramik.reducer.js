import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ballBonClay: [],
  felspar: [],
  kaolin: [],
  lempung: [],
  magnesit: [],
  obsidian: [],
  perlit: [],
  pirofilit: [],
  toseki: [],
  trakhit: [],
  isBallBonClayChecked: false,
  isFelsparChecked: false,
  isKaolinChecked: false,
  isLempungChecked: false,
  isMagnesitChecked: false,
  isObsidianChecked: false,
  isPerlitChecked: false,
  isPirofilitChecked: false,
  isTosekiChecked: false,
  isTrakhitChecked: false,
  isBahanKeramikSelectedAll: false,
};

const bahanKeramikSlice = createSlice({
  name: 'bahan keramik',
  initialState,
  reducers: {
    setBallBonClay: (state, action) => {
      state.ballBonClay = action.payload;
    },
    setFelspar: (state, action) => {
      state.felspar = action.payload;
    },
    setKaolin: (state, action) => {
      state.kaolin = action.payload;
    },
    setLempung: (state, action) => {
      state.lempung = action.payload;
    },
    setMagnesit: (state, action) => {
      state.magnesit = action.payload;
    },
    setObsidian: (state, action) => {
      state.obsidian = action.payload;
    },
    setPerlit: (state, action) => {
      state.perlit = action.payload;
    },
    setPirofilit: (state, action) => {
      state.pirofilit = action.payload;
    },
    setToseki: (state, action) => {
      state.toseki = action.payload;
    },
    setTrakhit: (state, action) => {
      state.trakhit = action.payload;
    },
    setIsBallBonClayChecked: (state, action) => {
      state.isBallBonClayChecked = action.payload;
    },
    setIsFelsparChecked: (state, action) => {
      state.isFelsparChecked = action.payload;
    },
    setIsKaolinChecked: (state, action) => {
      state.isKaolinChecked = action.payload;
    },
    setIsLempungChecked: (state, action) => {
      state.isLempungChecked = action.payload;
    },
    setIsMagnesitChecked: (state, action) => {
      state.isMagnesitChecked = action.payload;
    },
    setIsObsidianChecked: (state, action) => {
      state.isObsidianChecked = action.payload;
    },
    setIsPerlitChecked: (state, action) => {
      state.isPerlitChecked = action.payload;
    },
    setIsPirofilitChecked: (state, action) => {
      state.isPirofilitChecked = action.payload;
    },
    setIsTosekiChecked: (state, action) => {
      state.isTosekiChecked = action.payload;
    },
    setIsTrakhitChecked: (state, action) => {
      state.isTrakhitChecked = action.payload;
    },
    setIsBahanKeramikSelectedAll: (state, action) => {
      state.isBahanKeramikSelectedAll = action.payload;
    },
  },
});

export const {
  setBallBonClay,
  setFelspar,
  setKaolin,
  setLempung,
  setMagnesit,
  setObsidian,
  setPerlit,
  setPirofilit,
  setToseki,
  setTrakhit,
  setIsBallBonClayChecked,
  setIsFelsparChecked,
  setIsKaolinChecked,
  setIsLempungChecked,
  setIsMagnesitChecked,
  setIsObsidianChecked,
  setIsPerlitChecked,
  setIsPirofilitChecked,
  setIsTosekiChecked,
  setIsTrakhitChecked,
  setIsBahanKeramikSelectedAll,
} = bahanKeramikSlice.actions;
export default bahanKeramikSlice.reducer;
