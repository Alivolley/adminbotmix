import { useForm, Controller } from 'react-hook-form';

// MUI
import {
   Dialog,
   IconButton,
   InputAdornment,
   TextField,
   FormControlLabel,
   Radio,
   RadioGroup,
   Typography,
   FormControl,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { LoadingButton } from '@mui/lab';

// Redux
import { useSelector } from 'react-redux';

// Style
import { IncreaseWalletModalStyle } from './increase-wallet-modal.style';
import RtlProvider from '../../../layout/rtlProvider/rtlProvider';

// Apis
import useIncreaseWalletZarin from '../../../../apis/dashboard/useIncreaseWalletZarin/useIncreaseWalletZarin';
import useIncreaseWalletNoPay from '../../../../apis/dashboard/useIncreaseWalletNoPay/useIncreaseWalletNoPay';

function IncreaseWalletModal({ closeModal, open }) {
   const theme = useSelector(state => state.themeReducer);

   const { mutate: zarinMutate, isLoading: zarinIsLoading } = useIncreaseWalletZarin();
   const { mutate: noPayMutate, isLoading: noPayIsLoading } = useIncreaseWalletNoPay();

   const {
      handleSubmit,
      register,
      control,
      reset,
      formState: { errors },
   } = useForm({
      defaultValues: {
         type: 'zarinpal',
         amount: '',
      },
      mode: 'onSubmit',
   });

   const formSubmit = data => {
      if (data?.type === 'zarinpal') {
         zarinMutate({ amount: data?.amount });
      } else if (data?.type === 'noPayment') {
         noPayMutate({ amount: data?.amount });
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
         <IncreaseWalletModalStyle className="p-5 customSm:w-96">
            <p className="mt-1 text-xl">افزایش موجودی کیف پول</p>

            <RtlProvider>
               <form className="mt-8 space-y-5" onSubmit={handleSubmit(formSubmit)}>
                  <div id="inputNumber">
                     <TextField
                        type="number"
                        label="مقدار افزایش"
                        color="primaryBlue"
                        className="w-full"
                        InputProps={{
                           endAdornment: (
                              <InputAdornment position="end">
                                 <p className="text-xs text-[#aaacb2]">USDT - تتر</p>
                              </InputAdornment>
                           ),
                        }}
                        {...register('amount', {
                           required: {
                              value: true,
                              message: 'این فیلد اجباری است',
                           },
                        })}
                        error={!!errors?.amount}
                        helperText={errors?.amount?.message}
                        disabled={zarinIsLoading || noPayIsLoading}
                     />
                  </div>

                  <div>
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
                                    label={<Typography>زرین پال</Typography>}
                                 />

                                 <FormControlLabel
                                    disabled={zarinIsLoading || noPayIsLoading}
                                    value="noPayment"
                                    control={<Radio color="primaryBlue" />}
                                    label={<Typography>No payment</Typography>}
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
         </IncreaseWalletModalStyle>
      </Dialog>
   );
}

export default IncreaseWalletModal;
