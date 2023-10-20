/* eslint-disable react-hooks/exhaustive-deps */
import { GrLinkPrevious } from 'react-icons/gr';
import NavbarAdmin from '../../components/admin/NavbarAdmin';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import ChartSuhuAdmin from '../../components/admin/Statistik/ChartSuhuAdmin';
import CaptureCameraAdmin from '../../components/admin/Statistik/CaptureCameraAdmin';
import DataUmum from '../../components/admin/Statistik/DataUmum';
import ChartStatisticAdmin from '../../components/admin/Statistik/ChartStatistikAdmin';
import TableStatistikAdmin from '../../components/admin/Statistik/TableStatistikAdmin';
import DataBijihLogam from '../../components/admin/Statistik/DataBijihLogam';

const DetailPotensi = () => {
  const { activeTab } = useSelector((state) => state.activeTabs);
  const { selectedKabupatenNameRedux } = useSelector(
    (state) => state.selecFilter,
  );

  const handleTitle = () => {
    if (activeTab === 'batuBara') return 'Batu Bara';
    if (activeTab === 'mineralLogam') return 'Mineral Logam';
    if (activeTab === 'mineralBukanLogam') return 'Mineral Bukan Logam';
    if (activeTab === 'panasBumi') return 'Panas Bumi';
  };

  useEffect(() => {
    handleTitle();
  }, []);

  return (
    <div>
      <NavbarAdmin />
      <div className="mt-20 mb-2 px-5">
        <div className="flex gap-1 items-center font-bold text-lg">
          <NavLink to="/potensi" className="cursor-pointer">
            <GrLinkPrevious />
          </NavLink>
          <h1 className="uppercase">
            Potensi dan Statistik {handleTitle()} {selectedKabupatenNameRedux}
          </h1>
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-3 gap-4 h-fit">
            <DataUmum />
            <ChartSuhuAdmin />
            <CaptureCameraAdmin />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-4 h-fit">
            <DataBijihLogam />
            <ChartStatisticAdmin />
            <TableStatistikAdmin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPotensi;
