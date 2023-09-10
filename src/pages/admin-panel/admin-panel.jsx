import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// MUI
import { Drawer, IconButton } from '@mui/material';

// Icons
import MenuIcon from '@mui/icons-material/Menu';

// Components
import { useState } from 'react';
import Sidebar from '../../components/layout/sidebar/sidebar';

function AdminPanel() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useSelector(state => state.themeReducer);

  return (
    <div className="min-h-[100vh] bg-bgPrimary px-6 pt-7 transition-colors duration-200 dark:bg-bgPrimaryDark">
      <div className="xl:flex xl:gap-7">
        <Sidebar shouldHide />
        <div className="grow">
          <div className="text-textMain transition-colors duration-200 dark:text-textMainDark">
            <IconButton
              color="inherit"
              onClick={() => setMobileMenuOpen(true)}
              className="xl:!hidden"
            >
              <MenuIcon fontSize="inherit" color="inherit" />
            </IconButton>
          </div>

          <Outlet />
        </div>
      </div>

      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        SlideProps={{
          direction: 'left',
        }}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          'div:nth-of-type(3)': {
            bgcolor: theme === 'dark' ? '#1F2733' : '#ffffff',
            '& > div': {
              bgcolor: 'transparent',
            },
          },
        }}
        className="font-vazir"
      >
        <Sidebar />
      </Drawer>
    </div>
  );
}

export default AdminPanel;
