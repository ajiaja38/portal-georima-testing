import { useDispatch, useSelector } from 'react-redux';
import {
  setBarit,
  setBatuanPembawaKalium,
  setBatuApung,
  setBatuGamping,
  setBatuKuarsa,
  setBelerang,
  setBentonit,
  setDiatomea,
  setFosfat,
  setGipsum,
  setKalsit,
  setKuarsit,
  setOker,
  setPasirKuarsa,
  setPasirZirkon,
  setPrehnit,
  setSerpentin,
  setTalk,
  setTravertin,
  setUltrabasa,
  setYodium,
  setZeolit,
  setIsBaritChecked,
  setIsBatuanPembawaKaliumChecked,
  setIsBatuApungChecked,
  setIsBatuGampingChecked,
  setIsBatuKuarsaChecked,
  setIsBelerangChecked,
  setIsBentonitChecked,
  setIsDiatomeaChecked,
  setIsFosfatChecked,
  setIsGipsumChecked,
  setIsKalsitChecked,
  setIsKuarsitChecked,
  setIsOkerChecked,
  setIsPasirKuarsaChecked,
  setIsPasirZirkonChecked,
  setIsPrehnitChecked,
  setIsSerpentinChecked,
  setIsTalkChecked,
  setIsTravertinChecked,
  setIsUltrabasaChecked,
  setIsYodiumChecked,
  setIsZeolitChecked,
  setIsMineralIndustriSelectedAll,
} from '../../../../redux/reducer/mineralIndustri.reducer';
import sourceGeoRIMA from '../../../../api/resource/SourceGeorima';

