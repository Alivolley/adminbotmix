import { useEffect } from 'react';
import AOS from 'aos';

// MUI
import { ThemeProvider, createTheme } from '@mui/material';

// Redux
import { useSelector } from 'react-redux';

import getDesignTokens from '../../configs/theme';

function AppLayout({ children }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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
