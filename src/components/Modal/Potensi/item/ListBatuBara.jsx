import { useDispatch, useSelector } from 'react-redux';
import sourceGeoRIMA from '../../../../api/resource/SourceGeorima';
import {
  setBatuBaraRendah,
  setBatuBaraSedang,
  setBatuBaraSangatTinggi,
  setBatuBaraTinggi,
  setIsRendahChecked,
  setIsSedangChecked,
  setIsTinggiChecked,
  setIsSangatTinggiChecked,
  setIsSelectAllChecked,
} from '../../../../redux/reducer/batuBara.reducer';

const ListItemBatuBara = () => {
  const dispatch = useDispatch();
  const {
    isRendahChecked,
    isSedangChecked,
    isTinggiChecked,
    isSangatTinggiChecked,
    isSelecAllChecked,
  } = useSelector((state) => state.batuBara);

  const handleRendah = async () => {
    dispatch(setIsRendahChecked(!isRendahChecked));

    if (!isRendahChecked) {
      const response = await sourceGeoRIMA.getBatuBaraRendah();
      dispatch(setBatuBaraRendah(response));
    } else {
      dispatch(setBatuBaraRendah([]));
    }
  };

  const handleSedang = async () => {
    dispatch(setIsSedangChecked(!isSedangChecked));

    if (!isSedangChecked) {
      const response = await sourceGeoRIMA.getBatuBaraSedang();
      dispatch(setBatuBaraSedang(response));
    } else {
      dispatch(setBatuBaraSedang([]));
    }
  };

  const handleTinggi = async () => {
    dispatch(setIsTinggiChecked(!isTinggiChecked));

    if (!isTinggiChecked) {
      const response = await sourceGeoRIMA.getBatuBaraTinggi();
      dispatch(setBatuBaraTinggi(response));
    } else {
      dispatch(setBatuBaraTinggi([]));
    }
  };

  const handleSangatTinggi = async () => {
    dispatch(setIsSangatTinggiChecked(!isSangatTinggiChecked));

    if (!isSangatTinggiChecked) {
      const response = await sourceGeoRIMA.getBatuBaraSangatTinggi();
      dispatch(setBatuBaraSangatTinggi(response));
    } else {
      dispatch(setBatuBaraSangatTinggi([]));
    }
  };

  const handleCheckAllChange = async () => {
    dispatch(setIsSelectAllChecked(!isSelecAllChecked));

    if (!isSelecAllChecked) {
      dispatch(setIsRendahChecked(true));
      dispatch(setIsSedangChecked(true));
      dispatch(setIsTinggiChecked(true));
      dispatch(setIsSangatTinggiChecked(true));

      const responseRendah = await sourceGeoRIMA.getBatuBaraRendah();
      dispatch(setBatuBaraRendah(responseRendah));

      const responseSedang = await sourceGeoRIMA.getBatuBaraSedang();
      dispatch(setBatuBaraSedang(responseSedang));

      const responseTinggi = await sourceGeoRIMA.getBatuBaraTinggi();
      dispatch(setBatuBaraTinggi(responseTinggi));

      const responseSangatTinggi =
        await sourceGeoRIMA.getBatuBaraSangatTinggi();
      dispatch(setBatuBaraSangatTinggi(responseSangatTinggi));
    } else {
      dispatch(setIsRendahChecked(false));
      dispatch(setIsSedangChecked(false));
      dispatch(setIsTinggiChecked(false));
      dispatch(setIsSangatTinggiChecked(false));

      dispatch(setBatuBaraRendah([]));
      dispatch(setBatuBaraSedang([]));
      dispatch(setBatuBaraTinggi([]));
      dispatch(setBatuBaraSangatTinggi([]));
    }
  };

  return (
    <div className="h-fit mt-2 animate__animated animate__fadeIn">
      <div className="font-semibold flex justify-between items-center">
        <div className="flex gap-1">
          <label className="text-xs font-light">Pilih Semua</label>
          <input
            type="checkbox"
            onChange={handleCheckAllChange}
            checked={isSelecAllChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src={`https://georima.pptik.id/data/data-georima/icon/rendah.png`}
              alt="icon"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Rendah ({`< 5100 Kal/Gram`})</label>
          </div>
          <input
            type="checkbox"
            onChange={handleRendah}
            checked={isRendahChecked}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src={`https://georima.pptik.id/data/data-georima/icon/Sedang.png`}
              alt="icon"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Sedang (5100-6100 Kal/Gram)</label>
          </div>
          <input
            type="checkbox"
            onChange={handleSedang}
            checked={isSedangChecked}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src={`https://georima.pptik.id/data/data-georima/icon/tinggi.png`}
              alt="icon"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Tinggi (6100-7100 Kal/Gram)</label>
          </div>
          <input
            type="checkbox"
            onChange={handleTinggi}
            checked={isTinggiChecked}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src={`https://georima.pptik.id/data/data-georima/icon/sangat-tinggi.png`}
              alt="icon"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">
              Sangat Tinggi ({`>7100 Kal/Gram`})
            </label>
          </div>
          <input
            type="checkbox"
            onChange={handleSangatTinggi}
            checked={isSangatTinggiChecked}
          />
        </div>
      </div>
    </div>
  );
};

export default ListItemBatuBara;
