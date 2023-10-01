/* eslint-disable react/jsx-no-useless-fragment */
// MUI

import { IconButton } from '@mui/material';

// Icons
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  changeToDarkMode,
  changeToLightMode,
} from '../../../store/reducers/themeReducer';

function ChangeThemeComponent() {
  const themeMode = useSelector(state => state.themeReducer);
  const dispatch = useDispatch();

  return (
    <>
      {themeMode === 'dark' ? (
        <IconButton onClick={() => dispatch(changeToLightMode())}>
          <DarkModeOutlinedIcon />
        </IconButton>
      ) : (
        <IconButton onClick={() => dispatch(changeToDarkMode())}>
          <Brightness5OutlinedIcon />
        </IconButton>
      )}
    </>
  );
}

export default ChangeThemeComponent;
