import { NavLink, useNavigate } from 'react-router-dom';
import logoNav from '../../assets/logo/geoRIMA.png';
import Swal from 'sweetalert2';

const NavbarAdmin = () => {
  const navigate = useNavigate();

  const alert = () => {
    Swal.fire({
      icon: 'warning',
      title: 'Anda Ingin Logout?',
      showCancelButton: true,
      confirmButtonText: 'Logout',
      confirmButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login');
      }
    });
  };

  return (
    <div className="p-4 px-6 bg-slate-800 text-yellow-400 fixed top-0 inset-x-0 flex justify-between items-center font-bold">
      <div className="flex justify-center items-center gap-2 z-[999999]">
        <img src={logoNav} alt="logo navbar" className="w-7" />
        <header className="font-bold text-yellow-400 text-xl">GeoRIMA</header>
      </div>
      <div className="text-white flex gap-5 justify-center items-center">
        <NavLink to="/dashboard" className="navbar hover:text-gray-300">
          <p>Dashboard</p>
        </NavLink>
        <NavLink to="/potensi" className="navbar hover:text-gray-300">
          <p>Potensi</p>
        </NavLink>
        <NavLink to="/" className="hover:text-gray-300">
          <p>Maps</p>
        </NavLink>
        <NavLink to="/request" className="navbar hover:text-gray-300">
          <p>Request</p>
        </NavLink>
        <button
          onClick={alert}
          className="bg-red-400 hover:bg-red-300 active:bg-red-400 p-1 px-2 rounded-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavbarAdmin;
