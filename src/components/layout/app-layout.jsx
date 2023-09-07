// MUI
import { ThemeProvider, createTheme } from '@mui/material';

// Redux
import { useSelector } from 'react-redux';

import getDesignTokens from '../../configs/theme';

function AppLayout({ children }) {
  const themeMode = useSelector(state => state.themeReducer);
  const themeConfig = createTheme(getDesignTokens(themeMode));

  return (
    <ThemeProvider theme={themeConfig}>
      <div {...(themeMode === 'dark' && { className: 'dark' })}>{children}</div>
    </ThemeProvider>
  );
}

export default AppLayout;
