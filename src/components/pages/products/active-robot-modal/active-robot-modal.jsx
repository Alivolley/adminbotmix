import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';

// MUI
import {
   Checkbox,
   Dialog,
   FormControl,
   FormControlLabel,
   FormHelperText,
   InputAdornment,
   InputLabel,
   MenuItem,
   Radio,
   RadioGroup,
   Select,
   TextField,
   Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Redux
import { useSelector } from 'react-redux';

// Assets
import RtlProvider from '../../../layout/rtlProvider/rtlProvider';
import { BuyModalWrapper } from '../product-card/product-card.style';

// Apis
import useActivateRobot from '../../../../apis/products/useActivateRobot/useActivateRobot';

function ActiveRobotModal({ show, closeModal, detail }) {
   const theme = useSelector(state => state.themeReducer);
   const { mutate: activateRobot, isLoading: activateRobotIsLoading } = useActivateRobot(detail?.id);

   const {
      handleSubmit,
      register,
      watch,
      reset,
      control,
      formState: { errors },
   } = useForm({
      defaultValues: {
         fund_type: 'percent',
         fund_value: '',
         custom_leverage: '',
         active: false,
         exchange: '',
         type: 'futures',
         api_key: '',
         api_secret: '',
         passphrase: '',
      },
      mode: 'onSubmit',
   });

   const chosenExchange = watch('exchange');
   const chosenFundType = watch('fund_type');

   useEffect(() => {
      reset(prev => ({
         ...prev,
         ...{
            exchange: chosenExchange,
            type: 'futures',
            api_key: '',
            api_secret: '',
            passphrase: '',
         },
      }));
   }, [chosenExchange]);

   const formSubmit = data => {
      activateRobot({ ...data, productId: detail?.id });
   };

   return (
      <Dialog
         fullWidth
         open={show}
         onClose={() => {
            closeModal();
            reset({
               fund_type: 'percent',
               fund_value: '',
               custom_leverage: '',
               active: false,
               exchange: '',
               type: 'futures',
               api_key: '',
               api_secret: '',
               passphrase: '',
            });
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
         <RtlProvider>
            <BuyModalWrapper className="p-5">
               <p className="mb-8 border-b border-gray-500 pb-5 text-xl">فعالسازی ربات {detail?.name}</p>
               <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col gap-6">
                  <div className="flex flex-wrap items-center gap-2 customSm:gap-4">
                     <p>نوع سرمایه :</p>
                     <Controller
                        control={control}
                        name="fund_type"
                        rules={{ required: 'این فیلد اجباری است' }}
                        render={({ field: { onChange, value } }) => (
                           <FormControl>
                              <RadioGroup row value={value} onChange={onChange}>
                                 <FormControlLabel
                                    value="percent"
                                    control={<Radio size="medium" color="primaryBlue" />}
                                    label={
                                       <Typography variant="body2" sx={{ fontSize: '14px' }}>
                                          درصدی
                                       </Typography>
                                    }
                                 />

                                 <FormControlLabel
                                    value="static"
                                    control={<Radio size="medium" color="primaryBlue" />}
                                    label={
                                       <Typography variant="body2" sx={{ fontSize: '14px' }}>
                                          مقدار ثابت
                                       </Typography>
                                    }
                                 />
                              </RadioGroup>
                           </FormControl>
                        )}
                     />
                  </div>

                  <div id="inputNumber">
                     <TextField
                        label="مقدار سرمایه"
                        variant="outlined"
                        color="primaryBlue"
                        fullWidth
                        type="number"
                        {...register('fund_value', {
                           required: {
                              value: true,
                              message: 'این فیلد اجباری است',
                           },
                        })}
                        error={!!errors?.fund_value}
                        helperText={errors?.fund_value?.message}
                        InputProps={{
                           endAdornment: (
                              <InputAdornment position="start">
                                 {chosenFundType === 'percent' ? '٪ درصد' : '$ تتر'}
                              </InputAdornment>
                           ),
                        }}
                     />
                  </div>
                  {!detail?.isSabad && (
                     <div id="inputNumber">
                        <TextField
                           label="میزان اهرم"
                           variant="outlined"
                           color="primaryBlue"
                           fullWidth
                           type="number"
                           {...register('custom_leverage', {
                              max: {
                                 value: Number(detail?.max_allowed_leverage),
                                 message: `بیشترین اهرم مجاز برای شما ${Number(detail?.max_allowed_leverage)} است`,
                              },
                           })}
                           error={!!errors?.custom_leverage}
                           helperText={
                              errors?.custom_leverage
                                 ? errors?.custom_leverage?.message
                                 : 'ربات باتمیکس با مدیریت سرمایه بصورت خودکار اهرم معاملات را ارسال میکند, اگر میخواهید رباتتان با اهرم شخصی شما کار کند, این مقدار را وارد کنید, درغیر این صورت رباتتان از مدیریت سرمایه پیشنهادی باتمیکس استفاده خواهد کرد.'
                           }
                        />
                     </div>
                  )}

                  <Controller
                     control={control}
                     name="active"
                     render={({ field: { onChange, value } }) => (
                        <FormControlLabel
                           control={<Checkbox checked={value} />}
                           label="فعال شدن ربات پس از ساخت"
                           value={value}
                           onChange={onChange}
                        />
                     )}
                  />

                  <Controller
                     control={control}
                     name="exchange"
                     rules={{ required: 'این فیلد اجباری است' }}
                     render={({ field: { onChange, value } }) => (
                        <FormControl error={!!errors?.exchange} color="primaryBlue">
                           <InputLabel>صرافی</InputLabel>
                           <Select label="صرافی" value={value} onChange={onChange}>
                              {detail?.exchanges?.map(item => (
                                 <MenuItem value={item} key={item}>
                                    <p className="w-full text-left">{item}</p>
                                 </MenuItem>
                              ))}
                           </Select>
                           {errors?.exchange && <FormHelperText>{errors?.exchange?.message}</FormHelperText>}
                        </FormControl>
                     )}
                  />
                  {chosenExchange && (
                     <>
                        <div dir="ltr">
                           <Controller
                              control={control}
                              name="type"
                              rules={{ required: 'این فیلد اجباری است' }}
                              render={({ field: { onChange, value } }) => (
                                 <FormControl>
                                    <RadioGroup row value={value} onChange={onChange}>
                                       {detail?.isSabad ? (
                                          <>
                                             <FormControlLabel
                                                value="spot"
                                                control={<Radio size="small" color="primaryBlue" />}
                                                label={
                                                   <Typography variant="body2" sx={{ fontSize: '12px' }}>
                                                      Spot
                                                   </Typography>
                                                }
                                             />

                                             <FormControlLabel
                                                value="spot-testnet"
                                                control={<Radio size="small" color="primaryBlue" />}
                                                label={
                                                   <Typography variant="body2" sx={{ fontSize: '12px' }}>
                                                      Spot testnet
                                                   </Typography>
                                                }
                                             />
                                          </>
                                       ) : (
                                          <>
                                             <FormControlLabel
                                                value="futures"
                                                control={<Radio size="small" color="primaryBlue" />}
                                                label={
                                                   <Typography variant="body2" sx={{ fontSize: '12px' }}>
                                                      Future
                                                   </Typography>
                                                }
                                             />

                                             <FormControlLabel
                                                value="futures-testnet"
                                                control={<Radio size="small" color="primaryBlue" />}
                                                label={
                                                   <Typography variant="body2" sx={{ fontSize: '12px' }}>
                                                      Future testnet
                                                   </Typography>
                                                }
                                             />
                                          </>
                                       )}
                                    </RadioGroup>
                                 </FormControl>
                              )}
                           />
                        </div>

                        <TextField
                           label="API Key"
                           variant="outlined"
                           color="primaryBlue"
                           type="text"
                           {...register('api_key', {
                              required: {
                                 value: true,
                                 message: 'این فیلد اجباری است',
                              },
                              minLength: {
                                 value: 6,
                                 message: 'کلید api باید بیش از ۶ حرف باشد',
                              },
                           })}
                           error={!!errors?.api_key}
                           helperText={errors?.api_key?.message}
                        />

                        <TextField
                           label="API Secret"
                           variant="outlined"
                           color="primaryBlue"
                           type="text"
                           {...register('api_secret', {
                              required: {
                                 value: true,
                                 message: 'این فیلد اجباری است',
                              },
                              minLength: {
                                 value: 6,
                                 message: 'api secret باید بیش از ۶ حرف باشد',
                              },
                           })}
                           error={!!errors?.api_secret}
                           helperText={errors?.api_secret?.message}
                        />

                        {chosenExchange === 'kucoin' && (
                           <TextField
                              label="Pass phrase"
                              variant="outlined"
                              color="primaryBlue"
                              type="text"
                              {...register('passphrase', {
                                 required: {
                                    value: true,
                                    message: 'این فیلد اجباری است',
                                 },
                                 minLength: {
                                    value: 6,
                                    message: 'Pass phrase باید بیش از ۶ حرف باشد',
                                 },
                              })}
                              error={!!errors?.passphrase}
                              helperText={errors?.passphrase?.message}
                           />
                        )}
                     </>
                  )}

                  <LoadingButton type="submit" variant="contained" color="primaryBlue" loading={activateRobotIsLoading}>
                     فعالسازی
                  </LoadingButton>
               </form>
            </BuyModalWrapper>
         </RtlProvider>
      </Dialog>
   );
}

export default ActiveRobotModal;
