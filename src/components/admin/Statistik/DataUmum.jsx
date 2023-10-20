import icon from '../../../assets/logo/Rectangle 154.png';

const DataUmum = () => {
  return (
    <div className="p-4 border rounded-lg flex flex-col justify-center shadow-md">
      <h1 className="text-gray-800 font-bold">Data Umum</h1>
      <div className="mt-2 flex justify-between">
        <div>
          <ul className="text-xs flex flex-col gap-1">
            <li>
              <span className="font-bold">Komoditas</span> : Air Raksa
            </li>
            <li>
              <span className="font-bold">Kelompok</span> : Logam Dasar
            </li>
            <li>
              <span className="font-bold">Provinsi</span> : Lampung
            </li>
            <li>
              <span className="font-bold">Kabupaten</span> : Pringsewu
            </li>
            <li>
              <span className="font-bold">Lokasi</span> : Wates Selatan
            </li>
            <li>
              <span className="font-bold">Nama Objek</span> : Air Raksa Aliran
              Sungai
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={icon} alt="icon" className="w-20" />
          <h2 className="text-sm font-bold">Icon Penanda</h2>
          <p className="text-[7px]">Status Neraca 2022</p>
        </div>
      </div>
    </div>
  );
};

export default DataUmum;
