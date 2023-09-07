import AdminPanel from '../pages/admin-panel/admin-panel';
import ApiKeys from '../pages/api-keys/api-keys';
import Connecting from '../pages/connecting/connecting';
import Dashboard from '../pages/dashboard/dashboard';
import Home from '../pages/home/Home';
import ProfileSetting from '../pages/profile-setting/profile-setting';
import Robots from '../pages/robots/robots';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/admin-panel',
    element: <AdminPanel />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'robots', element: <Robots /> },
      { path: 'api-keys', element: <ApiKeys /> },
      { path: 'connecting', element: <Connecting /> },
      { path: 'profile-setting', element: <ProfileSetting /> },
    ],
  },
];

export default routes;
