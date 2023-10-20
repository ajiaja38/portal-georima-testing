import Dashboard from './admin/Dashboard';
import DetailPotensi from './admin/DetailPotensi';
import Potensi from './admin/Potensi';
import Request from './admin/Request';
import HomePage from './common/HomePage';
import LoginPage from './common/LoginPage';
import RegisterPage from './common/RegisterPage';
import UnauthorizedPage from './error/UnauthorizedPage';

export const commonPage = {
  Home: <HomePage />,
  Login: <LoginPage />,
  Register: <RegisterPage />,
};

export const adminPage = {
  Dashboard: <Dashboard />,
  Potensi: <Potensi />,
  DetailPotensi: <DetailPotensi />,
  Request: <Request />,
};

export const errorPage = {
  UnauthorizedPage: <UnauthorizedPage />,
};
