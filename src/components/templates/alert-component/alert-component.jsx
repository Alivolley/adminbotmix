/* eslint-disable no-nested-ternary */
import { useState } from 'react';

// Mui
import { Alert } from '@mui/material';

// Icons
import CloseIcon from '@mui/icons-material/Close';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

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
            <Alert className="!rounded-xl !py-1 !font-vazir" severity={type} icon={false}>
               <div className="flex items-start">
                  <div className="flex items-center gap-2">
                     <button type="button" onClick={closeAlertHandler}>
                        <CloseIcon />
                     </button>
                     <p>
                        {type === 'info' ? (
                           <InfoOutlinedIcon color="info" />
                        ) : type === 'warning' ? (
                           <WarningAmberIcon color="warning" />
                        ) : type === 'error' ? (
                           <ErrorOutlineIcon color="error" />
                        ) : type === 'success' ? (
                           <CheckCircleOutlineOutlinedIcon color="success" />
                        ) : null}
                     </p>
                  </div>
                  <p className="pr-3">{children}</p>
               </div>
            </Alert>
         </RtlProvider>
      );
   }
}

export default AlertComponent;
