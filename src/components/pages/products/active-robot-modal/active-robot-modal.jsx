import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// MUI
import {
   Checkbox,
   Collapse,
   Dialog,
   FormControl,
   FormControlLabel,
   FormHelperText,
   IconButton,
   InputAdornment,
   InputLabel,
   MenuItem,
   Radio,
   RadioGroup,
   Select,
   Slider,
   TextField,
   Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// Redux
import { useSelector } from 'react-redux';

// Assets
import RtlProvider from '../../../layout/rtlProvider/rtlProvider';
import { BuyModalWrapper } from '../product-card/product-card.style';

// Apis
import useActivateRobot from '../../../../apis/products/useActivateRobot/useActivateRobot';

function ActiveRobotModal({ show, closeModal, detail }) {
   const [copyStatus, setCopyStatus] = useState(false);
   const theme = useSelector(state => state.themeReducer);
   const { mutate: activateRobot, isLoading: activateRobotIsLoading } = useActivateRobot(detail?.id);
   const navigate = useNavigate();

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
         enterLeverage: false,
         custom_leverage: 1,
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
   const isEnteredLeverage = watch('enterLeverage');

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
      activateRobot(
         {
            ...data,
            productId: detail?.id,
            custom_leverage: isEnteredLeverage ? data?.custom_leverage : null,
         },
         {
            onSuccess: () => {
               navigate('/admin-panel/robots', {
                  state: detail?.id,
               });
            },
         }
      );
   };

   const copyLink = () => {
      navigator.clipboard.writeText('159.69.201.184').then(() => {
         setCopyStatus(true);

         setTimeout(() => {
            setCopyStatus(false);
         }, 1500);
      });
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
               enterLeverage: false,
               custom_leverage: 1,
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
                        label="حداکثر سرمایه درگیر"
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
                     <>
                        <div>
                           <Controller
                              control={control}
                              name="enterLeverage"
                              render={({ field: { onChange, value } }) => (
                                 <FormControlLabel
                                    control={<Checkbox checked={value} color="primaryBlue" />}
                                    label="اهرم شخصی ( اختیاری )"
                                    value={value}
                                    onChange={onChange}
                                 />
                              )}
                           />
                           <p className="text-[13px] text-gray-400">
                              ربات باتمیکس با مدیریت سرمایه بصورت خودکار اهرم معاملات را ارسال میکند, اگر میخواهید
                              رباتتان با اهرم شخصی شما کار کند, این مقدار را وارد کنید, درغیر این صورت رباتتان از مدیریت
                              سرمایه پیشنهادی باتمیکس استفاده خواهد کرد.
                           </p>
                        </div>
                        <Collapse in={isEnteredLeverage}>
                           <div className="p-6">
                              <Controller
                                 control={control}
                                 name="custom_leverage"
                                 render={({ field: { onChange, value } }) => (
                                    <Slider
                                       value={value}
                                       onChange={onChange}
                                       valueLabelDisplay="on"
                                       color="primaryBlue"
                                       min={1}
                                       max={Number(detail?.max_allowed_leverage)}
                                    />
                                 )}
                              />
                              <p className="text-left text-xs">
                                 بیشترین اهرم مجاز شما : {detail?.max_allowed_leverage}
                              </p>
                           </div>
                        </Collapse>
                     </>
                  )}

                  <Controller
                     control={control}
                     name="active"
                     render={({ field: { onChange, value } }) => (
                        <FormControlLabel
                           control={<Checkbox checked={value} color="primaryBlue" />}
                           label="فعال شدن ربات پس از ساخت"
                           value={value}
                           onChange={onChange}
                        />
                     )}
                  />

                  <div>
                     <div className="flex items-center gap-4">
                        <p>Server IP : </p>
                        <div dir="ltr" className="relative flex max-w-fit items-center text-sm">
                           <div className="w-fit">
                              <IconButton className="text-sm !text-inherit" onClick={copyLink}>
                                 <ContentCopyIcon className="!text-sm" />
                              </IconButton>
                           </div>
                           <p>159.69.201.184</p>
                           {copyStatus ? (
                              <div className="absolute inset-x-0 bottom-[-30px] z-[1] mx-auto w-fit whitespace-nowrap rounded-md bg-black p-[6px] text-[10px] text-textMainDark">
                                 کپی شد
                              </div>
                           ) : null}
                        </div>
                     </div>
                     <p className="text-xs text-textGray">
                        IP سرور جهت اضافه کردن به لیست IP های مجاز صرافی درصورت نیاز
                     </p>
                  </div>

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
