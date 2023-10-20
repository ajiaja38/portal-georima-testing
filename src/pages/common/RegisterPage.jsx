import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/geoRIMA2.png';

const RegisterPage = () => {
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="w-14 h-14 mr-2" src={logo} alt="logo" />
          <h1 className="font-bold">
            Geo<span className="text-yellow-400">RIMA</span>
          </h1>
        </a>
        <div className="w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Register
            </h1>
            <div>
              <p className="font-bold text-lg">Helo, Kawan!</p>
              <p className="font-semibold text-sm">
                Daftarkan akun mu untuk memasuki{' '}
                <span className="font-bold">GeoRima.</span>
              </p>
            </div>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Nama Lengkap Anda
                </label>
                <input
                  type="Text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5"
                  placeholder="Nama Lengkap..."
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Email Anda
                </label>
                <input
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full text-yellow-400 bg-gray-800 hover:bg-gray-600 active:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Registrasi
                </button>
              </div>
              <p className="text-sm text-center font-semibold text-gray-500">
                Sudah Punya Akun?{' '}
                <NavLink
                  to="/login"
                  className="font-medium text-yellow-500 hover:underline"
                >
                  Login Sekarang
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
