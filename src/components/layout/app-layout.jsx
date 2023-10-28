import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';

// MUI
import { ThemeProvider, createTheme } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import Box from '@mui/material/Box';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail } from '../../store/reducers/emailReducer';

import getDesignTokens from '../../configs/theme';

import 'react-toastify/dist/ReactToastify.css';

function AppLayout({ children }) {
   const { pathname } = useLocation();
   const dispatch = useDispatch();

   const themeMode = useSelector(state => state.themeReducer);
   const isLogin = useSelector(state => state.loginStatusReducer);
   const themeConfig = createTheme(getDesignTokens(themeMode));

   useEffect(() => {
      AOS.init();
      AOS.refresh();

      if (isLogin) {
         dispatch(getUserEmail());
      }
   }, []);

   useEffect(() => {
      document.documentElement.scrollTo({
         top: 0,
         left: 0,
         behavior: 'instant',
      });
   }, [pathname]);

   return (
      <ThemeProvider theme={themeConfig}>
         <ToastContainer />
         <div className={`font-vazir ${themeMode === 'dark' ? 'dark' : ''}`}>{children}</div>
      </ThemeProvider>
   );
}

export default AppLayout;
