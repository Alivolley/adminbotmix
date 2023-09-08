import { useState } from 'react';

// Icons
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';

// Mui
import { IconButton } from '@mui/material';

function AlertComponent({ children }) {
  const [showAlert, setShowAlert] = useState(true);

  const closeAlertHandler = () => {
    setShowAlert(false);
  };

  if (showAlert) {
    return (
      <div
        className="flex items-start gap-3 rounded-[15px] bg-[#e5f6fd] p-4 text-[#014361] 
      transition-colors duration-200 dark:bg-[#071318] dark:text-[#b8e7fb]"
      >
        <div className="mt-2">
          <ErrorOutlineOutlinedIcon color="inherit" fontSize="inherit" />
        </div>
        <p className="mt-2">{children}</p>
        <IconButton
          color="inherit"
          sx={{ marginRight: 'auto' }}
          onClick={closeAlertHandler}
        >
          <CloseIcon color="inherit" fontSize="inherit" />
        </IconButton>
      </div>
    );
  }
}

export default AlertComponent;
