import statisticData from '../../../api/statisticDummy';

const TableStatistik = () => {
  return (
    <div className="p-2 border rounded-lg w-[40%]">
      <h1 className="text-center text-sm text-gray-800 font-bold">
        Table Sumber Daya dan Cadangan (Ton)
      </h1>

      <div className="relative overflow-auto h-[14rem] mt-1">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 bg-slate-100 rounded-lg">
            <tr>
              <th className="px-6 py-3">Tahun</th>
              <th className="px-6 py-3">Sumber Daya</th>
              <th className="px-6 py-3">Cadangan</th>
            </tr>
          </thead>
          <tbody>
            {statisticData.map((data, index) => (
              <tr key={index} className="bg-white border-b text-xs">
                <th
                  scope="row"
                  className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap"
                >
                  {data.year}
                </th>
                <td className="px-6 py-3">
                  {data.sumberDaya.toLocaleString()}
                </td>
                <td className="px-6 py-3">
                  {data.sumberDayaCadangan.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableStatistik;
