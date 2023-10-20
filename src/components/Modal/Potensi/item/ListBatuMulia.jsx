import { useDispatch, useSelector } from 'react-redux';
import sourceGeoRIMA from '../../../../api/resource/SourceGeorima';
import {
  setAmetis,
  setBatuHias,
  setIntan,
  setJasper,
  setKalsedon,
  setOniks,
  setOpal,
  setRijang,
  setIsBatuMuliaSelectedAll,
  setIsAmetisChecked,
  setIsBatuHiasChecked,
  setIsIntanChecked,
  setIsJasperChecked,
  setIsKalsedonChecked,
  setIsOniksChecked,
  setIsOpalChecked,
  setIsRijangIsChecked,
} from '../../../../redux/reducer/batuMulia.reducer';

const ListBatuMulia = () => {
  const dispatch = useDispatch();
  const {
    isAmetisChecked,
    isbatuHiasChecked,
    isIntaChecked,
    isJasperChecked,
    isKaldesonChecked,
    isOniksChecked,
    isOpalChecked,
    isRijangChecked,
    isBatuMuliaSelectedAll,
  } = useSelector((state) => state.batuMulia);

  const handleAmetis = async () => {
    dispatch(setIsAmetisChecked(!isAmetisChecked));

    if (!isAmetisChecked) {
      const ametis = await sourceGeoRIMA.getAmetis();
      dispatch(setAmetis(ametis));
    } else {
      dispatch(setAmetis([]));
    }
  };

  const handleBatuHias = async () => {
    dispatch(setIsBatuHiasChecked(!isbatuHiasChecked));

    if (!isbatuHiasChecked) {
      const batuHias = await sourceGeoRIMA.getBatuHias();
      dispatch(setBatuHias(batuHias));
    } else {
      dispatch(setBatuHias([]));
    }
  };

  const handleIntan = async () => {
    dispatch(setIsIntanChecked(!isIntaChecked));

    if (!isIntaChecked) {
      const intan = await sourceGeoRIMA.getIntan();
      dispatch(setIntan(intan));
    } else {
      dispatch(setIntan([]));
    }
  };

  const handleJasper = async () => {
    dispatch(setIsJasperChecked(!isJasperChecked));

    if (!isJasperChecked) {
      const jasper = await sourceGeoRIMA.getJasper();
      dispatch(setJasper(jasper));
    } else {
      dispatch(setJasper([]));
    }
  };

  const handleKalsedon = async () => {
    dispatch(setIsKalsedonChecked(!isKaldesonChecked));

    if (!isKaldesonChecked) {
      const kalsedon = await sourceGeoRIMA.getKalsedon();
      dispatch(setKalsedon(kalsedon));
    } else {
      dispatch(setKalsedon([]));
    }
  };

  const handleOniks = async () => {
    dispatch(setIsOniksChecked(!isOniksChecked));

    if (!isOniksChecked) {
      const oniks = await sourceGeoRIMA.getOniks();
      dispatch(setOniks(oniks));
    } else {
      dispatch(setOniks([]));
    }
  };

  const handleOpal = async () => {
    dispatch(setIsOpalChecked(!isOpalChecked));

    if (!isOpalChecked) {
      const opal = await sourceGeoRIMA.getOpal();
      dispatch(setOpal(opal));
    } else {
      dispatch(setOpal([]));
    }
  };

  const handleRijang = async () => {
    dispatch(setIsRijangIsChecked(!isRijangChecked));

    if (!isRijangChecked) {
      const rijang = await sourceGeoRIMA.getRijang();
      dispatch(setRijang(rijang));
    } else {
      dispatch(setRijang([]));
    }
  };

  const handleSelectAll = async () => {
    dispatch(setIsBatuMuliaSelectedAll(!isBatuMuliaSelectedAll));

    if (!isBatuMuliaSelectedAll) {
      dispatch(setIsAmetisChecked(true));
      dispatch(setIsBatuHiasChecked(true));
      dispatch(setIsIntanChecked(true));
      dispatch(setIsJasperChecked(true));
      dispatch(setIsKalsedonChecked(true));
      dispatch(setIsOniksChecked(true));
      dispatch(setIsOpalChecked(true));
      dispatch(setIsRijangIsChecked(true));

      const ametis = await sourceGeoRIMA.getAmetis();
      dispatch(setAmetis(ametis));
      const batuHias = await sourceGeoRIMA.getBatuHias();
      dispatch(setBatuHias(batuHias));
      const intan = await sourceGeoRIMA.getIntan();
      dispatch(setIntan(intan));
      const jasper = await sourceGeoRIMA.getJasper();
      dispatch(setJasper(jasper));
      const kalsedon = await sourceGeoRIMA.getKalsedon();
      dispatch(setKalsedon(kalsedon));
      const oniks = await sourceGeoRIMA.getOniks();
      dispatch(setOniks(oniks));
      const opal = await sourceGeoRIMA.getOpal();
      dispatch(setOpal(opal));
      const rijang = await sourceGeoRIMA.getRijang();
      dispatch(setRijang(rijang));
    } else {
      dispatch(setIsAmetisChecked(false));
      dispatch(setIsBatuHiasChecked(false));
      dispatch(setIsIntanChecked(false));
      dispatch(setIsJasperChecked(false));
      dispatch(setIsKalsedonChecked(false));
      dispatch(setIsOniksChecked(false));
      dispatch(setIsOpalChecked(false));
      dispatch(setIsRijangIsChecked(false));

      dispatch(setAmetis([]));
      dispatch(setBatuHias([]));
      dispatch(setIntan([]));
      dispatch(setJasper([]));
      dispatch(setKalsedon([]));
      dispatch(setOniks([]));
      dispatch(setOpal([]));
      dispatch(setRijang([]));
    }
  };

  return (
    <>
      <div className="font-semibold flex mt-5 justify-between items-center">
        <h3>Batu Mulia</h3>
        <div className="flex gap-1">
          <label className="text-xs font-light">Pilih Semua</label>
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={isBatuMuliaSelectedAll}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/ametis.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Ametis</label>
          </div>
          <input
            type="checkbox"
            onChange={handleAmetis}
            checked={isAmetisChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/batu-hias.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Batu Hias</label>
          </div>
          <input
            type="checkbox"
            onChange={handleBatuHias}
            checked={isbatuHiasChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/intan.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">intan</label>
          </div>
          <input
            type="checkbox"
            onChange={handleIntan}
            checked={isIntaChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/jasper.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Jasper</label>
          </div>
          <input
            type="checkbox"
            onChange={handleJasper}
            checked={isJasperChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/kalsedon.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Kalsedon</label>
          </div>
          <input
            type="checkbox"
            onChange={handleKalsedon}
            checked={isKaldesonChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/oniks.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Oniks</label>
          </div>
          <input
            type="checkbox"
            onChange={handleOniks}
            checked={isOniksChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/opal.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Opal</label>
          </div>
          <input
            type="checkbox"
            onChange={handleOpal}
            checked={isOpalChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/rijang.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Rijang</label>
          </div>
          <input
            type="checkbox"
            onChange={handleRijang}
            checked={isRijangChecked}
          />
        </div>
      </div>
    </>
  );
};

export default ListBatuMulia;
