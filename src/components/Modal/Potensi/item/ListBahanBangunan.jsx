import { useDispatch, useSelector } from 'react-redux';
import sourceGeoRIMA from '../../../../api/resource/SourceGeorima';
import {
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
} from '../../../../redux/reducer/bahanBangunan.reducer';

const ListBahanBangunan = () => {
  const dispatch = useDispatch();

  const {
    isAndesitChecked,
    isBasalChecked,
    isBatuSabakChecked,
    isDasitChecked,
    isDioritChecked,
    isDolomitChecked,
    isGranitChecked,
    isGranodioritChecked,
    isMarmerChecked,
    isPasirLautChecked,
    isPeridotitChecked,
    isSirtuChecked,
    isTrasChecked,
    isBahanBangunanSelectedAll,
  } = useSelector((state) => state.bahanBangunan);

  const handleAndesit = async () => {
    dispatch(setIsAndesitChecked(!isAndesitChecked));

    if (!isAndesitChecked) {
      const andesit = await sourceGeoRIMA.getAndesit();
      dispatch(setAndesit(andesit));
    } else {
      dispatch(setAndesit([]));
    }
  };

  const handleBasal = async () => {
    dispatch(setIsBasalChecked(!isBasalChecked));

    if (!isBasalChecked) {
      const basal = await sourceGeoRIMA.getBasal();
      dispatch(setBasal(basal));
    } else {
      dispatch(setBasal([]));
    }
  };

  const handleBatuSabak = async () => {
    dispatch(setIsBatuSabakChecked(!isBatuSabakChecked));

    if (!isBatuSabakChecked) {
      const batuSabak = await sourceGeoRIMA.getBatuSabak();
      dispatch(setBatuSabak(batuSabak));
    } else {
      dispatch(setBatuSabak([]));
    }
  };

  const handleDasit = async () => {
    dispatch(setIsDasitChecked(!isDasitChecked));

    if (!isDasitChecked) {
      const dasit = await sourceGeoRIMA.getDasit();
      dispatch(setDasit(dasit));
    } else {
      dispatch(setDasit([]));
    }
  };

  const handleDiorit = async () => {
    dispatch(setIsDioritChecked(!isDioritChecked));

    if (!isDioritChecked) {
      const diorit = await sourceGeoRIMA.getDiorit();
      dispatch(setDiorit(diorit));
    } else {
      dispatch(setDiorit([]));
    }
  };

  const handleDolomit = async () => {
    dispatch(setIsDolomitChecked(!isDolomitChecked));

    if (!isDolomitChecked) {
      const dolomit = await sourceGeoRIMA.getDolomit();
      dispatch(setDolomit(dolomit));
    } else {
      dispatch(setDolomit([]));
    }
  };

  const handleGranit = async () => {
    dispatch(setIsGranitChecked(!isGranitChecked));

    if (!isGranitChecked) {
      const granit = await sourceGeoRIMA.getGranit();
      dispatch(setGranit(granit));
    } else {
      dispatch(setGranit([]));
    }
  };

  const handleGranodiorit = async () => {
    dispatch(setIsGranodioritChecked(!isGranodioritChecked));

    if (!isGranodioritChecked) {
      const granodiorit = await sourceGeoRIMA.getGranodiorit();
      dispatch(setGranodiorit(granodiorit));
    } else {
      dispatch(setGranodiorit([]));
    }
  };

  const handleMarmer = async () => {
    dispatch(setIsMarmerChecked(!isMarmerChecked));

    if (!isMarmerChecked) {
      const marmer = await sourceGeoRIMA.getMarmer();
      dispatch(setMarmer(marmer));
    } else {
      dispatch(setMarmer([]));
    }
  };

  const handlePasirLaut = async () => {
    dispatch(setIsPasirLautChecked(!isPasirLautChecked));

    if (!isPasirLautChecked) {
      const pasirLaut = await sourceGeoRIMA.getPasirLaut();
      dispatch(setPasirLaut(pasirLaut));
    } else {
      dispatch(setPasirLaut([]));
    }
  };

  const handlePeridotit = async () => {
    dispatch(setIsPeridotitChecked(!isPeridotitChecked));

    if (!isPeridotitChecked) {
      const peridotit = await sourceGeoRIMA.getPeridotit();
      dispatch(setPeridotit(peridotit));
    } else {
      dispatch(setPeridotit([]));
    }
  };

  const handleSirtu = async () => {
    dispatch(setIsSirtuChecked(!isSirtuChecked));

    if (!isSirtuChecked) {
      const sirtu = await sourceGeoRIMA.getSirtu();
      dispatch(setSirtu(sirtu));
    } else {
      dispatch(setSirtu([]));
    }
  };

  const handleTras = async () => {
    dispatch(setIsTrasChecked(!isTrasChecked));

    if (!isTrasChecked) {
      const tras = await sourceGeoRIMA.getTras();
      dispatch(setTras(tras));
    } else {
      dispatch(setTras([]));
    }
  };

  const handleSelectAll = async () => {
    dispatch(setIsBahanBangunanSelectedAll(!isBahanBangunanSelectedAll));

    if (!isBahanBangunanSelectedAll) {
      dispatch(setIsAndesitChecked(true));
      dispatch(setIsBasalChecked(true));
      dispatch(setIsBatuSabakChecked(true));
      dispatch(setIsDasitChecked(true));
      dispatch(setIsDioritChecked(true));
      dispatch(setIsDolomitChecked(true));
      dispatch(setIsGranitChecked(true));
      dispatch(setIsGranodioritChecked(true));
      dispatch(setIsMarmerChecked(true));
      dispatch(setIsPasirLautChecked(true));
      dispatch(setIsPeridotitChecked(true));
      dispatch(setIsSirtuChecked(true));
      dispatch(setIsTrasChecked(true));

      const andesit = await sourceGeoRIMA.getAndesit();
      dispatch(setAndesit(andesit));
      const basal = await sourceGeoRIMA.getBasal();
      dispatch(setBasal(basal));
      const batuSabak = await sourceGeoRIMA.getBatuSabak();
      dispatch(setBatuSabak(batuSabak));
      const dasit = await sourceGeoRIMA.getDasit();
      dispatch(setDasit(dasit));
      const diorit = await sourceGeoRIMA.getDiorit();
      dispatch(setDiorit(diorit));
      const dolomit = await sourceGeoRIMA.getDolomit();
      dispatch(setDolomit(dolomit));
      const granit = await sourceGeoRIMA.getGranit();
      dispatch(setGranit(granit));
      const granodiorit = await sourceGeoRIMA.getGranodiorit();
      dispatch(setGranodiorit(granodiorit));
      const marmer = await sourceGeoRIMA.getMarmer();
      dispatch(setMarmer(marmer));
      const pasirLaut = await sourceGeoRIMA.getPasirLaut();
      dispatch(setPasirLaut(pasirLaut));
      const peridotit = await sourceGeoRIMA.getPeridotit();
      dispatch(setPeridotit(peridotit));
      const sirtu = await sourceGeoRIMA.getSirtu();
      dispatch(setSirtu(sirtu));
      const tras = await sourceGeoRIMA.getTras();
      dispatch(setTras(tras));
    } else {
      dispatch(setIsAndesitChecked(false));
      dispatch(setIsBasalChecked(false));
      dispatch(setIsBatuSabakChecked(false));
      dispatch(setIsDasitChecked(false));
      dispatch(setIsDioritChecked(false));
      dispatch(setIsDolomitChecked(false));
      dispatch(setIsGranitChecked(false));
      dispatch(setIsGranodioritChecked(false));
      dispatch(setIsMarmerChecked(false));
      dispatch(setIsPasirLautChecked(false));
      dispatch(setIsPeridotitChecked(false));
      dispatch(setIsSirtuChecked(false));
      dispatch(setIsTrasChecked(false));

      dispatch(setAndesit([]));
      dispatch(setBasal([]));
      dispatch(setBatuSabak([]));
      dispatch(setDasit([]));
      dispatch(setDiorit([]));
      dispatch(setDolomit([]));
      dispatch(setGranit([]));
      dispatch(setGranodiorit([]));
      dispatch(setMarmer([]));
      dispatch(setPasirLaut([]));
      dispatch(setPeridotit([]));
      dispatch(setSirtu([]));
      dispatch(setTras([]));
    }
  };

  return (
    <>
      <div className="font-semibold flex mt-5 justify-between items-center">
        <h3>Bahan Bangunan</h3>
        <div className="flex gap-1">
          <label className="text-xs font-light">Pilih Semua</label>
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={isBahanBangunanSelectedAll}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/andesit.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Andesit</label>
          </div>
          <input
            type="checkbox"
            onChange={handleAndesit}
            checked={isAndesitChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/basal.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Basal</label>
          </div>
          <input
            type="checkbox"
            onChange={handleBasal}
            checked={isBasalChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/batusabak.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Batusabak</label>
          </div>
          <input
            type="checkbox"
            onChange={handleBatuSabak}
            checked={isBatuSabakChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/Dasit.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Dasit</label>
          </div>
          <input
            type="checkbox"
            onChange={handleDasit}
            checked={isDasitChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/diorit.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Diorit</label>
          </div>
          <input
            type="checkbox"
            onChange={handleDiorit}
            checked={isDioritChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/dolomit.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Dolomit</label>
          </div>
          <input
            type="checkbox"
            onChange={handleDolomit}
            checked={isDolomitChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/granit.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Granit</label>
          </div>
          <input
            type="checkbox"
            onChange={handleGranit}
            checked={isGranitChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/granodiorit.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Granodiorit</label>
          </div>
          <input
            type="checkbox"
            onChange={handleGranodiorit}
            checked={isGranodioritChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/marmer.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Marmer</label>
          </div>
          <input
            type="checkbox"
            onChange={handleMarmer}
            checked={isMarmerChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/pasir-laut.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Pasir Laut</label>
          </div>
          <input
            type="checkbox"
            onChange={handlePasirLaut}
            checked={isPasirLautChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/peridotit.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Peridotit</label>
          </div>
          <input
            type="checkbox"
            onChange={handlePeridotit}
            checked={isPeridotitChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/sirtu.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Sirtu</label>
          </div>
          <input
            type="checkbox"
            onChange={handleSirtu}
            checked={isSirtuChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/tras.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Tras</label>
          </div>
          <input
            type="checkbox"
            onChange={handleTras}
            checked={isTrasChecked}
          />
        </div>
      </div>
    </>
  );
};

export default ListBahanBangunan;
