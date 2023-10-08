import { useState } from 'react';

// Mui
import { Alert } from '@mui/material';

// Components
import RtlProvider from '../../layout/rtlProvider/rtlProvider';
import axiosInstance from '../../../configs/axiosInstance';

function AlertComponent({ children, type = 'info', alertId }) {
   const [showAlert, setShowAlert] = useState(true);

   const closeAlertHandler = () => {
      setShowAlert(false);
      axiosInstance.post('account/seenAlert/', {
         alertId,
      });
   };

   if (showAlert) {
      return (
         <RtlProvider>
            <Alert onClose={closeAlertHandler} className="!rounded-xl !font-vazir" severity={type}>
               {children}
            </Alert>
         </RtlProvider>
      );
   }
}

export default AlertComponent;
