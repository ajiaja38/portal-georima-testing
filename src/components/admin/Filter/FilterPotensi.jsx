import { useEffect, useState } from 'react';
import SourceRegion from '../../../api/resource/SourceRegion';
import sourceGeoRIMA from '../../../api/resource/SourceGeorima';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedKabupatenRedux } from '../../../redux/reducer/selectFilter.reducer';

const FilterPotensi = () => {
  const [provinsi, setProvinsi] = useState([]);
  const [selectedProvinsi, setSelectedProvinsi] = useState('');
  const [kabupaten, setKabupaten] = useState([]);
  const [selectedKabupaten, setSelectedKabupaten] = useState('');
  const [itemMineralLogam, setItemMineralLogam] = useState([]);
  const [itemMineralBukanLogam, setItemMineralBukanLogam] = useState([]);

  const dispatch = useDispatch();
  const { activeTab } = useSelector((state) => state.activeTabs);

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
    const kabName = kabupaten.find((item) => item.id === selectedKabupaten);
    if (kabName) {
      let formattedName = kabName.name;
      if (formattedName.startsWith('KAB.')) {
        formattedName = formattedName.replace('KAB.', 'Kabupaten ');
      }
      dispatch(setSelectedKabupatenRedux(formattedName));
    }
  }, [provinsi, selectedProvinsi, kabupaten, selectedKabupaten, dispatch]);

  return (
    <div className="mt-2 flex gap-3">
      <h1 className="font-semibold">Urut Berdasarkan:</h1>
      {(activeTab === 'mineralLogam' || activeTab === 'mineralBukanLogam') && (
        <div className="p-1">
          <h2 className="ml-1">Komoditas:</h2>
          <select className="font-semibold outline-none w-36">
            <option readOnly>Pilih Komoditas</option>
            {activeTab === 'mineralLogam' &&
              itemMineralLogam.map((item) =>
                item.menu.map((data) => (
                  <option key={data.guid} value={data.guid}>
                    {data.name}
                  </option>
                )),
              )}
            {activeTab === 'mineralBukanLogam' &&
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

      <div className="p-1">
        <h2 className="ml-1">Provinsi:</h2>
        <select
          value={selectedProvinsi}
          onChange={(e) => setSelectedProvinsi(e.target.value)}
          className="font-semibold outline-none w-32"
        >
          <option readOnly>Pilih Provinsi</option>
          {provinsi.map((data) => (
            <option key={data.id} value={data.id}>
              {data.name}
            </option>
          ))}
        </select>
      </div>

      <div className="p-1">
        <h2 className="ml-1">Pilih Kabupaten:</h2>
        <select
          value={selectedKabupaten}
          onChange={(e) => setSelectedKabupaten(e.target.value)}
          className="font-semibold outline-none w-36"
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
  );
};

export default FilterPotensi;
