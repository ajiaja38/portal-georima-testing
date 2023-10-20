import { AiFillCloseSquare } from 'react-icons/ai';
import logo from '../../../assets/logo/geoRIMA2.png';

const AboutUs = ({ closeModal }) => {
  return (
    <>
      <div
        onClick={closeModal}
        className="fixed inset-0 bg-black/30 z-[999999]"
      ></div>
      <div className="bg-gray-900 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3  rounded-lg z-[99999999] animate__animated animate__fadeIn">
        <div
          onClick={closeModal}
          className="absolute top-3 right-3 text-yellow-500 text-2xl cursor-pointer"
        >
          <AiFillCloseSquare />
        </div>
        <h1 className="p-2 font-bold text-2xl text-yellow-400 text-center">
          Tentang Kami
        </h1>
        <div className="relative p-3 bg-white rounded mt-5 h-96 w-[45rem] flex flex-col justify-between">
          <section className="flex gap-2 p-5 py-7">
            <div className="p-5 w-96">
              <img src={logo} alt="logo georima" className="w-24" />
            </div>
            <div className="space-y-4 text-justify">
              <p>
                <span className="font-semibold">
                  GeoRIMA (Geological Resource of Indonesia Multiplatform
                  Aplication)
                </span>{' '}
                adalah aplikasi yang digunakan untuk memberikan informasi kepada
                masyarakat umum mengenai keterdapatan potensi mineral, batubara,
                panas bumi di seluruh Indonesia.
              </p>
              <p>
                GeoRIMA dipersembahkan oleh{' '}
                <span className="font-semibold">
                  Pusat Sumber Daya Mineral, Batubara dan Panas Bumi (PSDMBP),
                  Badan Geologi, Kementerian ESDM.
                </span>
              </p>
            </div>
          </section>
          <footer className="w-full bottom-0 border-black border-t-2">
            <p className="text-xs font-bold text-center mt-1">
              Geological Resource of Indonesia Multiplatform Application
              (GeoRIMA){' '}
              <span className="font-normal">
                © 2023 PSDMBP, Map by PPTIK ITB
              </span>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
