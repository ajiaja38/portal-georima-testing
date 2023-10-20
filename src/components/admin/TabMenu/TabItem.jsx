import { useDispatch, useSelector } from 'react-redux';
import { setActiveTabs } from '../../../redux/reducer/activeTab.reducer';

const TabItem = () => {
  const dispatch = useDispatch();
  const { activeTab } = useSelector((state) => state.activeTabs);

  const handleTabBatuBara = () => {
    dispatch(setActiveTabs('batuBara'));
  };

  const handleMineralLogam = () => {
    dispatch(setActiveTabs('mineralLogam'));
  };

  const handleMineralBukanLogam = () => {
    dispatch(setActiveTabs('mineralBukanLogam'));
  };

  const handlePanasBumi = () => {
    dispatch(setActiveTabs('panasBumi'));
  };

  return (
    <div className="mt-20 flex gap-3">
      <button
        onClick={handleTabBatuBara}
        className={`p-2 rounded-md shadow border font-semibold ${
          activeTab === 'batuBara'
            ? 'bg-gray-700 text-yellow-400'
            : 'bg-white text-black'
        } hover:bg-gray-700 hover:text-yellow-400 transition-all ease-in-out`}
        disabled={activeTab === 'batuBara'}
      >
        Batu Bara
      </button>

      <button
        onClick={handleMineralLogam}
        className={`p-2 rounded-md shadow border font-semibold ${
          activeTab === 'mineralLogam'
            ? 'bg-gray-700 text-yellow-400'
            : 'bg-white text-black'
        } hover:bg-gray-700 hover:text-yellow-400 transition-all ease-in-out`}
        disabled={activeTab === 'mineralLogam'}
      >
        Mineral Logam
      </button>

      <button
        onClick={handleMineralBukanLogam}
        className={`p-2 rounded-md shadow border font-semibold ${
          activeTab === 'mineralBukanLogam'
            ? 'bg-gray-700 text-yellow-400'
            : 'bg-white text-black'
        } hover:bg-gray-700 hover:text-yellow-400 transition-all ease-in-out`}
        disabled={activeTab === 'mineralBukanLogam'}
      >
        Mineral Bukan Logam dan Batuan
      </button>

      <button
        onClick={handlePanasBumi}
        className={`p-2 rounded-md shadow border font-semibold ${
          activeTab === 'panasBumi'
            ? 'bg-gray-700 text-yellow-400'
            : 'bg-white text-black'
        } hover:bg-gray-700 hover:text-yellow-400 transition-all ease-in-out`}
        disabled={activeTab === 'panasBumi'}
      >
        Panas Bumi
      </button>
    </div>
  );
};

export default TabItem;
