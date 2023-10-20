import ListLogamBesi from './ListLogamBesi';
import ListLogamDasar from './ListLogamDasar';
import ListLogamMulia from './ListLogamMulia';
import ListLogamRingan from './ListLogamRingan';

const ListMineralLogam = () => {
  return (
    <div className="h-fit mt-2 animate__animated animate__fadeIn">
      <ListLogamDasar />
      <ListLogamMulia />
      <ListLogamBesi />
      <ListLogamRingan />
    </div>
  );
};

export default ListMineralLogam;
