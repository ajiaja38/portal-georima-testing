import { useDispatch, useSelector } from 'react-redux';
import sourceGeoRIMA from '../../../../api/resource/SourceGeorima';
import {
  setBauksit,
  setMonasit,
  setTitanPlaser,
  setTitanLaterit,
  setXenotim,
  setIsBauksitChecked,
  setIsMonasitChecked,
  setIsTitanPlaserChecked,
  setIsTitanLateritChecked,
  setIsXenotimChecked,
  setIsLogamRinganSelecAllChecked,
} from '../../../../redux/reducer/logamRingan.reducer';

const ListLogamRingan = () => {
  const dispatch = useDispatch();
  const {
    isBauksitChecked,
    isMonasitChecked,
    isTitanPlaserChecked,
    isTitanLateritChecked,
    isXenotimChecked,
    isLogamRinganSelecAllChecked,
  } = useSelector((state) => state.logamRingan);

  const handleBauksit = async () => {
    dispatch(setIsBauksitChecked(!isBauksitChecked));

    if (!isBauksitChecked) {
      const response = await sourceGeoRIMA.getBauksit();
      dispatch(setBauksit(response));
    } else {
      dispatch(setBauksit([]));
    }
  };

  const handleMonasit = async () => {
    dispatch(setIsMonasitChecked(!isMonasitChecked));

    if (!isMonasitChecked) {
      const response = await sourceGeoRIMA.getMonasit();
      dispatch(setMonasit(response));
    } else {
      dispatch(setMonasit([]));
    }
  };

  const handleTitanPlaser = async () => {
    dispatch(setIsTitanPlaserChecked(!isTitanPlaserChecked));

    if (!isTitanPlaserChecked) {
      const response = await sourceGeoRIMA.getTitanPlaser();
      dispatch(setTitanPlaser(response));
    } else {
      dispatch(setTitanPlaser([]));
    }
  };

  const handleTitanLaterit = async () => {
    dispatch(setIsTitanLateritChecked(!isTitanLateritChecked));

    if (!isTitanLateritChecked) {
      const response = await sourceGeoRIMA.getTitanLaterit();
      dispatch(setTitanLaterit(response));
    } else {
      dispatch(setTitanLaterit([]));
    }
  };

  const handleXenotim = async () => {
    dispatch(setIsXenotimChecked(!isXenotimChecked));

    if (!isXenotimChecked) {
      const response = await sourceGeoRIMA.getXenotim();
      dispatch(setXenotim(response));
    } else {
      dispatch(setXenotim([]));
    }
  };

  const handleCheckAll = async () => {
    dispatch(setIsLogamRinganSelecAllChecked(!isLogamRinganSelecAllChecked));

    if (!isLogamRinganSelecAllChecked) {
      dispatch(setIsBauksitChecked(true));
      dispatch(setIsMonasitChecked(true));
      dispatch(setIsTitanPlaserChecked(true));
      dispatch(setIsTitanLateritChecked(true));
      dispatch(setIsXenotimChecked(true));

      const responseBauksit = await sourceGeoRIMA.getBauksit();
      dispatch(setBauksit(responseBauksit));

      const responseMonasit = await sourceGeoRIMA.getMonasit();
      dispatch(setMonasit(responseMonasit));

      const responseTitanLaterit = await sourceGeoRIMA.getTitanLaterit();
      dispatch(setTitanLaterit(responseTitanLaterit));

      const responseTitanPlaser = await sourceGeoRIMA.getTitanPlaser();
      dispatch(setTitanPlaser(responseTitanPlaser));

      const responseXenotim = await sourceGeoRIMA.getXenotim();
      dispatch(setXenotim(responseXenotim));
    } else {
      dispatch(setIsBauksitChecked(false));
      dispatch(setIsMonasitChecked(false));
      dispatch(setIsTitanPlaserChecked(false));
      dispatch(setIsTitanLateritChecked(false));
      dispatch(setIsXenotimChecked(false));

      dispatch(setBauksit([]));
      dispatch(setMonasit([]));
      dispatch(setTitanPlaser([]));
      dispatch(setTitanLaterit([]));
      dispatch(setXenotim([]));
    }
  };

  return (
    <>
      <div className="font-semibold flex mt-5 justify-between items-center">
        <h3>Logam Ringan dan Langka</h3>
        <div className="flex gap-1">
          <label className="text-xs font-light">Pilih Semua</label>
          <input
            type="checkbox"
            onChange={handleCheckAll}
            checked={isLogamRinganSelecAllChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/bauksit.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Bauksit</label>
          </div>
          <input
            type="checkbox"
            onChange={handleBauksit}
            checked={isBauksitChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/monasit.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Monasit</label>
          </div>
          <input
            type="checkbox"
            onChange={handleMonasit}
            checked={isMonasitChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/titan-laterit.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Titan Laterit</label>
          </div>
          <input
            type="checkbox"
            onChange={handleTitanLaterit}
            checked={isTitanLateritChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/titan-plaser.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Titan Plaser</label>
          </div>
          <input
            type="checkbox"
            onChange={handleTitanPlaser}
            checked={isTitanPlaserChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/xenotim.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Xenotim</label>
          </div>
          <input
            type="checkbox"
            onChange={handleXenotim}
            checked={isXenotimChecked}
          />
        </div>
      </div>
    </>
  );
};

export default ListLogamRingan;
