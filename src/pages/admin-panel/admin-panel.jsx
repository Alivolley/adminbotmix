import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/layout/sidebar/sidebar';

function AdminPanel() {
  return (
    <div className="min-h-[100vh] bg-bgPrimary px-6 pt-7 transition-colors duration-200 dark:bg-bgPrimaryDark">
      <div className="flex gap-7">
        <Sidebar />
        <div className="grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
