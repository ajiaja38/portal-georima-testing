import { useDispatch, useSelector } from 'react-redux';
import sourceGeoRIMA from '../../../../api/resource/SourceGeorima';
import {
  setBallBonClay,
  setFelspar,
  setKaolin,
  setLempung,
  setMagnesit,
  setObsidian,
  setPerlit,
  setPirofilit,
  setToseki,
  setTrakhit,
  setIsBallBonClayChecked,
  setIsFelsparChecked,
  setIsKaolinChecked,
  setIsLempungChecked,
  setIsMagnesitChecked,
  setIsObsidianChecked,
  setIsPerlitChecked,
  setIsPirofilitChecked,
  setIsTosekiChecked,
  setIsTrakhitChecked,
  setIsBahanKeramikSelectedAll,
} from '../../../../redux/reducer/bahanKeramik.reducer';

const ListBahanKeramik = () => {
  const dispatch = useDispatch();
  const {
    isBallBonClayChecked,
    isFelsparChecked,
    isKaolinChecked,
    isLempungChecked,
    isMagnesitChecked,
    isObsidianChecked,
    isPerlitChecked,
    isPirofilitChecked,
    isTosekiChecked,
    isTrakhitChecked,
    isBahanKeramikSelectedAll,
  } = useSelector((state) => state.bahanKeramik);

  const handleBallBonClay = async () => {
    dispatch(setIsBallBonClayChecked(!isBallBonClayChecked));

    if (!isBallBonClayChecked) {
      const ballBonClay = await sourceGeoRIMA.getBallBondClay();
      dispatch(setBallBonClay(ballBonClay));
    } else {
      dispatch(setBallBonClay([]));
    }
  };

  const handleFelspar = async () => {
    dispatch(setIsFelsparChecked(!isFelsparChecked));

    if (!isFelsparChecked) {
      const felspar = await sourceGeoRIMA.getFelspar();
      dispatch(setFelspar(felspar));
    } else {
      dispatch(setFelspar([]));
    }
  };

  const handleKaolin = async () => {
    dispatch(setIsKaolinChecked(!isKaolinChecked));

    if (!isKaolinChecked) {
      const kaolin = await sourceGeoRIMA.getKaolin();
      dispatch(setKaolin(kaolin));
    } else {
      dispatch(setKaolin([]));
    }
  };

  const handleLempung = async () => {
    dispatch(setIsLempungChecked(!isLempungChecked));

    if (!isLempungChecked) {
      const lempung = await sourceGeoRIMA.getLempung();
      dispatch(setLempung(lempung));
    } else {
      dispatch(setLempung([]));
    }
  };

  const handleMagnesit = async () => {
    dispatch(setIsMagnesitChecked(!isMagnesitChecked));

    if (!isMagnesitChecked) {
      const magnesit = await sourceGeoRIMA.getMagnesit();
      dispatch(setMagnesit(magnesit));
    } else {
      dispatch(setMagnesit([]));
    }
  };

  const handleObsidian = async () => {
    dispatch(setIsObsidianChecked(!isObsidianChecked));

    if (!isObsidianChecked) {
      const obsidian = await sourceGeoRIMA.getObsidian();
      dispatch(setObsidian(obsidian));
    } else {
      dispatch(setObsidian([]));
    }
  };

  const handlePerlit = async () => {
    dispatch(setIsPerlitChecked(!isPerlitChecked));

    if (!isPerlitChecked) {
      const perlit = await sourceGeoRIMA.getPerlit();
      dispatch(setPerlit(perlit));
    } else {
      dispatch(setPerlit([]));
    }
  };

  const handlePirofilit = async () => {
    dispatch(setIsPirofilitChecked(!isPirofilitChecked));

    if (!isPirofilitChecked) {
      const pirofilit = await sourceGeoRIMA.getPirofilit();
      dispatch(setPirofilit(pirofilit));
    } else {
      dispatch(setPirofilit([]));
    }
  };

  const handleToseki = async () => {
    dispatch(setIsTosekiChecked(!isTosekiChecked));

    if (!isTosekiChecked) {
      const toseki = await sourceGeoRIMA.getToseki();
      dispatch(setToseki(toseki));
    } else {
      dispatch(setToseki([]));
    }
  };

  const handleTrakhit = async () => {
    dispatch(setIsTrakhitChecked(!isTrakhitChecked));

    if (!isTrakhitChecked) {
      const trakhit = await sourceGeoRIMA.getTrakhit();
      dispatch(setTrakhit(trakhit));
    } else {
      dispatch(setTrakhit([]));
    }
  };

  const handleSelectAll = async () => {
    dispatch(setIsBahanKeramikSelectedAll(!isBahanKeramikSelectedAll));

    if (!isBahanKeramikSelectedAll) {
      dispatch(setIsBallBonClayChecked(true));
      dispatch(setIsFelsparChecked(true));
      dispatch(setIsKaolinChecked(true));
      dispatch(setIsLempungChecked(true));
      dispatch(setIsMagnesitChecked(true));
      dispatch(setIsObsidianChecked(true));
      dispatch(setIsPerlitChecked(true));
      dispatch(setIsPirofilitChecked(true));
      dispatch(setIsTosekiChecked(true));
      dispatch(setIsTrakhitChecked(true));

      const ballBonClay = await sourceGeoRIMA.getBallBondClay();
      dispatch(setBallBonClay(ballBonClay));
      const felspar = await sourceGeoRIMA.getFelspar();
      dispatch(setFelspar(felspar));
      const kaolin = await sourceGeoRIMA.getKaolin();
      dispatch(setKaolin(kaolin));
      const lempung = await sourceGeoRIMA.getLempung();
      dispatch(setLempung(lempung));
      const magnesit = await sourceGeoRIMA.getMagnesit();
      dispatch(setMagnesit(magnesit));
      const obsidian = await sourceGeoRIMA.getObsidian();
      dispatch(setObsidian(obsidian));
      const perlit = await sourceGeoRIMA.getPerlit();
      dispatch(setPerlit(perlit));
      const pirofilit = await sourceGeoRIMA.getPirofilit();
      dispatch(setPirofilit(pirofilit));
      const toseki = await sourceGeoRIMA.getToseki();
      dispatch(setToseki(toseki));
      const trakhit = await sourceGeoRIMA.getTrakhit();
      dispatch(setTrakhit(trakhit));
    } else {
      dispatch(setIsBallBonClayChecked(false));
      dispatch(setIsFelsparChecked(false));
      dispatch(setIsKaolinChecked(false));
      dispatch(setIsLempungChecked(false));
      dispatch(setIsMagnesitChecked(false));
      dispatch(setIsObsidianChecked(false));
      dispatch(setIsPerlitChecked(false));
      dispatch(setIsPirofilitChecked(false));
      dispatch(setIsTosekiChecked(false));
      dispatch(setIsTrakhitChecked(false));

      dispatch(setBallBonClay([]));
      dispatch(setFelspar([]));
      dispatch(setKaolin([]));
      dispatch(setLempung([]));
      dispatch(setMagnesit([]));
      dispatch(setObsidian([]));
      dispatch(setPerlit([]));
      dispatch(setPirofilit([]));
      dispatch(setToseki([]));
      dispatch(setTrakhit([]));
    }
  };

  return (
    <>
      <div className="font-semibold flex mt-5 justify-between items-center">
        <h3>Bahan Keramik</h3>
        <div className="flex gap-1">
          <label className="text-xs font-light">Pilih Semua</label>
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={isBahanKeramikSelectedAll}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/ball.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Ball / Bond Clay</label>
          </div>
          <input
            type="checkbox"
            onChange={handleBallBonClay}
            checked={isBallBonClayChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/felspar.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Felspar</label>
          </div>
          <input
            type="checkbox"
            onChange={handleFelspar}
            checked={isFelsparChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/kaolin.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Kaolin</label>
          </div>
          <input
            type="checkbox"
            onChange={handleKaolin}
            checked={isKaolinChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/lempung.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Lempung</label>
          </div>
          <input
            type="checkbox"
            onChange={handleLempung}
            checked={isLempungChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/magnesit.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Magnesit</label>
          </div>
          <input
            type="checkbox"
            onChange={handleMagnesit}
            checked={isMagnesitChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/obsidian.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Obsidian</label>
          </div>
          <input
            type="checkbox"
            onChange={handleObsidian}
            checked={isObsidianChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/perlit.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Perlit</label>
          </div>
          <input
            type="checkbox"
            onChange={handlePerlit}
            checked={isPerlitChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/pirofilit.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Pirofilit</label>
          </div>
          <input
            type="checkbox"
            onChange={handlePirofilit}
            checked={isPirofilitChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/toseki.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Toseki</label>
          </div>
          <input
            type="checkbox"
            onChange={handleToseki}
            checked={isTosekiChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/trakhit.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Trakhit</label>
          </div>
          <input
            type="checkbox"
            onChange={handleTrakhit}
            checked={isTrakhitChecked}
          />
        </div>
      </div>
    </>
  );
};

export default ListBahanKeramik;
