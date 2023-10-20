import { configureStore } from '@reduxjs/toolkit';
import logamdasarReducer from '../reducer/logamdasar.reducer';
import zoomReducer from '../reducer/zoom.reducer';
import batuBaraReducer from '../reducer/batuBara.reducer';
import panasBumiReducer from '../reducer/panasBumi.reducer';
import logamRinganReducer from '../reducer/logamRingan.reducer';
import logamMuliaReducer from '../reducer/logamMulia.reducer';
import logamBesiReducer from '../reducer/logamBesi.reducer';
import batuMuliaReducer from '../reducer/batuMulia.reducer';
import bahanBangunanReducer from '../reducer/bahanBangunan.reducer';
import bahanKeramikReducer from '../reducer/bahanKeramik.reducer';
import mineralIndustriReducer from '../reducer/mineralIndustri.reducer';
import activeTabReducer from '../reducer/activeTab.reducer';
import selectFilterReducer from '../reducer/selectFilter.reducer';
import minimapOpenReducer from '../reducer/minimapOpen.reducer';

export const store = configureStore({
  reducer: {
    logamDasar: logamdasarReducer,
    logamMulia: logamMuliaReducer,
    logamBesi: logamBesiReducer,
    logamRingan: logamRinganReducer,
    batuBara: batuBaraReducer,
    batuMulia: batuMuliaReducer,
    bahanBangunan: bahanBangunanReducer,
    bahanKeramik: bahanKeramikReducer,
    mineralIndustri: mineralIndustriReducer,
    panasBumi: panasBumiReducer,
    zoomButton: zoomReducer,
    activeTabs: activeTabReducer,
    selecFilter: selectFilterReducer,
    minimapOpen: minimapOpenReducer,
  },
});
