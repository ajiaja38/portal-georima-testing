import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  andesit: [],
  basal: [],
  batuSabak: [],
  dasit: [],
  diorit: [],
  dolomit: [],
  granit: [],
  granodiorit: [],
  marmer: [],
  pasirLaut: [],
  peridotit: [],
  sirtu: [],
  tras: [],
  isAndesitChecked: false,
  isBasalChecked: false,
  isBatuSabakChecked: false,
  isDasitChecked: false,
  isDioritChecked: false,
  isDolomitChecked: false,
  isGranitChecked: false,
  isGranodioritChecked: false,
  isMarmerChecked: false,
  isPasirLautChecked: false,
  isPeridotitChecked: false,
  isSirtuChecked: false,
  isTrasChecked: false,
  isBahanBangunanSelectedAll: false,
};

const bahanBangunanSlice = createSlice({
  name: 'bahan bangunan',
  initialState,
  reducers: {
    setAndesit: (state, action) => {
      state.andesit = action.payload;
    },
    setBasal: (state, action) => {
      state.basal = action.payload;
    },
    setBatuSabak: (state, action) => {
      state.batuSabak = action.payload;
    },
    setDasit: (state, action) => {
      state.dasit = action.payload;
    },
    setDiorit: (state, action) => {
      state.diorit = action.payload;
    },
    setDolomit: (state, action) => {
      state.dolomit = action.payload;
    },
    setGranit: (state, action) => {
      state.granit = action.payload;
    },
    setGranodiorit: (state, action) => {
      state.granodiorit = action.payload;
    },
    setMarmer: (state, action) => {
      state.marmer = action.payload;
    },
    setPasirLaut: (state, action) => {
      state.pasirLaut = action.payload;
    },
    setPeridotit: (state, action) => {
      state.peridotit = action.payload;
    },
    setSirtu: (state, action) => {
      state.sirtu = action.payload;
    },
    setTras: (state, action) => {
      state.tras = action.payload;
    },
    setIsAndesitChecked: (state, action) => {
      state.isAndesitChecked = action.payload;
    },
    setIsBasalChecked: (state, action) => {
      state.isBasalChecked = action.payload;
    },
    setIsBatuSabakChecked: (state, action) => {
      state.isBatuSabakChecked = action.payload;
    },
    setIsDasitChecked: (state, action) => {
      state.isDasitChecked = action.payload;
    },
    setIsDioritChecked: (state, action) => {
      state.isDioritChecked = action.payload;
    },
    setIsDolomitChecked: (state, action) => {
      state.isDolomitChecked = action.payload;
    },
    setIsGranitChecked: (state, action) => {
      state.isGranitChecked = action.payload;
    },
    setIsGranodioritChecked: (state, action) => {
      state.isGranodioritChecked = action.payload;
    },
    setIsMarmerChecked: (state, action) => {
      state.isMarmerChecked = action.payload;
    },
    setIsPasirLautChecked: (state, action) => {
      state.isPasirLautChecked = action.payload;
    },
    setIsPeridotitChecked: (state, action) => {
      state.isPeridotitChecked = action.payload;
    },
    setIsSirtuChecked: (state, action) => {
      state.isSirtuChecked = action.payload;
    },
    setIsTrasChecked: (state, action) => {
      state.isTrasChecked = action.payload;
    },
    setIsBahanBangunanSelectedAll: (state, action) => {
      state.isBahanBangunanSelectedAll = action.payload;
    },
  },
});

export const {
  setAndesit,
  setBasal,
  setBatuSabak,
  setDasit,
  setDiorit,
  setDolomit,
  setGranit,
  setGranodiorit,
  setMarmer,
  setPasirLaut,
  setPeridotit,
  setSirtu,
  setTras,
  setIsAndesitChecked,
  setIsBasalChecked,
  setIsBatuSabakChecked,
  setIsDasitChecked,
  setIsDioritChecked,
  setIsDolomitChecked,
  setIsGranitChecked,
  setIsGranodioritChecked,
  setIsMarmerChecked,
  setIsPasirLautChecked,
  setIsPeridotitChecked,
  setIsSirtuChecked,
  setIsTrasChecked,
  setIsBahanBangunanSelectedAll,
} = bahanBangunanSlice.actions;
export default bahanBangunanSlice.reducer;
