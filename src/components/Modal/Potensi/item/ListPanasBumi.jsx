import { useDispatch, useSelector } from 'react-redux';
import sourceGeoRIMA from '../../../../api/resource/SourceGeorima';
import {
  setPendahuluanAwal,
  setPendahuluan,
  setRinci,
  setSiapDikembangkan,
  setTerpasang,
  setIsPendahuluanAwalIsChecked,
  setIsPendahuluanChecked,
  setIsRinciChecked,
  setIsSiapDikembangkanChecked,
  setIsTerPasangChecked,
  setIsPanasBumiSelectedAll,
} from '../../../../redux/reducer/panasBumi.reducer';

const ListItemPanasBumi = () => {
  const dispatch = useDispatch();
  const {
    isPendahuluanAwalChecked,
    isPendahuluanChecked,
    isRinciChecked,
    isSiapDikembangkanChecked,
    isTerpasangChecked,
    isPanasBumiSelectedAll,
  } = useSelector((state) => state.panasBumi);

  const handlePendahuluanAwal = async () => {
    dispatch(setIsPendahuluanAwalIsChecked(!isPendahuluanAwalChecked));

    if (!isPendahuluanAwalChecked) {
      const pendahuluanAwal = await sourceGeoRIMA.getPendahuluanAwal();
      dispatch(setPendahuluanAwal(pendahuluanAwal));
    } else {
      dispatch(setPendahuluanAwal([]));
    }
  };

  const handlePendahuluan = async () => {
    dispatch(setIsPendahuluanChecked(!isPendahuluanChecked));

    if (!isPendahuluanChecked) {
      const pendahuluan = await sourceGeoRIMA.getPendahuluan();
      dispatch(setPendahuluan(pendahuluan));
    } else {
      dispatch(setPendahuluan([]));
    }
  };

  const handleRinci = async () => {
    dispatch(setIsRinciChecked(!isRinciChecked));

    if (!isRinciChecked) {
      const rinci = await sourceGeoRIMA.getRinci();
      dispatch(setRinci(rinci));
    } else {
      dispatch(setRinci([]));
    }
  };

  const handleSiapDIkembangkan = async () => {
    dispatch(setIsSiapDikembangkanChecked(!isSiapDikembangkanChecked));

    if (!isSiapDikembangkanChecked) {
      const siapDikembangkan = await sourceGeoRIMA.getSiapDikembangkan();
      dispatch(setSiapDikembangkan(siapDikembangkan));
    } else {
      dispatch(setSiapDikembangkan([]));
    }
  };

  const handleTerpasang = async () => {
    dispatch(setIsTerPasangChecked(!isTerpasangChecked));

    if (!isTerpasangChecked) {
      const terpasang = await sourceGeoRIMA.getTerpasang();
      dispatch(setTerpasang(terpasang));
    } else {
      dispatch(setTerpasang([]));
    }
  };

  const handleSelectAll = async () => {
    dispatch(setIsPanasBumiSelectedAll(!isPanasBumiSelectedAll));

    if (!isPanasBumiSelectedAll) {
      dispatch(setIsPendahuluanAwalIsChecked(true));
      dispatch(setIsPendahuluanChecked(true));
      dispatch(setIsRinciChecked(true));
      dispatch(setIsSiapDikembangkanChecked(true));
      dispatch(setIsTerPasangChecked(true));

      const pendahuluanAwal = await sourceGeoRIMA.getPendahuluanAwal();
      dispatch(setPendahuluanAwal(pendahuluanAwal));
      const pendahuluan = await sourceGeoRIMA.getPendahuluan();
      dispatch(setPendahuluan(pendahuluan));
      const rinci = await sourceGeoRIMA.getRinci();
      dispatch(setRinci(rinci));
      const siapDikembangkan = await sourceGeoRIMA.getSiapDikembangkan();
      dispatch(setSiapDikembangkan(siapDikembangkan));
    } else {
      dispatch(setIsPendahuluanAwalIsChecked(false));
      dispatch(setIsPendahuluanChecked(false));
      dispatch(setIsRinciChecked(false));
      dispatch(setIsSiapDikembangkanChecked(false));
      dispatch(setIsTerPasangChecked(false));

      dispatch(setPendahuluanAwal([]));
      dispatch(setPendahuluan([]));
      dispatch(setRinci([]));
      dispatch(setSiapDikembangkan([]));
      dispatch(setTerpasang([]));
    }
  };

  return (
    <div className="h-fit mt-2 animate__animated animate__fadeIn">
      <div className="font-semibold flex justify-between items-center">
        <div className="flex gap-1">
          <label className="text-xs font-light">Pilih Semua</label>
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={isPanasBumiSelectedAll}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/icon1.png"
              alt="icon"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Survey Pendahuluan Awal</label>
          </div>
          <input
            type="checkbox"
            onChange={handlePendahuluanAwal}
            checked={isPendahuluanAwalChecked}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/icon2.png"
              alt="icon"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Survey Pendahuluan</label>
          </div>
          <input
            type="checkbox"
            onChange={handlePendahuluan}
            checked={isPendahuluanChecked}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/icon3.png"
              alt="icon"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Survey Rinci</label>
          </div>
          <input
            type="checkbox"
            onChange={handleRinci}
            checked={isRinciChecked}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/icon4.png"
              alt="icon"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Siap Dikembangkan</label>
          </div>
          <input
            type="checkbox"
            onChange={handleSiapDIkembangkan}
            checked={isSiapDikembangkanChecked}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/icon5.png"
              alt="icon"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Terpasang</label>
          </div>
          <input
            type="checkbox"
            onChange={handleTerpasang}
            checked={isTerpasangChecked}
          />
        </div>
      </div>
    </div>
  );
};

export default ListItemPanasBumi;
