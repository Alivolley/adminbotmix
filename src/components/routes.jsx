import AdminPanel from '../pages/admin-panel/admin-panel';
import ApiKeys from '../pages/api-keys/api-keys';
import Articles from '../pages/articles/articles';
import ChosenArticle from '../pages/chosen-article/chosen-article';
import ChosenTutorial from '../pages/chosen-tutorial/chosen-tutorial';
import Connecting from '../pages/connecting/connecting';
import ContactUs from '../pages/contactUs/contactUs';
import Dashboard from '../pages/dashboard/dashboard';
import Home from '../pages/home/Home';
import Login from '../pages/login/login';
import Products from '../pages/products/products';
import ProfileSetting from '../pages/profile-setting/profile-setting';
import RobotFunctionality from '../pages/robot-functionality/robot-functionality';
import Robots from '../pages/robots/robots';
import Rules from '../pages/rules/rules';
import Tutorials from '../pages/tutorials/tutorials';
import PagesLayout from './layout/pages-layout/pages-layout';

const routes = [
  { path: 'login', element: <Login /> },

  {
    path: '/',
    element: <PagesLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'contactUs', element: <ContactUs /> },
      { path: 'rules', element: <Rules /> },
      { path: 'articles', element: <Articles /> },
      { path: 'tutorials', element: <Tutorials /> },
      { path: 'article/:id', element: <ChosenArticle /> },
      { path: 'tutorial/:id', element: <ChosenTutorial /> },
      { path: 'robotFunctionality/:id', element: <RobotFunctionality /> },
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
