import { useDispatch, useSelector } from 'react-redux';
import {
  setEmasAlluvial,
  setEmasPrimer,
  setPerak,
  setPlatina,
  setIsEmasAlluvialChecked,
  setIsEmasPrimerChecked,
  setIsPerakChecked,
  setIsPlatinaChecked,
  setIsLogamMuliaSelectedAll,
} from '../../../../redux/reducer/logamMulia.reducer';
import sourceGeoRIMA from '../../../../api/resource/SourceGeorima';

const ListLogamMulia = () => {
  const dispatch = useDispatch();
  const {
    isEmasAlluvialChecked,
    isEmasPrimerChecked,
    isPerakChecked,
    isPlatinaChecked,
    isLogamMuliaSelectedAll,
  } = useSelector((state) => state.logamMulia);

  const handleEmasAlluvial = async () => {
    dispatch(setIsEmasAlluvialChecked(!isEmasAlluvialChecked));

    if (!isEmasAlluvialChecked) {
      const emasAlluvial = await sourceGeoRIMA.getEmasAlluvial();
      dispatch(setEmasAlluvial(emasAlluvial));
    } else {
      dispatch(setEmasAlluvial([]));
    }
  };

  const handleEmasPrimer = async () => {
    dispatch(setIsEmasPrimerChecked(!isEmasPrimerChecked));

    if (!isEmasPrimerChecked) {
      const emasPrimer = await sourceGeoRIMA.getEmasPrimer();
      dispatch(setEmasPrimer(emasPrimer));
    } else {
      dispatch(setEmasPrimer([]));
    }
  };

  const handlePerak = async () => {
    dispatch(setIsPerakChecked(!isPerakChecked));

    if (!isPerakChecked) {
      const perak = await sourceGeoRIMA.getPerak();
      dispatch(setPerak(perak));
    } else {
      dispatch(setPerak([]));
    }
  };

  const handlePlatina = async () => {
    dispatch(setIsPlatinaChecked(!isPlatinaChecked));

    if (!isPlatinaChecked) {
      const platina = await sourceGeoRIMA.getPlatina();
      dispatch(setPlatina(platina));
    } else {
      dispatch(setPlatina([]));
    }
  };

  const handleSelectedAll = async () => {
    dispatch(setIsLogamMuliaSelectedAll(!isLogamMuliaSelectedAll));

    if (!isLogamMuliaSelectedAll) {
      dispatch(setIsEmasAlluvialChecked(true));
      dispatch(setIsEmasPrimerChecked(true));
      dispatch(setIsPerakChecked(true));
      dispatch(setIsPlatinaChecked(true));

      const emasAlluvial = await sourceGeoRIMA.getEmasAlluvial();
      dispatch(setEmasAlluvial(emasAlluvial));
      const emasPrimer = await sourceGeoRIMA.getEmasPrimer();
      dispatch(setEmasPrimer(emasPrimer));
      const perak = await sourceGeoRIMA.getPerak();
      dispatch(setPerak(perak));
      const platina = await sourceGeoRIMA.getPlatina();
      dispatch(setPlatina(platina));
    } else {
      dispatch(setIsEmasAlluvialChecked(false));
      dispatch(setIsEmasPrimerChecked(false));
      dispatch(setIsPerakChecked(false));
      dispatch(setIsPlatinaChecked(false));

      dispatch(setEmasAlluvial([]));
      dispatch(setEmasPrimer([]));
      dispatch(setPerak([]));
      dispatch(setPlatina([]));
    }
  };

  return (
    <>
      <div className="font-semibold flex mt-5 justify-between items-center">
        <h3>Logam Mulia</h3>
        <div className="flex gap-1">
          <label className="text-xs font-light">Pilih Semua</label>
          <input
            type="checkbox"
            onChange={handleSelectedAll}
            checked={isLogamMuliaSelectedAll}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/emas-alluvial.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Emas Alluvial</label>
          </div>
          <input
            type="checkbox"
            onChange={handleEmasAlluvial}
            checked={isEmasAlluvialChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/emas-primer.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Emas Primer</label>
          </div>
          <input
            type="checkbox"
            onChange={handleEmasPrimer}
            checked={isEmasPrimerChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/perak.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Perak</label>
          </div>
          <input
            type="checkbox"
            onChange={handlePerak}
            checked={isPerakChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/platina.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Platina</label>
          </div>
          <input
            type="checkbox"
            onChange={handlePlatina}
            checked={isPlatinaChecked}
          />
        </div>
      </div>
    </>
  );
};

export default ListLogamMulia;
