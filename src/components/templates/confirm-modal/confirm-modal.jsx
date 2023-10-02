// MUI
import { Button, Dialog, DialogActions, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Redux
import { useSelector } from 'react-redux';

function ConfirmModal({ closeModal, title, confirmHandler, open }) {
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
                  <Button onClick={confirmHandler} className="!font-vazir" variant="contained" color="success">
                     تایید
                  </Button>
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
