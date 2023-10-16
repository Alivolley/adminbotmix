import { useForm, Controller } from 'react-hook-form';

// MUI
import {
   Dialog,
   IconButton,
   FormControlLabel,
   Radio,
   RadioGroup,
   Typography,
   FormControl,
   InputLabel,
   Select,
   MenuItem,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { LoadingButton } from '@mui/lab';

// Redux
import { useSelector } from 'react-redux';

// Style
import { BuyPlanModalStyle } from './buy-plan-modal.style';
import RtlProvider from '../../../layout/rtlProvider/rtlProvider';

// Apis
import useNoPay from '../../../../apis/payment/useNoPay/useNoPay';
import useZarinPay from '../../../../apis/payment/useZarinPay/useZarinPay';

function BuyPlanModal({ closeModal, open, name, planeValue }) {
   const theme = useSelector(state => state.themeReducer);

   const { mutate: zarinMutate, isLoading: zarinIsLoading } = useZarinPay();
   const { mutate: noPayMutate, isLoading: noPayIsLoading } = useNoPay();

   const { handleSubmit, control, reset } = useForm({
      defaultValues: {
         type: 'zarinpal',
         plan_duration: 1,
      },
      mode: 'onSubmit',
   });

   const formSubmit = data => {
      const newData = { plan: planeValue, plan_duration: data?.plan_duration };

      if (data?.type === 'zarinpal') {
         zarinMutate(newData);
      } else if (data?.type === 'noPayment') {
         noPayMutate(newData);
      }
   };

   return (
      <Dialog
         open={open}
         onClose={() => {
            closeModal();
            reset();
         }}
         sx={{
            '& > div': {
               '& > div': {
                  boxShadow: 'none',
                  backgroundColor: theme === 'dark' ? '#212836' : '#ffffff',
                  backgroundImage: 'none',
                  padding: '10px',
               },
            },
         }}
      >
         <div>
            <IconButton
               onClick={() => {
                  closeModal();
                  reset();
               }}
            >
               <CloseIcon />
            </IconButton>
         </div>
         <BuyPlanModalStyle className="w-56 p-5 customSm:w-96">
            <p className="mt-1 text-xl">خرید اشتراک {name}</p>

            <RtlProvider>
               <form className="mt-8 space-y-5" onSubmit={handleSubmit(formSubmit)}>
                  <Controller
                     control={control}
                     name="plan_duration"
                     rules={{ required: 'این فیلد اجباری است' }}
                     render={({ field: { onChange, value } }) => (
                        <FormControl fullWidth color="primaryBlue" disabled={zarinIsLoading || noPayIsLoading}>
                           <InputLabel>مدت پلن</InputLabel>
                           <Select value={value} label="مدت پلن" onChange={onChange}>
                              <MenuItem value={1} className="!font-vazir">
                                 ۱ ماهه
                              </MenuItem>
                              <MenuItem value={3} className="!font-vazir">
                                 ۳ ماهه
                              </MenuItem>
                              <MenuItem value={6} className="!font-vazir">
                                 ۶ ماهه
                              </MenuItem>
                              <MenuItem value={12} className="!font-vazir">
                                 ۱۲ ماهه
                              </MenuItem>
                           </Select>
                        </FormControl>
                     )}
                  />

                  <div>
                     <p className="mb-5 mt-8">انتخاب درگاه پرداخت :</p>

                     <Controller
                        control={control}
                        name="type"
                        rules={{ required: 'این فیلد اجباری است' }}
                        render={({ field: { onChange, value } }) => (
                           <FormControl>
                              <RadioGroup value={value} onChange={onChange}>
                                 <FormControlLabel
                                    disabled={zarinIsLoading || noPayIsLoading}
                                    value="zarinpal"
                                    control={<Radio color="primaryBlue" />}
                                    label={<Typography fontSize={14}>زرین پال ( ریالی )</Typography>}
                                 />

                                 <FormControlLabel
                                    disabled={zarinIsLoading || noPayIsLoading}
                                    value="noPayment"
                                    control={<Radio color="primaryBlue" />}
                                    label={<Typography fontSize={14}>NowPayments ( کریپتو )</Typography>}
                                 />
                              </RadioGroup>
                           </FormControl>
                        )}
                     />
                  </div>

                  <LoadingButton
                     type="submit"
                     variant="contained"
                     color="primaryBlue"
                     className="w-full"
                     loading={zarinIsLoading || noPayIsLoading}
                  >
                     پرداخت
                  </LoadingButton>
               </form>
            </RtlProvider>
         </BuyPlanModalStyle>
      </Dialog>
   );
}

export default BuyPlanModal;
