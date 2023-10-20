import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/geoRIMA2.png';

const LoginPage = () => {
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <img className="w-12 h-12 mr-2" src={logo} alt="logo" />
          <h1 className="font-bold text-3xl">
            Geo<span className="text-yellow-400">RIMA</span>
          </h1>
        </div>
        <div className="w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Login
            </h1>
            <div>
              <p className="font-bold text-lg">Selamat Datang,</p>
              <p className="font-semibold text-sm">
                Masukkan Akun untuk melanjutkan
              </p>
            </div>
            <div className="space-y-4 md:space-y-6" action="#">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Email Anda
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
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
                  required=""
                />
              </div>
              {/* <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-yellow-400 hover:underline">
                  Lupa password?
                </p>
              </div> */}
              <div>
                <NavLink to="/dashboard">
                  <button
                    type="submit"
                    className="w-full text-yellow-400 bg-gray-800 hover:bg-gray-600 active:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Sign in
                  </button>
                </NavLink>
              </div>
              <p className="text-sm text-center font-semibold text-gray-500">
                Baru Disini?{' '}
                <NavLink
                  to="/register"
                  className="font-medium text-yellow-400 hover:underline"
                >
                  Daftar Sekarang
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
