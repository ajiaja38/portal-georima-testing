import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  besiLaterit: [],
  besiPrimer: [],
  besiSedimen: [],
  kobal: [],
  kromit: [],
  kromitPlaser: [],
  mangan: [],
  molibdenum: [],
  nikel: [],
  pasirBesi: [],
  vanadium: [],
  isBesiLateritChecked: false,
  isBesiPrimerChecked: false,
  isBesiSedimenChecked: false,
  isKobalChecked: false,
  isKromitChecked: false,
  isKromitPlaserChecked: false,
  isManganChecked: false,
  isMolibdenumChecked: false,
  isNikelChecked: false,
  isPasirBesiChecked: false,
  isVanadiumChecked: false,
  isLogamBesiSelectedAll: false,
};

const logamBesiSlice = createSlice({
  name: 'logam besi',
  initialState,
  reducers: {
    setBesiLaterit: (state, action) => {
      state.besiLaterit = action.payload;
    },
    setBesiPrimer: (state, action) => {
      state.besiPrimer = action.payload;
    },
    setBesiSedimen: (state, action) => {
      state.besiSedimen = action.payload;
    },
    setKobal: (state, action) => {
      state.kobal = action.payload;
    },
    setKromit: (state, action) => {
      state.kromit = action.payload;
    },
    setKromitPlaser: (state, action) => {
      state.kromitPlaser = action.payload;
    },
    setMangan: (state, action) => {
      state.mangan = action.payload;
    },
    setMolibdenum: (state, action) => {
      state.molibdenum = action.payload;
    },
    setNikel: (state, action) => {
      state.nikel = action.payload;
    },
    setPasirBesi: (state, action) => {
      state.pasirBesi = action.payload;
    },
    setVanadium: (state, action) => {
      state.vanadium = action.payload;
    },
    setIsBesiLateritChecked: (state, action) => {
      state.isBesiLateritChecked = action.payload;
    },
    setIsBesiPrimerChecked: (state, action) => {
      state.isBesiPrimerChecked = action.payload;
    },
    setIsBesiSedimenChecked: (state, action) => {
      state.isBesiSedimenChecked = action.payload;
    },
    setIsKobalIsChecked: (state, action) => {
      state.isKobalChecked = action.payload;
    },
    setIsKromitChecked: (state, action) => {
      state.isKromitChecked = action.payload;
    },
    setIsKromitPlaserChecked: (state, action) => {
      state.isKromitPlaserChecked = action.payload;
    },
    setIsManganChecked: (state, action) => {
      state.isManganChecked = action.payload;
    },
    setIsMolibdenumChecked: (state, action) => {
      state.isMolibdenumChecked = action.payload;
    },
    setIsNikelChecked: (state, action) => {
      state.isNikelChecked = action.payload;
    },
    setIsPasirBersChecked: (state, action) => {
      state.isPasirBesiChecked = action.payload;
    },
    setIsVanadiumChecked: (state, action) => {
      state.isVanadiumChecked = action.payload;
    },
    setIsLogamBesiSelectedAll: (state, action) => {
      state.isLogamBesiSelectedAll = action.payload;
    },
  },
});

export const {
  setBesiLaterit,
  setBesiPrimer,
  setBesiSedimen,
  setKobal,
  setKromit,
  setKromitPlaser,
  setMangan,
  setMolibdenum,
  setNikel,
  setPasirBesi,
  setVanadium,
  setIsBesiLateritChecked,
  setIsBesiPrimerChecked,
  setIsBesiSedimenChecked,
  setIsKobalIsChecked,
  setIsKromitChecked,
  setIsKromitPlaserChecked,
  setIsManganChecked,
  setIsMolibdenumChecked,
  setIsNikelChecked,
  setIsPasirBersChecked,
  setIsVanadiumChecked,
  setIsLogamBesiSelectedAll,
} = logamBesiSlice.actions;
export default logamBesiSlice.reducer;
