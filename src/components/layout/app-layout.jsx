import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';

import { ReactQueryDevtools } from 'react-query/devtools';

// MUI
import { ThemeProvider, createTheme } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import Box from '@mui/material/Box';

// Redux
import { useSelector } from 'react-redux';

import getDesignTokens from '../../configs/theme';

import 'react-toastify/dist/ReactToastify.css';

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
         <ReactQueryDevtools />
         <ToastContainer />
         <div className={`font-vazir ${themeMode === 'dark' ? 'dark' : ''}`}>{children}</div>
      </ThemeProvider>
   );
}

export default AppLayout;
