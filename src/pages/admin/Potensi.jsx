import FilterPotensi from '../../components/admin/Filter/FilterPotensi';
import NavbarAdmin from '../../components/admin/NavbarAdmin';
import TabItem from '../../components/admin/TabMenu/tabItem';
import TablePotensi from '../../components/admin/Table/TablePotensi';

const Potensi = () => {
  return (
    <div>
      <NavbarAdmin />
      <div className="px-5">
        <TabItem />
        <FilterPotensi />
        <TablePotensi />
      </div>
    </div>
  );
};

export default Potensi;
