import { useDispatch, useSelector } from 'react-redux';
import {
  setAirRaksa,
  setAntimon,
  setSeng,
  setTembaga,
  setTimah,
  setTimbal,
  setIsAirRaksaChecked,
  setIsAntimonChecked,
  setIsSengChecked,
  setIsTembagaChecked,
  setIsTimahChecked,
  setIsTimbalChecked,
  setIsSelectedAllLogamDasarChecked,
} from '../../../../redux/reducer/logamdasar.reducer';
import sourceGeoRIMA from '../../../../api/resource/SourceGeorima';

const ListLogamDasar = () => {
  const dispatch = useDispatch();
  const {
    isAirRaksaChecked,
    isAntimonChecked,
    isSengChecked,
    isTembagaChecked,
    isTimahChecked,
    isTimbalChecked,
    isSelectedAllLogamDasarChecked,
  } = useSelector((state) => state.logamDasar);

  const handleAirRaksa = async () => {
    dispatch(setIsAirRaksaChecked(!isAirRaksaChecked));

    if (!isAirRaksaChecked) {
      const airRaksa = await sourceGeoRIMA.getAirRaksa();
      dispatch(setAirRaksa(airRaksa));
    } else {
      dispatch(setAirRaksa([]));
    }
  };

  const handleAntimon = async () => {
    dispatch(setIsAntimonChecked(!isAntimonChecked));

    if (!isAntimonChecked) {
      const antimon = await sourceGeoRIMA.getAntimon();
      dispatch(setAntimon(antimon));
    } else {
      dispatch(setAntimon([]));
    }
  };

  const handleSeng = async () => {
    dispatch(setIsSengChecked(!isSengChecked));

    if (!isSengChecked) {
      const seng = await sourceGeoRIMA.getSeng();
      dispatch(setSeng(seng));
    } else {
      dispatch(setSeng([]));
    }
  };

  const handleTembaga = async () => {
    dispatch(setIsTembagaChecked(!isTembagaChecked));

    if (!isTembagaChecked) {
      const tembaga = await sourceGeoRIMA.getTembaga();
      dispatch(setTembaga(tembaga));
    } else {
      dispatch(setTembaga([]));
    }
  };

  const handleTimah = async () => {
    dispatch(setIsTimahChecked(!isTimahChecked));

    if (!isTimahChecked) {
      const timah = await sourceGeoRIMA.getTimah();
      dispatch(setTimah(timah));
    } else {
      dispatch(setTimah([]));
    }
  };

  const handleTimbal = async () => {
    dispatch(setIsTimbalChecked(!isTimbalChecked));

    if (!isTimbalChecked) {
      const timbal = await sourceGeoRIMA.getTimbal();
      dispatch(setTimbal(timbal));
    } else {
      dispatch(setTimbal([]));
    }
  };

  const handleSelectAll = async () => {
    dispatch(
      setIsSelectedAllLogamDasarChecked(!isSelectedAllLogamDasarChecked),
    );

    if (!isSelectedAllLogamDasarChecked) {
      dispatch(setIsAirRaksaChecked(true));
      dispatch(setIsAntimonChecked(true));
      dispatch(setIsSengChecked(true));
      dispatch(setIsTembagaChecked(true));
      dispatch(setIsTimahChecked(true));
      dispatch(setIsTimbalChecked(true));

      const airRaksa = await sourceGeoRIMA.getAirRaksa();
      dispatch(setAirRaksa(airRaksa));
      const antimon = await sourceGeoRIMA.getAntimon();
      dispatch(setAntimon(antimon));
      const seng = await sourceGeoRIMA.getSeng();
      dispatch(setSeng(seng));
      const tembaga = await sourceGeoRIMA.getTembaga();
      dispatch(setTembaga(tembaga));
      const timah = await sourceGeoRIMA.getTimah();
      dispatch(setTimah(timah));
      const timbal = await sourceGeoRIMA.getTimbal();
      dispatch(setTimbal(timbal));
    } else {
      dispatch(setIsAirRaksaChecked(false));
      dispatch(setIsAntimonChecked(false));
      dispatch(setIsSengChecked(false));
      dispatch(setIsTembagaChecked(false));
      dispatch(setIsTimahChecked(false));
      dispatch(setIsTimbalChecked(false));

      dispatch(setAirRaksa([]));
      dispatch(setAntimon([]));
      dispatch(setSeng([]));
      dispatch(setTembaga([]));
      dispatch(setTimah([]));
      dispatch(setTimbal([]));
    }
  };

  return (
    <>
      <div className="font-semibold flex mt-5 justify-between items-center">
        <h3>Logam Dasar</h3>
        <div className="flex gap-1">
          <label className="text-xs font-light">Pilih Semua</label>
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={isSelectedAllLogamDasarChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/air-raksa.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Air Raksa</label>
          </div>
          <input
            type="checkbox"
            onChange={handleAirRaksa}
            checked={isAirRaksaChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/antimon.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Antimon</label>
          </div>
          <input
            type="checkbox"
            onChange={handleAntimon}
            checked={isAntimonChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/seng.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Seng</label>
          </div>
          <input
            type="checkbox"
            onChange={handleSeng}
            checked={isSengChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/tembaga.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Tembaga</label>
          </div>
          <input
            type="checkbox"
            onChange={handleTembaga}
            checked={isTembagaChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/timah.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Timah</label>
          </div>
          <input
            type="checkbox"
            onChange={handleTimah}
            checked={isTimahChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/timbal.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Timbal</label>
          </div>
          <input
            type="checkbox"
            onChange={handleTimbal}
            checked={isTimbalChecked}
          />
        </div>
      </div>
    </>
  );
};

export default ListLogamDasar;
