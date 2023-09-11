import { useState } from 'react';

// Mui
import { Alert } from '@mui/material';

// Components
import RtlProvider from '../../layout/rtlProvider/rtlProvider';

function AlertComponent({ children }) {
  const [showAlert, setShowAlert] = useState(true);

  const closeAlertHandler = () => {
    setShowAlert(false);
  };

  if (showAlert) {
    return (
      <RtlProvider>
        <Alert
          onClose={closeAlertHandler}
          className="!rounded-xl !font-vazir"
          severity="info"
        >
          {children}
        </Alert>
      </RtlProvider>
    );
  }
}

export default AlertComponent;
