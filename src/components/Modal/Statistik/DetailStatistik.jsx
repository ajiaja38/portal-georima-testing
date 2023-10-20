import { AiFillCloseSquare } from 'react-icons/ai';
import TableStatistik from './TableStatistik';
import ChartStatistic from './ChartStatistic';
import CaptureCamera from './CaptureCamera';
import ChartSuhu from './ChartSuhu';

const DetailStatistik = ({
  option,
  selectedProvinsiName,
  selectedKabupatenName,
  handleModalDetailClose,
}) => {
  return (
    <div className="fixed h-fit max-h-[31rem] overflow-auto top-[4.5rem] left-[21rem] p-4 rounded-lg bg-gray-900 text-yellow-400 z-[99999] w-[57rem] animate__animated">
      <span
        onClick={handleModalDetailClose}
        className="text-lg text-yellow-400 hover:text-yellow-300 transition-none ease-in-out duration-150 cursor-pointer absolute top-3 right-3"
      >
        <AiFillCloseSquare />
      </span>
      <h2 className="font-bold text-center text-2xl uppercase">
        Potensi {option} <br /> {selectedKabupatenName}
      </h2>
      {(option === 'Mineral Logam' || option === 'Mineral Bukan Logam') && (
        <div className="mt-2 h-28 flex justify-between items-center gap-4 text-black">
          <div className="bg-white rounded-lg p-2 w-56 h-full flex flex-col justify-center">
            <p className="font-semibold">Provinsi:</p>
            <p className="font-bold text-lg">{selectedProvinsiName}</p>
          </div>
          <div className="bg-white rounded-lg p-2 w-56 h-full flex flex-col justify-center">
            <p className="font-semibold">Kelompok Logam:</p>
            <p className="font-bold text-lg">Bahan Bangunan</p>
          </div>
          <div className="bg-white rounded-lg p-2 w-56 h-full flex flex-col justify-center">
            <p className="font-semibold">Komoditas:</p>
            <p className="font-bold text-lg">Andesit</p>
          </div>
          <div className="bg-white rounded-lg p-2 w-56 h-full flex flex-col justify-center">
            <p className="font-semibold">Satuan:</p>
            <p className="font-bold text-lg">Ton</p>
          </div>
        </div>
      )}
      <div className="p-5 mt-4 bg-white rounded-lg w-full text-black flex justify-around items-center gap-3">
        <ChartStatistic />
        <TableStatistik />
      </div>
      <div className="p-5 mt-4 bg-white rounded-lg w-full text-black flex justify-around items-center gap-3">
        <CaptureCamera />
        <ChartSuhu />
      </div>
    </div>
  );
};

export default DetailStatistik;
