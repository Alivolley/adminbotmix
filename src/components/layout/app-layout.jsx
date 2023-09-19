import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';

// MUI
import { ThemeProvider, createTheme } from '@mui/material';

// Redux
import { useSelector } from 'react-redux';

import getDesignTokens from '../../configs/theme';

function AppLayout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  const themeMode = useSelector(state => state.themeReducer);

  const themeConfig = createTheme(getDesignTokens(themeMode));

  return (
    <ThemeProvider theme={themeConfig}>
      <div className={`font-vazir ${themeMode === 'dark' ? 'dark' : ''}`}>
        {children}
      </div>
    </ThemeProvider>
  );
}

export default AppLayout;
