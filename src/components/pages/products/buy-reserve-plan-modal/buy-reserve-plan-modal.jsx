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
import { BuyPlanModalStyle } from '../buy-plan-modal/buy-plan-modal.style';
import RtlProvider from '../../../layout/rtlProvider/rtlProvider';

// Apis
import useNoPay from '../../../../apis/payment/useNoPay/useNoPay';
import useZarinPay from '../../../../apis/payment/useZarinPay/useZarinPay';

function BuyReservePlanModal({ closeModal, open }) {
   const theme = useSelector(state => state.themeReducer);

   const { mutate: zarinMutate, isLoading: zarinIsLoading } = useZarinPay();
   const { mutate: noPayMutate, isLoading: noPayIsLoading } = useNoPay();

   const { handleSubmit, control, reset, watch } = useForm({
      defaultValues: {
         type: 'zarinpal',
         planDuration: 1,
         plan: 'pro',
      },
      mode: 'onSubmit',
   });

   const planTime = watch('planDuration');

   const formSubmit = data => {
      const newData = { plan: data?.plan, plan_duration: data?.planDuration };
      if (data?.type === 'zarinpal') {
         zarinMutate(newData);
      } else if (data?.type === 'noPayment') {
         noPayMutate(newData);
      }
   };

   function calculatePercent(number, percent) {
      const multiplyNumber = number * planTime;
      const percentValue = (multiplyNumber * percent) / 100;
      const result = multiplyNumber - percentValue;

      return result.toFixed(2);
   }

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
            <div>
               <p className="my-2 text-xl">خرید پلن رزور</p>
            </div>

            <RtlProvider>
               <form className="mt-8 space-y-5" onSubmit={handleSubmit(formSubmit)}>
                  <Controller
                     control={control}
                     name="planDuration"
                     rules={{ required: 'این فیلد اجباری است' }}
                     render={({ field: { onChange, value } }) => (
                        <FormControl color="primaryBlue" className="w-full">
                           <InputLabel className="!font-vazir">مدت پلن</InputLabel>
                           <Select
                              value={value}
                              label="مدت پلن"
                              onChange={onChange}
                              className="!font-vazir"
                              disabled={zarinIsLoading || noPayIsLoading}
                           >
                              <MenuItem value={1} className="!font-vazir">
                                 ۱ ماهه
                              </MenuItem>
                              <MenuItem value={3} className="!font-vazir">
                                 <div className="flex items-center gap-1">
                                    <p>۳ ماهه</p>
                                    <p className="text-xs text-textGray">( ۵ درصد تخفیف )</p>
                                 </div>
                              </MenuItem>
                              <MenuItem value={12} className="!font-vazir">
                                 <div className="flex items-center gap-1">
                                    <p>۱۲ ماهه</p>
                                    <p className="text-xs text-textGray">( ۲۰ درصد تخفیف )</p>
                                 </div>
                              </MenuItem>
                           </Select>
                        </FormControl>
                     )}
                  />

                  <Controller
                     control={control}
                     name="plan"
                     rules={{ required: 'این فیلد اجباری است' }}
                     render={({ field: { onChange, value } }) => (
                        <FormControl>
                           <RadioGroup value={value} onChange={onChange}>
                              <FormControlLabel
                                 disabled={zarinIsLoading || noPayIsLoading}
                                 value="pro"
                                 control={<Radio color="primaryBlue" />}
                                 label={
                                    <div className="flex items-center gap-4">
                                       پرو
                                       <div className="flex items-start justify-end gap-2 pt-1.5">
                                          {planTime > 1 ? (
                                             <sub className="text-[9px] text-red-400">
                                                {planTime === 3 ? '5٪' : planTime === 12 ? '20٪' : null}
                                             </sub>
                                          ) : null}
                                          <p className="text-sm">
                                             {planTime === 1
                                                ? 2.99
                                                : planTime === 3
                                                ? calculatePercent(2.99, 5)
                                                : planTime === 12
                                                ? calculatePercent(2.99, 20)
                                                : null}{' '}
                                             $
                                          </p>
                                       </div>
                                    </div>
                                 }
                              />

                              <FormControlLabel
                                 disabled={zarinIsLoading || noPayIsLoading}
                                 value="premium"
                                 control={<Radio color="primaryBlue" />}
                                 label={
                                    <div className="flex items-center gap-4">
                                       پرمیوم
                                       <div className="flex items-start justify-end gap-2 pt-1.5">
                                          {planTime > 1 ? (
                                             <sub className="text-[9px] text-red-400">
                                                {planTime === 3 ? '5٪' : planTime === 12 ? '20٪' : null}
                                             </sub>
                                          ) : null}
                                          <p>
                                             {planTime === 1
                                                ? 4.99
                                                : planTime === 3
                                                ? calculatePercent(4.99, 5)
                                                : planTime === 12
                                                ? calculatePercent(4.99, 20)
                                                : null}{' '}
                                             $
                                          </p>
                                       </div>
                                    </div>
                                 }
                              />
                           </RadioGroup>
                        </FormControl>
                     )}
                  />
                  <div className="border-t border-gray-600">
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

export default BuyReservePlanModal;
