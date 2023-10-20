import { useDispatch, useSelector } from 'react-redux';
import sourceGeoRIMA from '../../../../api/resource/SourceGeorima';
import {
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
} from '../../../../redux/reducer/logamBesi.reducer';

const ListLogamBesi = () => {
  const dispatch = useDispatch();
  const {
    isBesiLateritChecked,
    isBesiPrimerChecked,
    isBesiSedimenChecked,
    isKobalChecked,
    isKromitChecked,
    isKromitPlaserChecked,
    isManganChecked,
    isMolibdenumChecked,
    isNikelChecked,
    isPasirBesiChecked,
    isVanadiumChecked,
    isLogamBesiSelectedAll,
  } = useSelector((state) => state.logamBesi);

  const handleBesiLaterit = async () => {
    dispatch(setIsBesiLateritChecked(!isBesiLateritChecked));

    if (!isBesiLateritChecked) {
      const besiLaterit = await sourceGeoRIMA.getBesiLaterit();
      dispatch(setBesiLaterit(besiLaterit));
    } else {
      dispatch(setBesiLaterit([]));
    }
  };

  const handleBesiPrimer = async () => {
    dispatch(setIsBesiPrimerChecked(!isBesiPrimerChecked));

    if (!isBesiPrimerChecked) {
      const besiPrimer = await sourceGeoRIMA.getBesiPrimer();
      dispatch(setBesiPrimer(besiPrimer));
    } else {
      dispatch(setBesiPrimer([]));
    }
  };

  const handleBesiSedimen = async () => {
    dispatch(setIsBesiSedimenChecked(!isBesiSedimenChecked));

    if (!isBesiSedimenChecked) {
      const besiSedimen = await sourceGeoRIMA.getBesiSedimen();
      dispatch(setBesiSedimen(besiSedimen));
    } else {
      dispatch(setBesiSedimen([]));
    }
  };

  const handleKobal = async () => {
    dispatch(setIsKobalIsChecked(!isKobalChecked));

    if (!isKobalChecked) {
      const kobal = await sourceGeoRIMA.getKobal();
      dispatch(setKobal(kobal));
    } else {
      dispatch(setKobal([]));
    }
  };

  const handleKromit = async () => {
    dispatch(setIsKromitChecked(!isKromitChecked));

    if (!isKromitChecked) {
      const kromit = await sourceGeoRIMA.getKromit();
      dispatch(setKromit(kromit));
    } else {
      dispatch(setKromit([]));
    }
  };

  const handleKromitPlaser = async () => {
    dispatch(setIsKromitPlaserChecked(!isKromitPlaserChecked));

    if (!isKromitPlaserChecked) {
      const kromitPlaser = await sourceGeoRIMA.getKromitPlaser();
      dispatch(setKromitPlaser(kromitPlaser));
    } else {
      dispatch(setKromitPlaser([]));
    }
  };

  const handleMangan = async () => {
    dispatch(setIsManganChecked(!isManganChecked));

    if (!isManganChecked) {
      const mangan = await sourceGeoRIMA.getMangan();
      dispatch(setMangan(mangan));
    } else {
      dispatch(setMangan([]));
    }
  };

  const handleMolibdenum = async () => {
    dispatch(setIsMolibdenumChecked(!isMolibdenumChecked));

    if (!isMolibdenumChecked) {
      const molibdenum = await sourceGeoRIMA.getMolibdenum();
      dispatch(setMolibdenum(molibdenum));
    } else {
      dispatch(setMolibdenum([]));
    }
  };

  const handleNikel = async () => {
    dispatch(setIsNikelChecked(!isNikelChecked));

    if (!isNikelChecked) {
      const nikel = await sourceGeoRIMA.getNikel();
      dispatch(setNikel(nikel));
    } else {
      dispatch(setNikel([]));
    }
  };

  const handlePasirBesi = async () => {
    dispatch(setIsPasirBersChecked(!isPasirBesiChecked));

    if (!isPasirBesiChecked) {
      const pasirBesi = await sourceGeoRIMA.getPasirBesi();
      dispatch(setPasirBesi(pasirBesi));
    } else {
      dispatch(setPasirBesi([]));
    }
  };

  const handleVanadium = async () => {
    dispatch(setIsVanadiumChecked(!isVanadiumChecked));

    if (!isVanadiumChecked) {
      const vanadium = await sourceGeoRIMA.getVanadium();
      dispatch(setVanadium(vanadium));
    } else {
      dispatch(setVanadium([]));
    }
  };

  const handleSelectAll = async () => {
    dispatch(setIsLogamBesiSelectedAll(!isLogamBesiSelectedAll));

    if (!isLogamBesiSelectedAll) {
      dispatch(setIsBesiLateritChecked(true));
      dispatch(setIsBesiPrimerChecked(true));
      dispatch(setIsBesiSedimenChecked(true));
      dispatch(setIsKobalIsChecked(true));
      dispatch(setIsKromitChecked(true));
      dispatch(setIsKromitPlaserChecked(true));
      dispatch(setIsManganChecked(true));
      dispatch(setIsMolibdenumChecked(true));
      dispatch(setIsNikelChecked(true));
      dispatch(setIsPasirBersChecked(true));
      dispatch(setIsVanadiumChecked(true));

      const besiLaterit = await sourceGeoRIMA.getBesiLaterit();
      dispatch(setBesiLaterit(besiLaterit));
      const besiPrimer = await sourceGeoRIMA.getBesiPrimer();
      dispatch(setBesiPrimer(besiPrimer));
      const besiSedimen = await sourceGeoRIMA.getBesiSedimen();
      dispatch(setBesiSedimen(besiSedimen));
      const kobal = await sourceGeoRIMA.getKobal();
      dispatch(setKobal(kobal));
      const kromit = await sourceGeoRIMA.getKromit();
      dispatch(setKromit(kromit));
      const kromitPlaser = await sourceGeoRIMA.getKromitPlaser();
      dispatch(setKromitPlaser(kromitPlaser));
      const mangan = await sourceGeoRIMA.getMangan();
      dispatch(setMangan(mangan));
      const molibdenum = await sourceGeoRIMA.getMolibdenum();
      dispatch(setMolibdenum(molibdenum));
      const nikel = await sourceGeoRIMA.getNikel();
      dispatch(setNikel(nikel));
      const pasirBesi = await sourceGeoRIMA.getPasirBesi();
      dispatch(setPasirBesi(pasirBesi));
      const vanadium = await sourceGeoRIMA.getVanadium();
      dispatch(setVanadium(vanadium));
    } else {
      dispatch(setIsBesiLateritChecked(false));
      dispatch(setIsBesiPrimerChecked(false));
      dispatch(setIsBesiSedimenChecked(false));
      dispatch(setIsKobalIsChecked(false));
      dispatch(setIsKromitChecked(false));
      dispatch(setIsKromitPlaserChecked(false));
      dispatch(setIsManganChecked(false));
      dispatch(setIsMolibdenumChecked(false));
      dispatch(setIsNikelChecked(false));
      dispatch(setIsPasirBersChecked(false));
      dispatch(setIsVanadiumChecked(false));

      dispatch(setBesiLaterit([]));
      dispatch(setBesiPrimer([]));
      dispatch(setBesiSedimen([]));
      dispatch(setKobal([]));
      dispatch(setKromit([]));
      dispatch(setKromitPlaser([]));
      dispatch(setMangan([]));
      dispatch(setMolibdenum([]));
      dispatch(setNikel([]));
      dispatch(setPasirBesi([]));
      dispatch(setVanadium([]));
    }
  };

  return (
    <>
      <div className="font-semibold flex mt-5 justify-between items-center">
        <h3>Logam Besi Dan Paduan Besi</h3>
        <div className="flex gap-1">
          <label className="text-xs font-light">Pilih Semua</label>
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={isLogamBesiSelectedAll}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/besi-laterit.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Besi Laterit</label>
          </div>
          <input
            type="checkbox"
            onChange={handleBesiLaterit}
            checked={isBesiLateritChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/besi-primer.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Besi Primer</label>
          </div>
          <input
            type="checkbox"
            onChange={handleBesiPrimer}
            checked={isBesiPrimerChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/besi-sedimen.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Besi Sedimen</label>
          </div>
          <input
            type="checkbox"
            onChange={handleBesiSedimen}
            checked={isBesiSedimenChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/kobal.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Kobal</label>
          </div>
          <input
            type="checkbox"
            onChange={handleKobal}
            checked={isKobalChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/kromit.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Kromit</label>
          </div>
          <input
            type="checkbox"
            onChange={handleKromit}
            checked={isKromitChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/kromit-plaser.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Kromit Plaser</label>
          </div>
          <input
            type="checkbox"
            onChange={handleKromitPlaser}
            checked={isKromitPlaserChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/mangan.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Mangan</label>
          </div>
          <input
            type="checkbox"
            onChange={handleMangan}
            checked={isManganChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/molibdenum.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Molibdenum</label>
          </div>
          <input
            type="checkbox"
            onChange={handleMolibdenum}
            checked={isMolibdenumChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/nikel.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Nikel</label>
          </div>
          <input
            type="checkbox"
            onChange={handleNikel}
            checked={isNikelChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/pasir-besi.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Pasir Besi</label>
          </div>
          <input
            type="checkbox"
            onChange={handlePasirBesi}
            checked={isPasirBesiChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/vanadium.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Vanadium</label>
          </div>
          <input
            type="checkbox"
            onChange={handleVanadium}
            checked={isVanadiumChecked}
          />
        </div>
      </div>
    </>
  );
};

export default ListLogamBesi;
