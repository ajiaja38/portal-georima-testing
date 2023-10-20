import { createHashRouter } from 'react-router-dom';
import { adminPage, commonPage, errorPage } from '../pages';

const router = createHashRouter([
  {
    path: '/',
    element: commonPage.Home,
    errorElement: <div>Halaman Tidak Tersedia!</div>,
  },
  {
    path: '/login',
    element: commonPage.Login,
  },
  {
    path: '/register',
    element: commonPage.Register,
  },
  {
    path: '/dashboard',
    element: adminPage.Dashboard,
  },
  {
    path: '/potensi',
    element: adminPage.Potensi,
  },
  {
    path: '/potensi/detail/:id',
    element: adminPage.DetailPotensi,
  },
  {
    path: '/request',
    element: adminPage.Request,
  },
  {
    path: '/unauthorized',
    element: errorPage.UnauthorizedPage,
  },
]);

export default router;
