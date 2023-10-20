import { useState, useEffect } from 'react';
import { AiFillCloseSquare } from 'react-icons/ai';
import SourceRegion from '../../../api/resource/SourceRegion';
import DetailStatistik from './DetailStatistik';
import sourceGeoRIMA from '../../../api/resource/SourceGeorima';

const StatistikModal = ({ closeModal }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [provinsi, setProvinsi] = useState([]);
  const [selectedProvinsi, setSelectedProvinsi] = useState('');
  const [selectedProvinsiName, setSelectedProvinsiName] = useState('');
  const [kabupaten, setKabupaten] = useState([]);
  const [selectedKabupaten, setSelectedKabupaten] = useState('');
  const [selectedKabupatenName, setSelectedKabupatenName] = useState('');
  const [modalDetail, setModalDetail] = useState(false);
  const [itemMineralLogam, setItemMineralLogam] = useState([]);
  const [itemMineralBukanLogam, setItemMineralBukanLogam] = useState([]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const animationClass = isClosing
    ? 'animate__fadeOutLeft'
    : 'animate__fadeInLeft';

  const handleCloseClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
    }, 500);
  };

  const handleModalDetailClose = () => {
    setModalDetail(false);
  };

  const getAllProvinsi = async () => {
    try {
      const response = await SourceRegion.getProvinsi();
      setProvinsi(response);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const getAllKabupatenByProvinsiId = async (id) => {
    try {
      const response = await SourceRegion.getKabupaten(id);
      setKabupaten(response);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const getItemMineralLogam = async () => {
    try {
      const response = await sourceGeoRIMA.getListMineralLogam();
      setItemMineralLogam(response);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const getItemMineralBukanLogam = async () => {
    try {
      const response = await sourceGeoRIMA.getListMineralBukanLogam();
      setItemMineralBukanLogam(response);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    getAllProvinsi();
    getItemMineralLogam();
    getItemMineralBukanLogam();
  }, []);

  useEffect(() => {
    getAllKabupatenByProvinsiId(selectedProvinsi);
  }, [selectedProvinsi]);

  useEffect(() => {
    if (selectedOption && selectedKabupaten) {
      setModalDetail(true);
    }
  }, [selectedOption, selectedKabupaten]);

  useEffect(() => {
    const provName = provinsi.find((item) => item.id === selectedProvinsi);
    if (provName) {
      setSelectedProvinsiName(provName.name);
    }
  }, [provinsi, selectedProvinsi]);

  useEffect(() => {
    const kabName = kabupaten.find((item) => item.id === selectedKabupaten);
    if (kabName) {
      let formattedName = kabName.name;
      if (formattedName.startsWith('KAB.')) {
        formattedName = formattedName.replace('KAB.', 'Kabupaten ');
      }
      setSelectedKabupatenName(formattedName);
    }
  }, [provinsi, selectedProvinsi, kabupaten, selectedKabupaten]);

  return (
    <>
      <div
        className={`fixed top-[4.5rem] left-2 p-3 rounded-lg bg-gray-900 text-yellow-400 z-[99999] w-80 animate__animated h-fit max-h-[26rem] ${animationClass} animate__faster`}
      >
        <div className="font-bold flex justify-between items-center">
          <h2>Statistik</h2>
          <span
            onClick={handleCloseClick}
            className="text-lg text-yellow-400 hover:text-yellow-300 transition-none ease-in-out duration-150 cursor-pointer"
          >
            <AiFillCloseSquare />
          </span>
        </div>
        <div className="p-2 bg-white rounded-md mt-2 text-black space-y-2">
          <div>
            <h1 className="font-bold">Potensi</h1>
            <div className="border-black border-b mt-1"></div>
            <div className="space-y-1 mt-2">
              <div className="flex gap-2 text-xs items-center">
                <input
                  type="radio"
                  checked={selectedOption === 'Mineral Logam'}
                  onChange={() => handleOptionChange('Mineral Logam')}
                />
                <label>Mineral Logam</label>
              </div>
              <div className="flex gap-2 text-xs items-center">
                <input
                  type="radio"
                  checked={selectedOption === 'Mineral Bukan Logam'}
                  onChange={() => handleOptionChange('Mineral Bukan Logam')}
                />
                <label>Mineral Bukan Logam</label>
              </div>
              <div className="flex gap-2 text-xs items-center">
                <input
                  type="radio"
                  checked={selectedOption === 'Batu Bara'}
                  onChange={() => handleOptionChange('Batu Bara')}
                />
                <label>Batu Bara</label>
              </div>
              <div className="flex gap-2 text-xs items-center">
                <input
                  type="radio"
                  checked={selectedOption === 'Panas Bumi'}
                  onChange={() => handleOptionChange('Panas Bumi')}
                />
                <label>Panas Bumi</label>
              </div>
            </div>
          </div>

          {(selectedOption === 'Mineral Logam' ||
            selectedOption === 'Mineral Bukan Logam') && (
            <div className="animate__animated animate__fadeIn">
              <h1 className="font-bold">komoditas</h1>
              <div className="border-black border-b mt-1"></div>
              <select className="text-xs w-full bg-gray-300 rounded p-2 mt-2 outline-none">
                <option readOnly>Pilih Komoditas</option>
                {selectedOption === 'Mineral Logam' &&
                  itemMineralLogam.map((item) =>
                    item.menu.map((data) => (
                      <option key={data.guid} value={data.guid}>
                        {data.name}
                      </option>
                    )),
                  )}
                {selectedOption === 'Mineral Bukan Logam' &&
                  itemMineralBukanLogam.map((item) =>
                    item.menu.map((data) => (
                      <option key={data.guid} value={data.guid}>
                        {data.name}
                      </option>
                    )),
                  )}
              </select>
            </div>
          )}

          <div>
            <h1 className="font-bold">Provinsi</h1>
            <div className="border-black border-b mt-1"></div>
            <select
              value={selectedProvinsi}
              onChange={(e) => setSelectedProvinsi(e.target.value)}
              className="text-xs w-full bg-gray-300 rounded p-2 mt-2 outline-none"
            >
              <option readOnly>Pilih Provinsi</option>
              {provinsi.map((data) => (
                <option key={data.id} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <h1 className="font-bold">Kabupaten</h1>
            <div className="border-black border-b mt-1"></div>
            <select
              disabled={
                !selectedProvinsi || selectedProvinsi === 'Pilih Provinsi'
              }
              value={selectedKabupaten}
              onChange={(e) => setSelectedKabupaten(e.target.value)}
              className="text-xs w-full bg-gray-300 rounded p-2 mt-2 outline-none"
            >
              <option readOnly>Pilih Kabupaten</option>
              {kabupaten.map((data) => (
                <option key={data.id} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {modalDetail && (
        <DetailStatistik
          option={selectedOption}
          selectedProvinsiName={selectedProvinsiName}
          selectedKabupatenName={selectedKabupatenName}
          handleModalDetailClose={handleModalDetailClose}
        />
      )}
    </>
  );
};

export default StatistikModal;
