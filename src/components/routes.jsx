import AdminPanel from '../pages/admin-panel/admin-panel';
import Dashboard from '../pages/dashboard/dashboard';

const routes = [
  {
    path: '/admin-panel',
    element: <AdminPanel />,
    children: [{ path: 'dashboard', element: <Dashboard /> }],
  },
];

export default routes;
