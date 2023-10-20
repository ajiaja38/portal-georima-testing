import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  barit: [],
  batuanPembawaKalium: [],
  batuApung: [],
  batuGamping: [],
  batuKuarsa: [],
  belerang: [],
  bentonit: [],
  diatomea: [],
  fosfat: [],
  gipsum: [],
  kalsit: [],
  kuarsit: [],
  oker: [],
  pasirKuarsa: [],
  pasirZirkon: [],
  prehnit: [],
  serpentin: [],
  talk: [],
  travertin: [],
  ultrabasa: [],
  yodium: [],
  zeolit: [],
  isBaritChecked: false,
  isBatuanPembawaKaliumChecked: false,
  isBatuApungChecked: false,
  isBatuGampingChecked: false,
  isBatuKuarsaChecked: false,
  isBelerangChecked: false,
  isBentonitChecked: false,
  isDiatomeaChecked: false,
  isFosfatChecked: false,
  isGipsumChecked: false,
  isKalsitChecked: false,
  isKuarsitChecked: false,
  isOkerChecked: false,
  isPasirKuarsaChecked: false,
  isPasirZirkonChecked: false,
  isPrehnitChecked: false,
  isSerpentinChecked: false,
  isTalkChecked: false,
  isTravertinChecked: false,
  isUltrabasaChecked: false,
  isYodiumChecked: false,
  isZeolitChecked: false,
  isMineralIndustriSelectedAll: false,
};

const mineralIndustriSlice = createSlice({
  name: 'mineral industri',
  initialState,
  reducers: {
    setBarit: (state, action) => {
      state.barit = action.payload;
    },
    setBatuanPembawaKalium: (state, action) => {
      state.batuanPembawaKalium = action.payload;
    },
    setBatuApung: (state, action) => {
      state.batuApung = action.payload;
    },
    setBatuGamping: (state, action) => {
      state.batuGamping = action.payload;
    },
    setBatuKuarsa: (state, action) => {
      state.batuKuarsa = action.payload;
    },
    setBelerang: (state, action) => {
      state.belerang = action.payload;
    },
    setBentonit: (state, action) => {
      state.bentonit = action.payload;
    },
    setDiatomea: (state, action) => {
      state.diatomea = action.payload;
    },
    setFosfat: (state, action) => {
      state.fosfat = action.payload;
    },
    setGipsum: (state, action) => {
      state.gipsum = action.payload;
    },
    setKalsit: (state, action) => {
      state.kalsit = action.payload;
    },
    setKuarsit: (state, action) => {
      state.kuarsit = action.payload;
    },
    setOker: (state, action) => {
      state.oker = action.payload;
    },
    setPasirKuarsa: (state, action) => {
      state.pasirKuarsa = action.payload;
    },
    setPasirZirkon: (state, action) => {
      state.pasirZirkon = action.payload;
    },
    setPrehnit: (state, action) => {
      state.prehnit = action.payload;
    },
    setSerpentin: (state, action) => {
      state.serpentin = action.payload;
    },
    setTalk: (state, action) => {
      state.talk = action.payload;
    },
    setTravertin: (state, action) => {
      state.travertin = action.payload;
    },
    setUltrabasa: (state, action) => {
      state.ultrabasa = action.payload;
    },
    setYodium: (state, action) => {
      state.yodium = action.payload;
    },
    setZeolit: (state, action) => {
      state.zeolit = action.payload;
    },
    setIsBaritChecked: (state, action) => {
      state.isBaritChecked = action.payload;
    },
    setIsBatuanPembawaKaliumChecked: (state, action) => {
      state.isBatuanPembawaKaliumChecked = action.payload;
    },
    setIsBatuApungChecked: (state, action) => {
      state.isBatuApungChecked = action.payload;
    },
    setIsBatuGampingChecked: (state, action) => {
      state.isBatuGampingChecked = action.payload;
    },
    setIsBatuKuarsaChecked: (state, action) => {
      state.isBatuKuarsaChecked = action.payload;
    },
    setIsBelerangChecked: (state, action) => {
      state.isBelerangChecked = action.payload;
    },
    setIsBentonitChecked: (state, action) => {
      state.isBentonitChecked = action.payload;
    },
    setIsDiatomeaChecked: (state, action) => {
      state.isDiatomeaChecked = action.payload;
    },
    setIsFosfatChecked: (state, action) => {
      state.isFosfatChecked = action.payload;
    },
    setIsGipsumChecked: (state, action) => {
      state.isGipsumChecked = action.payload;
    },
    setIsKalsitChecked: (state, action) => {
      state.isKalsitChecked = action.payload;
    },
    setIsKuarsitChecked: (state, action) => {
      state.isKuarsitChecked = action.payload;
    },
    setIsOkerChecked: (state, action) => {
      state.isOkerChecked = action.payload;
    },
    setIsPasirKuarsaChecked: (state, action) => {
      state.isPasirKuarsaChecked = action.payload;
    },
    setIsPasirZirkonChecked: (state, action) => {
      state.isPasirZirkonChecked = action.payload;
    },
    setIsPrehnitChecked: (state, action) => {
      state.isPrehnitChecked = action.payload;
    },
    setIsSerpentinChecked: (state, action) => {
      state.isSerpentinChecked = action.payload;
    },
    setIsTalkChecked: (state, action) => {
      state.isTalkChecked = action.payload;
    },
    setIsTravertinChecked: (state, action) => {
      state.isTravertinChecked = action.payload;
    },
    setIsUltrabasaChecked: (state, action) => {
      state.isUltrabasaChecked = action.payload;
    },
    setIsYodiumChecked: (state, action) => {
      state.isYodiumChecked = action.payload;
    },
    setIsZeolitChecked: (state, action) => {
      state.isZeolitChecked = action.payload;
    },
    setIsMineralIndustriSelectedAll: (state, action) => {
      state.isMineralIndustriSelectedAll = action.payload;
    },
  },
});

export const {
  setBarit,
  setBatuanPembawaKalium,
  setBatuApung,
  setBatuGamping,
  setBatuKuarsa,
  setBelerang,
  setBentonit,
  setDiatomea,
  setFosfat,
  setGipsum,
  setKalsit,
  setKuarsit,
  setOker,
  setPasirKuarsa,
  setPasirZirkon,
  setPrehnit,
  setSerpentin,
  setTalk,
  setTravertin,
  setUltrabasa,
  setYodium,
  setZeolit,
  setIsBaritChecked,
  setIsBatuanPembawaKaliumChecked,
  setIsBatuApungChecked,
  setIsBatuGampingChecked,
  setIsBatuKuarsaChecked,
  setIsBelerangChecked,
  setIsBentonitChecked,
  setIsDiatomeaChecked,
  setIsFosfatChecked,
  setIsGipsumChecked,
  setIsKalsitChecked,
  setIsKuarsitChecked,
  setIsOkerChecked,
  setIsPasirKuarsaChecked,
  setIsPasirZirkonChecked,
  setIsPrehnitChecked,
  setIsSerpentinChecked,
  setIsTalkChecked,
  setIsTravertinChecked,
  setIsUltrabasaChecked,
  setIsYodiumChecked,
  setIsZeolitChecked,
  setIsMineralIndustriSelectedAll,
} = mineralIndustriSlice.actions;
export default mineralIndustriSlice.reducer;
