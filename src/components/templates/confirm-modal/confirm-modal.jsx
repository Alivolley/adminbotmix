// MUI
import { Button, Dialog, DialogActions, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { LoadingButton } from '@mui/lab';

// Redux
import { useSelector } from 'react-redux';

function ConfirmModal({ closeModal, title, confirmHandler, open, confirmLoading = false }) {
   const theme = useSelector(state => state.themeReducer);
   return (
      <div>
         <Dialog
            open={open}
            onClose={closeModal}
            sx={{
               '& > div': {
                  '& > div': {
                     backgroundColor: theme === 'dark' ? '#212836' : '#ffffff',
                     backgroundImage: 'none',
                     padding: '10px',
                  },
               },
            }}
         >
            <div>
               <IconButton onClick={closeModal}>
                  <CloseIcon />
               </IconButton>
            </div>
            <DialogTitle className="!mb-5 !p-5 text-center !font-vazir customMd:text-start">{title}</DialogTitle>
            <DialogActions className="!p-5">
               <div className="flex items-center gap-5">
                  <LoadingButton
                     onClick={confirmHandler}
                     className="!font-vazir"
                     variant="contained"
                     color="success"
                     loading={confirmLoading}
                  >
                     تایید
                  </LoadingButton>
                  <Button onClick={closeModal} className="!font-vazir" variant="contained" color="error">
                     انصراف
                  </Button>
               </div>
            </DialogActions>
         </Dialog>
      </div>
   );
}

export default ConfirmModal;
