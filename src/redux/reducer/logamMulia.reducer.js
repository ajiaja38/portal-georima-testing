import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  emasAlluvial: [],
  emasPrimer: [],
  perak: [],
  platina: [],
  isEmasAlluvialChecked: false,
  isEmasPrimerChecked: false,
  isPerakChecked: false,
  isPlatinaChecked: false,
  isLogamMuliaSelectedAll: false,
};

const logamMuliaSlice = createSlice({
  name: 'logamMulia',
  initialState,
  reducers: {
    setEmasAlluvial: (state, action) => {
      state.emasAlluvial = action.payload;
    },
    setEmasPrimer: (state, action) => {
      state.emasPrimer = action.payload;
    },
    setPerak: (state, action) => {
      state.perak = action.payload;
    },
    setPlatina: (state, action) => {
      state.platina = action.payload;
    },
    setIsEmasAlluvialChecked: (state, action) => {
      state.isEmasAlluvialChecked = action.payload;
    },
    setIsEmasPrimerChecked: (state, action) => {
      state.isEmasPrimerChecked = action.payload;
    },
    setIsPerakChecked: (state, action) => {
      state.isPerakChecked = action.payload;
    },
    setIsPlatinaChecked: (state, action) => {
      state.isPlatinaChecked = action.payload;
    },
    setIsLogamMuliaSelectedAll: (state, action) => {
      state.isLogamMuliaSelectedAll = action.payload;
    },
  },
});

export const {
  setEmasAlluvial,
  setEmasPrimer,
  setPerak,
  setPlatina,
  setIsEmasAlluvialChecked,
  setIsEmasPrimerChecked,
  setIsPerakChecked,
  setIsPlatinaChecked,
  setIsLogamMuliaSelectedAll,
} = logamMuliaSlice.actions;
export default logamMuliaSlice.reducer;
