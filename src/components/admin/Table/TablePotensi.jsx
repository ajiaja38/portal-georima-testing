import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TablePotensi = () => {
  const { activeTab } = useSelector((state) => state.activeTabs);

  const items = [
    {
      id: 1,
      name: 'Tembaga',
      kelompok: 'Logam Dasar',
      provinsi: 'Sumatera Selatan',
      kabupaten: ' Empat Lawang',
      location: 'Daerah Kecamatan Pino',
      price: '100.000 Ton',
      image:
        'https://awsimages.detik.net.id/visual/2021/08/13/tambang-emas-toka-tindung-milik-archi-indonesia_169.jpeg?w=650',
      processed: false,
    },
    {
      id: 2,
      name: 'Emas Alluvial',
      kelompok: ' Logam Mulia',
      provinsi: 'Lampung',
      kabupaten: 'Lampung Utara',
      location: 'Blambangan Ompu',
      price: '350.000 Ton',
      image:
        'https://asset-2.tstatic.net/jabar/foto/bank/images/ambang-batubara-adaro-energy.jpg',
      processed: false,
    },
    {
      id: 3,
      name: 'Perak',
      kelompok: 'Logam Mulia',
      provinsi: 'Jawa Barat',
      kabupaten: 'Garut',
      location: 'Prospek Papandayan',
      price: '1.520.000 Ton',
      image:
        'https://www.suarasurabaya.net/wp-content/uploads/2019/11/kk228839_clip10.jpg',
      processed: false,
    },
    {
      id: 4,
      name: 'Intan',
      kelompok: 'Batu Mulia',
      provinsi: 'Kalimantan Tengah',
      kabupaten: 'Murung Raya',
      location: 'Perbukitan Desa Malasan',
      price: '100.640 Ton',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6eg7uE9GzsPkIp62Ep9zV2H92ZMhiTbGH9g&usqp=CAU',
      processed: false,
    },
    {
      id: 5,
      name: 'Fosfat',
      kelompok: 'Mineral Industri',
      provinsi: 'Papua Barat',
      kabupaten: 'Maybrat',
      location: 'Sauf',
      price: '3.060.000 Ton',
      image:
        'https://4.bp.blogspot.com/-G6WnHa_bSpY/W6cBqzMH9QI/AAAAAAAAGYA/JqQVe6XNSugg8blVsUpf8n9RkGJ0lSgHACLcBGAs/w977-h551-c-rw/tambang%2Bbatu%2Bfosfat.jpg',
      processed: false,
    },
  ];

  return (
    <div className="my-4 w-full flex justify-center">
      <table className="border text-sm text-left text-gray-500">
        <thead className="text-xs text-white uppercase bg-gray-800">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            {(activeTab === 'mineralLogam' ||
              activeTab === 'mineralBukanLogam') && (
              <>
                <th scope="col" className="px-6 py-3">
                  Komoditas
                </th>
                <th scope="col" className="px-6 py-3">
                  Kelompok
                </th>
              </>
            )}
            <th scope="col" className="px-6 py-3">
              Provinsi
            </th>
            <th scope="col" className="px-6 py-3">
              Kabupaten
            </th>
            <th scope="col" className="px-6 py-3">
              Lokasi
            </th>
            <th scope="col" className="px-6 py-3">
              Sumber daya
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Gambar
            </th>
            <th scope="col" className="text-center px-6 py-3">
              Detail
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr className="bg-white border-b hover:bg-gray-50" key={item.id}>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {item.id}
              </th>
              {(activeTab === 'mineralLogam' ||
                activeTab === 'mineralBukanLogam') && (
                <>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.kelompok}</td>
                </>
              )}
              <td className="px-6 py-4">{item.provinsi}</td>
              <td className="px-6 py-4">{item.kabupaten}</td>
              <td className="px-6 py-4">{item.location}</td>
              <td className="px-6 py-4">{item.price}</td>
              <td className="px-6 py-4">
                <img
                  src={item.image}
                  alt="Image Potensi Sumber Daya"
                  className="w-28"
                />
              </td>
              <td className="px-6 py-4 text-center">
                <Link to={`/potensi/detail/${item.id}`}>
                  <button className="font-medium text-white p-2 bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-400 rounded-md">
                    Detail
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePotensi;
