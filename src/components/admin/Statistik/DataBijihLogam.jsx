import { useState } from 'react';

const DataBijihLogam = () => {
  const [activeTab, setActiveTab] = useState('bijih');

  const handleBijihTabs = () => {
    setActiveTab('bijih');
  };

  const handleLogamTabs = () => {
    setActiveTab('logam');
  };

  return (
    <div className="p-4 border rounded-lg flex flex-col justify-start shadow-md">
      <h1 className="text-gray-800 font-bold">Sumber Daya & Cadangan</h1>
      <div className="flex text-sm font-semibold">
        <button
          onClick={handleBijihTabs}
          className={`${
            activeTab === 'bijih' ? 'bg-gray-200' : 'bg-white'
          } rounded-t-lg p-1 px-2`}
        >
          Bijih
        </button>
        <button
          onClick={handleLogamTabs}
          className={`${
            activeTab === 'logam' ? 'bg-gray-200' : 'bg-white'
          } rounded-t-lg p-1 px-2`}
        >
          Logam
        </button>
      </div>
      {activeTab === 'bijih' && (
        <div
          className={`bg-gray-200 p-2 h-full rounded-b-md ${
            activeTab === 'bijih' ? 'rounded-tr-md' : 'rounded-t-md'
          }`}
        >
          <div className="grid grid-cols-2 gap-4 text-sm">
            <p>
              <span className="font-semibold">Hipotetik</span> : 0 Ton
            </p>
            <p>
              <span className="font-semibold">Tereka</span> : 0 Ton
            </p>
            <p>
              <span className="font-semibold">Tertunjuk</span> : 0 Ton
            </p>
            <p>
              <span className="font-semibold">Terukur</span> : 4.172,5 Ton
            </p>
            <p>
              <span className="font-semibold">Terkira</span> : 0 Ton
            </p>
            <p>
              <span className="font-semibold">Terbukti</span> : 0 Ton
            </p>
          </div>
        </div>
      )}
      {activeTab === 'logam' && (
        <div className="bg-gray-200 p-2 h-full rounded-b-md rounded-t-md">
          anu 2
        </div>
      )}
    </div>
  );
};

export default DataBijihLogam;
