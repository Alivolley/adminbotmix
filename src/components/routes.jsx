import AdminPanel from '../pages/admin-panel/admin-panel';
import ApiKeys from '../pages/api-keys/api-keys';
import Connecting from '../pages/connecting/connecting';
import Dashboard from '../pages/dashboard/dashboard';
import Home from '../pages/home/Home';
import Pricing from '../pages/pricing/pricing';
import ProfileSetting from '../pages/profile-setting/profile-setting';
import Robots from '../pages/robots/robots';
import PagesLayout from './layout/pages-layout';

const routes = [
  {
    path: '/',
    element: <PagesLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'pricing', element: <Pricing /> },
    ],
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
