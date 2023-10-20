import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ametis: [],
  batuHias: [],
  intan: [],
  jasper: [],
  kaldeson: [],
  oniks: [],
  opal: [],
  rijang: [],
  isAmetisChecked: false,
  isbatuHiasChecked: false,
  isIntaChecked: false,
  isJasperChecked: false,
  isKaldesonChecked: false,
  isOniksChecked: false,
  isOpalChecked: false,
  isRijangChecked: false,
  isBatuMuliaSelectedAll: false,
};

const batuMuliaSlice = createSlice({
  name: 'batu mulia',
  initialState,
  reducers: {
    setAmetis: (state, action) => {
      state.ametis = action.payload;
    },
    setBatuHias: (state, action) => {
      state.batuHias = action.payload;
    },
    setIntan: (state, action) => {
      state.intan = action.payload;
    },
    setJasper: (state, action) => {
      state.jasper = action.payload;
    },
    setKalsedon: (state, action) => {
      state.kaldeson = action.payload;
    },
    setOniks: (state, action) => {
      state.oniks = action.payload;
    },
    setOpal: (state, action) => {
      state.opal = action.payload;
    },
    setRijang: (state, action) => {
      state.rijang = action.payload;
    },
    setIsAmetisChecked: (state, action) => {
      state.isAmetisChecked = action.payload;
    },
    setIsBatuHiasChecked: (state, action) => {
      state.isbatuHiasChecked = action.payload;
    },
    setIsIntanChecked: (state, action) => {
      state.isIntaChecked = action.payload;
    },
    setIsJasperChecked: (state, action) => {
      state.isJasperChecked = action.payload;
    },
    setIsKalsedonChecked: (state, action) => {
      state.isKaldesonChecked = action.payload;
    },
    setIsOniksChecked: (state, action) => {
      state.isOniksChecked = action.payload;
    },
    setIsOpalChecked: (state, action) => {
      state.isOpalChecked = action.payload;
    },
    setIsRijangIsChecked: (state, action) => {
      state.isRijangChecked = action.payload;
    },
    setIsBatuMuliaSelectedAll: (state, action) => {
      state.isBatuMuliaSelectedAll = action.payload;
    },
  },
});

export const {
  setAmetis,
  setBatuHias,
  setIntan,
  setJasper,
  setKalsedon,
  setOniks,
  setOpal,
  setRijang,
  setIsAmetisChecked,
  setIsBatuHiasChecked,
  setIsIntanChecked,
  setIsJasperChecked,
  setIsKalsedonChecked,
  setIsOniksChecked,
  setIsOpalChecked,
  setIsRijangIsChecked,
  setIsBatuMuliaSelectedAll,
} = batuMuliaSlice.actions;
export default batuMuliaSlice.reducer;
