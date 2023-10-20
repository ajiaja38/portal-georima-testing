import { useEffect, useState } from 'react';
import { AiFillCloseSquare } from 'react-icons/ai';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import ListMineralLogam from './item/ListMineralLogam';
import ListItemBatuBara from './item/ListBatuBara';
import sourceGeoRIMA from '../../../api/resource/SourceGeorima';
import ListItemPanasBumi from './item/ListPanasBumi';
import ListMineralBukanLogam from './item/ListMineralBukanLogam';

const PotensiModal = ({ closeModal }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [listPotensi, setListPotensi] = useState([]);
  const [potensiStates, setPotensiStates] = useState({});

  const animationClass = isClosing
    ? 'animate__fadeOutLeft'
    : 'animate__fadeInLeft';

  const handleCloseClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
    }, 500);
  };

  const handleShowItemPotensi = (potensiId) => {
    setPotensiStates((prevState) => {
      return {
        ...prevState,
        [potensiId]: !prevState[potensiId],
      };
    });
  };

  const getListPotensi = async () => {
    try {
      const response = await sourceGeoRIMA.getListPotensi();
      setListPotensi(response);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const renderListForPotensi = (potensiName) => {
    switch (potensiName) {
      case 'Batu Bara':
        return <ListItemBatuBara />;
      case 'Mineral Logam':
        return <ListMineralLogam />;
      case 'Mineral Bukan Logam':
        return <ListMineralBukanLogam />;
      case 'Panas Bumi':
        return <ListItemPanasBumi />;
      default:
        return null;
    }
  };

  useEffect(() => {
    getListPotensi();
  }, []);

  return (
    <div
      className={`fixed top-[4.5rem] left-2 p-3 rounded-lg bg-gray-900 text-yellow-400 z-[99999] w-96 animate__animated ${animationClass} animate__faster`}
    >
      <div className="font-bold flex justify-between items-center">
        <h2>Potensi</h2>
        <span
          onClick={handleCloseClick}
          className="text-lg text-yellow-400 hover:text-yellow-300 transition-none ease-in-out duration-150 cursor-pointer"
        >
          <AiFillCloseSquare />
        </span>
      </div>

      <div className="max-h-[25rem] overflow-auto">
        {listPotensi.map((data) => (
          <div
            key={data.guid}
            className="p-3 border bg-white text-black rounded-md mt-2 cursor-pointer"
          >
            <div
              onClick={() => handleShowItemPotensi(data.guid)}
              className="flex justify-between items-center"
            >
              <div className="flex gap-2 items-center">
                <img
                  src={`https://georima.pptik.id/data/data-georima/icon/${data.icon}`}
                  alt="icon potensi"
                  className="w-4"
                />
                <h2 className="font-semibold">{data.name}</h2>
              </div>
              <IoMdArrowDropdownCircle />
            </div>
            {potensiStates[data.guid] && renderListForPotensi(data.name)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PotensiModal;
