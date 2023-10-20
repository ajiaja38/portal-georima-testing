import ListBahanBangunan from './ListBahanBangunan';
import ListBahanKeramik from './ListBahanKeramik';
import ListBatuMulia from './ListBatuMulia';
import ListMineralIndustri from './ListMineralIndustri';

const ListMineralBukanLogam = () => {
  return (
    <div className="h-fit mt-2 animate__animated animate__fadeIn">
      <ListBatuMulia />
      <ListBahanBangunan />
      <ListBahanKeramik />
      <ListMineralIndustri />
    </div>
  );
};

export default ListMineralBukanLogam;
