import AdminPanel from '../pages/admin-panel/admin-panel';
import ApiKeys from '../pages/api-keys/api-keys';
import Articles from '../pages/articles/articles';
import ChosenArticle from '../pages/chosen-article/chosen-article';
import ChosenTutorial from '../pages/chosen-tutorial/chosen-tutorial';
import Connecting from '../pages/connecting/connecting';
import ContactUs from '../pages/contactUs/contactUs';
import Dashboard from '../pages/dashboard/dashboard';
import Home from '../pages/home/Home';
import Products from '../pages/products/products';
import ProfileSetting from '../pages/profile-setting/profile-setting';
import Robots from '../pages/robots/robots';
import Tutorials from '../pages/tutorials/tutorials';
import PagesLayout from './layout/pages-layout/pages-layout';

const routes = [
  {
    path: '/',
    element: <PagesLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'contactUs', element: <ContactUs /> },
      { path: 'articles', element: <Articles /> },
      { path: 'tutorials', element: <Tutorials /> },
      { path: 'article/:id', element: <ChosenArticle /> },
      { path: 'tutorial/:id', element: <ChosenTutorial /> },
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
