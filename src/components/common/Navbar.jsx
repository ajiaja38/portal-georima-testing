import { useEffect, useState } from 'react';
import PotensiModal from '../Modal/Potensi/PotensiModal';
import { FaMapLocationDot } from 'react-icons/fa6';
import { BsFillClipboard2DataFill } from 'react-icons/bs';
import { RiGovernmentFill } from 'react-icons/ri';
import { PiBooksFill } from 'react-icons/pi';
import StatistikModal from '../Modal/Statistik/StatistikModal';
import AboutUs from '../Modal/About-Us/AboutUs';
import logoNav from '../../assets/logo/geoRIMA2.png';
import logoNav2 from '../../assets/logo/logoNav2.png';
import { useDispatch } from 'react-redux';
import { setZoomButtonClick } from '../../redux/reducer/zoom.reducer';
import SourceRegion from '../../api/resource/SourceRegion';
import BukuNeracaModal from '../Modal/Buku-Neraca/BukuNeraca';

const Navbar = () => {
  const [modalPotensi, setModalPotensi] = useState(false);
  const [modalStatistik, setModalStatistik] = useState(false);
  const [modalAboutUs, setModalAboutUs] = useState(false);
  const [modalBukuNeraca, setModalBukuNeraca] = useState(false);
  const [provinsi, setProvinsi] = useState([]);

  const dispatch = useDispatch();

  const handleZoomToDefault = () => {
    dispatch(setZoomButtonClick(true));
  };

  const handleModalPotensi = () => {
    setModalPotensi(!modalPotensi);
    setModalStatistik(false);
  };

  const handleCloseModalPotensi = () => {
    setModalPotensi(false);
  };

  const handleModalStatistik = () => {
    setModalStatistik(!modalStatistik);
    setModalPotensi(false);
  };

  const handleCloseModalStatistik = () => {
    setModalStatistik(false);
  };

  const handleModalAboutUs = () => {
    setModalAboutUs(true);
  };

  const handleCloseModalAboutUs = () => {
    setModalAboutUs(false);
  };

  const handleModalBukuNeraca = () => {
    setModalBukuNeraca(true);
  };

  const handleCloseModalBukuNeraca = () => {
    setModalBukuNeraca(false);
  };

  const getProvinsi = async () => {
    try {
      const response = await SourceRegion.getProvinsi();
      setProvinsi(response);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    getProvinsi();
  }, []);

  return (
    <>
      <div className="fixed top-2 inset-x-2 rounded-xl py-3 px-5 shadow-sm text-sm text-white bg-gray-900 z-[99999]">
        <nav className="flex items-center justify-between">
          <div className="flex justify-center items-center gap-2">
            <img src={logoNav} alt="logo navbar" className="w-7" />
            <header className="font-bold text-yellow-400 text-xl">
              <span className="text-white">Geo</span>RIMA
            </header>
          </div>
          <div className="flex items-center gap-6">
            <p
              onClick={handleModalPotensi}
              className="cursor-pointer transition-all ease-out duration-200 px-1 py-1 hover:bg-yellow-400 rounded-md flex gap-1 justify-center items-center"
            >
              <FaMapLocationDot />
              Potensi
            </p>
            <p
              onClick={handleModalStatistik}
              className="cursor-pointer transition-all ease-out duration-200 px-1 py-1 hover:bg-yellow-400 rounded-md flex gap-1 justify-center items-center"
            >
              <BsFillClipboard2DataFill />
              Statistik
            </p>
            <p
              onClick={handleModalAboutUs}
              className="cursor-pointer transition-all ease-out duration-200 px-1 py-1 hover:bg-yellow-400 rounded-md flex gap-1 justify-center items-center"
            >
              <RiGovernmentFill />
              Tentang Kami
            </p>
            <p
              onClick={handleModalBukuNeraca}
              className="cursor-pointer transition-all ease-out duration-200 px-1 py-1 hover:bg-yellow-400 rounded-md flex gap-1 justify-center items-center"
            >
              <PiBooksFill />
              Buku Neraca
            </p>

            <select className="p-1 rounded-md text-gray-950 w-40 outline-none">
              <option readOnly>Pilih Provinsi</option>
              {provinsi.length &&
                provinsi.map((data) => (
                  <option key={data.id} value={data.id}>
                    {data.name}
                  </option>
                ))}
            </select>
            <img
              src={logoNav2}
              alt="Logo 2"
              className="w-7 h-7 cursor-pointer"
              onClick={handleZoomToDefault}
            />
          </div>
        </nav>
      </div>
      {modalPotensi && <PotensiModal closeModal={handleCloseModalPotensi} />}
      {modalStatistik && (
        <StatistikModal closeModal={handleCloseModalStatistik} />
      )}
      {modalAboutUs && <AboutUs closeModal={handleCloseModalAboutUs} />}
      {modalBukuNeraca && (
        <BukuNeracaModal closeModal={handleCloseModalBukuNeraca} />
      )}
    </>
  );
};

export default Navbar;
