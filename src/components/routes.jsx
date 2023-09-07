import AdminPanel from '../pages/admin-panel/admin-panel';
import Dashboard from '../pages/dashboard/dashboard';
import Home from '../pages/home/Home';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/admin-panel',
    element: <AdminPanel />,
    children: [{ path: 'dashboard', element: <Dashboard /> }],
  },
];

export default routes;
