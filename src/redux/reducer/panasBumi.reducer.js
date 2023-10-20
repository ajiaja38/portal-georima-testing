import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pendahuluanAwal: [],
  pendahuluan: [],
  rinci: [],
  siapDikembangkan: [],
  terpasang: [],
  isPendahuluanAwalChecked: false,
  isPendahuluanChecked: false,
  isRinciChecked: false,
  isSiapDikembangkanChecked: false,
  isTerpasangChecked: false,
  isPanasBumiSelectedAll: false,
};

const panasBumiSlice = createSlice({
  name: 'panasBumi',
  initialState,
  reducers: {
    setPendahuluanAwal: (state, action) => {
      state.pendahuluanAwal = action.payload;
    },
    setPendahuluan: (state, action) => {
      state.pendahuluan = action.payload;
    },
    setRinci: (state, action) => {
      state.rinci = action.payload;
    },
    setSiapDikembangkan: (state, action) => {
      state.siapDikembangkan = action.payload;
    },
    setTerpasang: (state, action) => {
      state.terpasang = action.payload;
    },
    setIsPendahuluanAwalIsChecked: (state, action) => {
      state.isPendahuluanAwalChecked = action.payload;
    },
    setIsPendahuluanChecked: (state, action) => {
      state.isPendahuluanChecked = action.payload;
    },
    setIsRinciChecked: (state, action) => {
      state.isRinciChecked = action.payload;
    },
    setIsSiapDikembangkanChecked: (state, action) => {
      state.isSiapDikembangkanChecked = action.payload;
    },
    setIsTerPasangChecked: (state, action) => {
      state.isTerpasangChecked = action.payload;
    },
    setIsPanasBumiSelectedAll: (state, action) => {
      state.isPanasBumiSelectedAll = action.payload;
    },
  },
});

export const {
  setPendahuluanAwal,
  setPendahuluan,
  setRinci,
  setSiapDikembangkan,
  setTerpasang,
  setIsPendahuluanAwalIsChecked,
  setIsPendahuluanChecked,
  setIsRinciChecked,
  setIsSiapDikembangkanChecked,
  setIsTerPasangChecked,
  setIsPanasBumiSelectedAll,
} = panasBumiSlice.actions;
export default panasBumiSlice.reducer;