const ListMineralIndustri = () => {
  const dispatch = useDispatch();
  const {
    isBaritChecked,
    isBatuanPembawaKaliumChecked,
    isBatuApungChecked,
    isBatuGampingChecked,
    isBatuKuarsaChecked,
    isBelerangChecked,
    isBentonitChecked,
    isDiatomeaChecked,
    isFosfatChecked,
    isGipsumChecked,
    isKalsitChecked,
    isKuarsitChecked,
    isOkerChecked,
    isPasirKuarsaChecked,
    isPasirZirkonChecked,
    isPrehnitChecked,
    isSerpentinChecked,
    isTalkChecked,
    isTravertinChecked,
    isUltrabasaChecked,
    isYodiumChecked,
    isZeolitChecked,
    isMineralIndustriSelectedAll,
  } = useSelector((state) => state.mineralIndustri);

  const handleBarit = async () => {
    dispatch(setIsBaritChecked(!isBaritChecked));

    if (!isBaritChecked) {
      const barit = await sourceGeoRIMA.getBarit();
      dispatch(setBarit(barit));
    } else {
      dispatch(setBarit([]));
    }
  };

  const handleBatuanPembawaKalium = async () => {
    dispatch(setIsBatuanPembawaKaliumChecked(!isBatuanPembawaKaliumChecked));

    if (!isBatuanPembawaKaliumChecked) {
      const batuanPembawaKalium = await sourceGeoRIMA.getBatuanPembawaKalium();
      dispatch(setBatuanPembawaKalium(batuanPembawaKalium));
    } else {
      dispatch(setBatuanPembawaKalium([]));
    }
  };

  const handleBatuApung = async () => {
    dispatch(setIsBatuApungChecked(!isBatuApungChecked));

    if (!isBatuApungChecked) {
      const batuApung = await sourceGeoRIMA.getBatuApung();
      dispatch(setBatuApung(batuApung));
    } else {
      dispatch(setBatuApung([]));
    }
  };

  const handleBatuGamping = async () => {
    dispatch(setIsBatuGampingChecked(!isBatuGampingChecked));

    if (!isBatuGampingChecked) {
      const batuGamping = await sourceGeoRIMA.getBatuGamping();
      dispatch(setBatuGamping(batuGamping));
    } else {
      dispatch(setBatuGamping([]));
    }
  };

  const handleBatuKuarsa = async () => {
    dispatch(setIsBatuKuarsaChecked(!isBatuKuarsaChecked));

    if (!isBatuKuarsaChecked) {
      const batuKuarsa = await sourceGeoRIMA.getPrehnit();
      dispatch(setBatuKuarsa(batuKuarsa));
    } else {
      dispatch(setBatuKuarsa([]));
    }
  };

  const handleBelerang = async () => {
    dispatch(setIsBelerangChecked(!isBelerangChecked));

    if (!isBelerangChecked) {
      const belerang = await sourceGeoRIMA.getBelerang();
      dispatch(setBelerang(belerang));
    } else {
      dispatch(setBelerang([]));
    }
  };

  const handleBentonit = async () => {
    dispatch(setIsBentonitChecked(!isBentonitChecked));

    if (!isBentonitChecked) {
      const bentonit = await sourceGeoRIMA.getBentonit();
      dispatch(setBentonit(bentonit));
    } else {
      dispatch(setBentonit([]));
    }
  };

  const handleDiatomea = async () => {
    dispatch(setIsDiatomeaChecked(!isDiatomeaChecked));

    if (!isDiatomeaChecked) {
      const diatomea = await sourceGeoRIMA.getDiatomea();
      dispatch(setDiatomea(diatomea));
    } else {
      dispatch(setDiatomea([]));
    }
  };

  const handleFosfat = async () => {
    dispatch(setIsFosfatChecked(!isFosfatChecked));

    if (!isFosfatChecked) {
      const fosfat = await sourceGeoRIMA.getFosfat();
      dispatch(setFosfat(fosfat));
    } else {
      dispatch(setFosfat([]));
    }
  };

  const handleGipsum = async () => {
    dispatch(setIsGipsumChecked(!isGipsumChecked));

    if (!isGipsumChecked) {
      const gipsum = await sourceGeoRIMA.getGipsum();
      dispatch(setGipsum(gipsum));
    } else {
      dispatch(setGipsum([]));
    }
  };

  const handleKalsit = async () => {
    dispatch(setIsKalsitChecked(!isKalsitChecked));

    if (!isKalsitChecked) {
      const kalsit = await sourceGeoRIMA.getKalsit();
      dispatch(setKalsit(kalsit));
    } else {
      dispatch(setKalsit([]));
    }
  };

  const handleKuarsit = async () => {
    dispatch(setIsKuarsitChecked(!isKuarsitChecked));

    if (!isKuarsitChecked) {
      const kuarsit = await sourceGeoRIMA.getKuarsit();
      dispatch(setKuarsit(kuarsit));
    } else {
      dispatch(setKuarsit([]));
    }
  };

  const handleOker = async () => {
    dispatch(setIsOkerChecked(!isOkerChecked));

    if (!isOkerChecked) {
      const oker = await sourceGeoRIMA.getOker();
      dispatch(setOker(oker));
    } else {
      dispatch(setOker([]));
    }
  };

  const handlePasirKuarsa = async () => {
    dispatch(setIsPasirKuarsaChecked(!isPasirKuarsaChecked));

    if (!isPasirKuarsaChecked) {
      const pasirKuarsa = await sourceGeoRIMA.getPasirKuarsa();
      dispatch(setPasirKuarsa(pasirKuarsa));
    } else {
      dispatch(setPasirKuarsa([]));
    }
  };

  const handlePasirZirkon = async () => {
    dispatch(setIsPasirZirkonChecked(!isPasirZirkonChecked));

    if (!isPasirZirkonChecked) {
      const pasirZirkon = await sourceGeoRIMA.getPasirZirkon();
      dispatch(setPasirZirkon(pasirZirkon));
    } else {
      dispatch(setPasirZirkon([]));
    }
  };

  const handlePrehnit = async () => {
    dispatch(setIsPrehnitChecked(!isPrehnitChecked));

    if (!isPrehnitChecked) {
      const prehnit = await sourceGeoRIMA.getPrehnit();
      dispatch(setPrehnit(prehnit));
    } else {
      dispatch(setPrehnit([]));
    }
  };

  const handleSerpentin = async () => {
    dispatch(setIsSerpentinChecked(!isSerpentinChecked));

    if (!isSerpentinChecked) {
      const serpentin = await sourceGeoRIMA.getSerpentin();
      dispatch(setSerpentin(serpentin));
    } else {
      dispatch(setSerpentin([]));
    }
  };

  const handleTalk = async () => {
    dispatch(setIsTalkChecked(!isTalkChecked));

    if (!isTalkChecked) {
      const talk = await sourceGeoRIMA.getTalk();
      dispatch(setTalk(talk));
    } else {
      dispatch(setTalk([]));
    }
  };

  const handleTravertin = async () => {
    dispatch(setIsTravertinChecked(!isTravertinChecked));

    if (!isTravertinChecked) {
      const travertin = await sourceGeoRIMA.getTravertin();
      dispatch(setTravertin(travertin));
    } else {
      dispatch(setTravertin([]));
    }
  };

  const handleUltrabasa = async () => {
    dispatch(setIsUltrabasaChecked(!isUltrabasaChecked));

    if (!isUltrabasaChecked) {
      const ultrabasa = await sourceGeoRIMA.getUltrabasa();
      dispatch(setUltrabasa(ultrabasa));
    } else {
      dispatch(setUltrabasa([]));
    }
  };

  const handleYodium = async () => {
    dispatch(setIsYodiumChecked(!isYodiumChecked));

    if (!isYodiumChecked) {
      const yodium = await sourceGeoRIMA.getYodium();
      dispatch(setYodium(yodium));
    } else {
      dispatch(setYodium([]));
    }
  };

  const handleZeolit = async () => {
    dispatch(setIsZeolitChecked(!isZeolitChecked));

    if (!isZeolitChecked) {
      const zeolit = await sourceGeoRIMA.getZeolit();
      dispatch(setZeolit(zeolit));
    } else {
      dispatch(setZeolit([]));
    }
  };

  const handleSelectAll = async () => {
    dispatch(setIsMineralIndustriSelectedAll(!isMineralIndustriSelectedAll));

    if (!isMineralIndustriSelectedAll) {
      dispatch(setIsBaritChecked(true));
      dispatch(setIsBatuanPembawaKaliumChecked(true));
      dispatch(setIsBatuApungChecked(true));
      dispatch(setIsBatuGampingChecked(true));
      dispatch(setIsBatuKuarsaChecked(true));
      dispatch(setIsBelerangChecked(true));
      dispatch(setIsBentonitChecked(true));
      dispatch(setIsDiatomeaChecked(true));
      dispatch(setIsFosfatChecked(true));
      dispatch(setIsGipsumChecked(true));
      dispatch(setIsKalsitChecked(true));
      dispatch(setIsKuarsitChecked(true));
      dispatch(setIsOkerChecked(true));
      dispatch(setIsPasirKuarsaChecked(true));
      dispatch(setIsPasirZirkonChecked(true));
      dispatch(setIsPrehnitChecked(true));
      dispatch(setIsSerpentinChecked(true));
      dispatch(setIsTalkChecked(true));
      dispatch(setIsTravertinChecked(true));
      dispatch(setIsUltrabasaChecked(true));
      dispatch(setIsYodiumChecked(true));
      dispatch(setIsZeolitChecked(true));

      const barit = await sourceGeoRIMA.getBarit();
      dispatch(setBarit(barit));
      const batuanPembawaKalium = await sourceGeoRIMA.getBatuanPembawaKalium();
      dispatch(setBatuanPembawaKalium(batuanPembawaKalium));
      const batuApung = await sourceGeoRIMA.getBatuApung();
      dispatch(setBatuApung(batuApung));
      const batuGamping = await sourceGeoRIMA.getBatuGamping();
      dispatch(setBatuGamping(batuGamping));
      const batuKuarsa = await sourceGeoRIMA.getBatuKuarsa();
      dispatch(setBatuKuarsa(batuKuarsa));
      const belerang = await sourceGeoRIMA.getBelerang();
      dispatch(setBelerang(belerang));
      const bentonit = await sourceGeoRIMA.getBentonit();
      dispatch(setBentonit(bentonit));
      const diatomea = await sourceGeoRIMA.getDiatomea();
      dispatch(setDiatomea(diatomea));
      const fosfat = await sourceGeoRIMA.getFosfat();
      dispatch(setFosfat(fosfat));
      const gipsum = await sourceGeoRIMA.getGipsum();
      dispatch(setGipsum(gipsum));
      const kalsit = await sourceGeoRIMA.getKalsit();
      dispatch(setKalsit(kalsit));
      const kuarsit = await sourceGeoRIMA.getKuarsit();
      dispatch(setKuarsit(kuarsit));
      const oker = await sourceGeoRIMA.getOker();
      dispatch(setOker(oker));
      const pasirKuarsa = await sourceGeoRIMA.getPasirKuarsa();
      dispatch(setPasirKuarsa(pasirKuarsa));
      const pasirZirkon = await sourceGeoRIMA.getPasirZirkon();
      dispatch(setPasirZirkon(pasirZirkon));
      const prehnit = await sourceGeoRIMA.getPrehnit();
      dispatch(setPrehnit(prehnit));
      const serpentin = await sourceGeoRIMA.getSerpentin();
      dispatch(setSerpentin(serpentin));
      const talk = await sourceGeoRIMA.getTalk();
      dispatch(setTalk(talk));
      const travertin = await sourceGeoRIMA.getTravertin();
      dispatch(setTravertin(travertin));
      const ultrabasa = await sourceGeoRIMA.getUltrabasa();
      dispatch(setUltrabasa(ultrabasa));
      const yodium = await sourceGeoRIMA.getYodium();
      dispatch(setYodium(yodium));
      const zeolit = await sourceGeoRIMA.getZeolit();
      dispatch(setZeolit(zeolit));
    } else {
      dispatch(setIsBaritChecked(false));
      dispatch(setIsBatuanPembawaKaliumChecked(false));
      dispatch(setIsBatuApungChecked(false));
      dispatch(setIsBatuGampingChecked(false));
      dispatch(setIsBatuKuarsaChecked(false));
      dispatch(setIsBelerangChecked(false));
      dispatch(setIsBentonitChecked(false));
      dispatch(setIsDiatomeaChecked(false));
      dispatch(setIsFosfatChecked(false));
      dispatch(setIsGipsumChecked(false));
      dispatch(setIsKalsitChecked(false));
      dispatch(setIsKuarsitChecked(false));
      dispatch(setIsOkerChecked(false));
      dispatch(setIsPasirKuarsaChecked(false));
      dispatch(setIsPasirZirkonChecked(false));
      dispatch(setIsPrehnitChecked(false));
      dispatch(setIsSerpentinChecked(false));
      dispatch(setIsTalkChecked(false));
      dispatch(setIsTravertinChecked(false));
      dispatch(setIsUltrabasaChecked(false));
      dispatch(setIsYodiumChecked(false));
      dispatch(setIsZeolitChecked(false));

      dispatch(setBarit([]));
      dispatch(setBatuanPembawaKalium([]));
      dispatch(setBatuApung([]));
      dispatch(setBatuGamping([]));
      dispatch(setBatuKuarsa([]));
      dispatch(setBelerang([]));
      dispatch(setBentonit([]));
      dispatch(setDiatomea([]));
      dispatch(setFosfat([]));
      dispatch(setGipsum([]));
      dispatch(setKalsit([]));
      dispatch(setKuarsit([]));
      dispatch(setOker([]));
      dispatch(setPasirKuarsa([]));
      dispatch(setPasirZirkon([]));
      dispatch(setPrehnit([]));
      dispatch(setSerpentin([]));
      dispatch(setTalk([]));
      dispatch(setTravertin([]));
      dispatch(setBarit([]));
      dispatch(setYodium([]));
      dispatch(setZeolit([]));
    }
  };

  return (
    <>
      <div className="font-semibold flex mt-5 justify-between items-center">
        <h3>Mineral Industri</h3>
        <div className="flex gap-1">
          <label className="text-xs font-light">Pilih Semua</label>
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={isMineralIndustriSelectedAll}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/barit.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Barit</label>
          </div>
          <input
            type="checkbox"
            onChange={handleBarit}
            checked={isBaritChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/batuan-pembawa-kalium.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Batuan Pembawa Kalium</label>
          </div>
          <input
            type="checkbox"
            onChange={handleBatuanPembawaKalium}
            checked={isBatuanPembawaKaliumChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/batuapung.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Batuapung</label>
          </div>
          <input
            type="checkbox"
            onChange={handleBatuApung}
            checked={isBatuApungChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/batugamping.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Batugamping</label>
          </div>
          <input
            type="checkbox"
            onChange={handleBatuGamping}
            checked={isBatuGampingChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/batu-kuarsa.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Batu Kuarsa</label>
          </div>
          <input
            type="checkbox"
            onChange={handleBatuKuarsa}
            checked={isBatuKuarsaChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/belerang.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Belerang</label>
          </div>
          <input
            type="checkbox"
            onChange={handleBelerang}
            checked={isBelerangChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/bentonit.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Bentonit</label>
          </div>
          <input
            type="checkbox"
            onChange={handleBentonit}
            checked={isBentonitChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/diatomea.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Diatomea</label>
          </div>
          <input
            type="checkbox"
            onChange={handleDiatomea}
            checked={isDiatomeaChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/fosfat.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Fosfat</label>
          </div>
          <input
            type="checkbox"
            onChange={handleFosfat}
            checked={isFosfatChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/gipsum.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Gipsum</label>
          </div>
          <input
            type="checkbox"
            onChange={handleGipsum}
            checked={isGipsumChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/kalsit.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Kalsit</label>
          </div>
          <input
            type="checkbox"
            onChange={handleKalsit}
            checked={isKalsitChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/kuarsit.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Kuarsit</label>
          </div>
          <input
            type="checkbox"
            onChange={handleKuarsit}
            checked={isKuarsitChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/oker.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Oker</label>
          </div>
          <input
            type="checkbox"
            onChange={handleOker}
            checked={isOkerChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/pasir-kuarsa.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Pasirkuarsa</label>
          </div>
          <input
            type="checkbox"
            onChange={handlePasirKuarsa}
            checked={isPasirKuarsaChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/pasir-zirkon.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Pasir Zirkon</label>
          </div>
          <input
            type="checkbox"
            onChange={handlePasirZirkon}
            checked={isPasirZirkonChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/prehnit.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Prehnit</label>
          </div>
          <input
            type="checkbox"
            onChange={handlePrehnit}
            checked={isPrehnitChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/serpentin.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Serpentin</label>
          </div>
          <input
            type="checkbox"
            onChange={handleSerpentin}
            checked={isSerpentinChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/talk.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Talk</label>
          </div>
          <input
            type="checkbox"
            onChange={handleTalk}
            checked={isTalkChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/travertin.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Travertin</label>
          </div>
          <input
            type="checkbox"
            onChange={handleTravertin}
            checked={isTravertinChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/ultrabasa.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Ultrabasa</label>
          </div>
          <input
            type="checkbox"
            onChange={handleUltrabasa}
            checked={isUltrabasaChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/yodium.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Yodium</label>
          </div>
          <input
            type="checkbox"
            onChange={handleYodium}
            checked={isYodiumChecked}
          />
        </div>
      </div>
      <div className="text-sm mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://georima.pptik.id/data/data-georima/icon/zeolit.png"
              alt="Icon Item"
              className="mt-[0.1rem]"
            />
            <label className="capitalize">Zeolit</label>
          </div>
          <input
            type="checkbox"
            onChange={handleZeolit}
            checked={isZeolitChecked}
          />
        </div>
      </div>
    </>
  );
};

export default ListMineralIndustri;
