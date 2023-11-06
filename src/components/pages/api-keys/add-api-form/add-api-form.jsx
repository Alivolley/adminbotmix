import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

// MUi
import {
   FormControlLabel,
   FormHelperText,
   Radio,
   RadioGroup,
   TextField,
   Typography,
   InputLabel,
   MenuItem,
   FormControl,
   Select,
   IconButton,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// Assets
import { AddApiFormStyle } from './add-api-form.style';

// Components
import RtlProvider from '../../../layout/rtlProvider/rtlProvider';

// Apis
import useAddApiKey from '../../../../apis/api-keys/useAddApiKey/useAddApiKey';

function AddApiForm() {
   const { isLoading: addApiKeyLoading, mutate: addApiKey } = useAddApiKey();
   const [copyStatus, setCopyStatus] = useState(false);

   const {
      handleSubmit,
      register,
      watch,
      reset,
      control,
      formState: { errors },
   } = useForm({
      defaultValues: {
         exchange: '',
         type: 'futures',
         api_key: '',
         api_secret: '',
         passphrase: '',
      },
      mode: 'onSubmit',
   });

   const chosenExchange = watch('exchange');

   useEffect(() => {
      reset({
         exchange: chosenExchange,
         type: 'futures',
         api_key: '',
         api_secret: '',
         passphrase: '',
      });
   }, [chosenExchange]);

   const formSubmit = data => {
      addApiKey(data);
   };

   const copyLink = () => {
      navigator.clipboard.writeText('95.216.197.180').then(() => {
         setCopyStatus(true);

         setTimeout(() => {
            setCopyStatus(false);
         }, 1500);
      });
   };

   return (
      <AddApiFormStyle>
         <p className="mb-5">اضافه کردن کلید api</p>
         <div className="mb-8">
            <div className="flex items-center gap-4">
               <p>Server IP : </p>
               <div dir="ltr" className="relative flex max-w-fit items-center text-sm">
                  <div className="w-fit">
                     <IconButton className="text-sm !text-inherit" onClick={copyLink}>
                        <ContentCopyIcon className="!text-sm" />
                     </IconButton>
                  </div>
                  <p>95.216.197.180</p>
                  {copyStatus ? (
                     <div className="absolute inset-x-0 bottom-[-30px] z-[1] mx-auto w-fit whitespace-nowrap rounded-md bg-black p-[6px] text-[10px] text-textMainDark">
                        کپی شد
                     </div>
                  ) : null}
               </div>
            </div>
            <p className="text-xs text-textGray">IP سرور جهت اضافه کردن به لیست IP های مجاز صرافی درصورت نیاز</p>
         </div>
         <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col gap-4">
            <RtlProvider>
               <Controller
                  control={control}
                  name="exchange"
                  rules={{ required: 'این فیلد اجباری است' }}
                  render={({ field: { onChange, value } }) => (
                     <FormControl error={!!errors?.exchange} color="primaryBlue">
                        <InputLabel>صرافی</InputLabel>
                        <Select label="صرافی" value={value} onChange={onChange}>
                           <MenuItem value="binance">
                              <p className="w-full text-left">Binance</p>
                           </MenuItem>
                           <MenuItem value="kucoin">
                              <p className="w-full text-left">Kucoin</p>
                           </MenuItem>
                           <MenuItem value="bybit">
                              <p className="w-full text-left">Bybit</p>
                           </MenuItem>
                           <MenuItem value="wallex">
                              <p className="w-full text-left">Wallex</p>
                           </MenuItem>
                           <MenuItem value="bingx">
                              <p className="w-full text-left">Bingx</p>
                           </MenuItem>
                        </Select>
                        {errors?.exchange && <FormHelperText>{errors?.exchange?.message}</FormHelperText>}
                     </FormControl>
                  )}
               />
            </RtlProvider>

            {chosenExchange && (
               <>
                  {(chosenExchange === 'binance' ||
                     chosenExchange === 'kucoin' ||
                     chosenExchange === 'bybit' ||
                     chosenExchange === 'bingx') && (
                     <div dir="ltr">
                        <Controller
                           control={control}
                           name="type"
                           rules={{ required: 'این فیلد اجباری است' }}
                           render={({ field: { onChange, value } }) => (
                              <FormControl>
                                 <RadioGroup row value={value} onChange={onChange}>
                                    <FormControlLabel
                                       value="futures"
                                       control={<Radio size="small" color="primaryBlue" />}
                                       label={
                                          <Typography variant="body2" sx={{ fontSize: '12px' }}>
                                             Future
                                          </Typography>
                                       }
                                    />
                                    {chosenExchange !== 'bingx' && (
                                       <FormControlLabel
                                          value="spot"
                                          control={<Radio size="small" color="primaryBlue" />}
                                          label={
                                             <Typography variant="body2" sx={{ fontSize: '12px' }}>
                                                Spot
                                             </Typography>
                                          }
                                       />
                                    )}
                                    {chosenExchange !== 'bingx' && (
                                       <FormControlLabel
                                          value="futures-testnet"
                                          control={<Radio size="small" color="primaryBlue" />}
                                          label={
                                             <Typography variant="body2" sx={{ fontSize: '12px' }}>
                                                Future testnet
                                             </Typography>
                                          }
                                       />
                                    )}
                                    {chosenExchange !== 'bingx' && (
                                       <FormControlLabel
                                          value="spot-testnet"
                                          control={<Radio size="small" color="primaryBlue" />}
                                          label={
                                             <Typography variant="body2" sx={{ fontSize: '12px' }}>
                                                Spot testnet
                                             </Typography>
                                          }
                                       />
                                    )}
                                 </RadioGroup>
                              </FormControl>
                           )}
                        />
                     </div>
                  )}

                  {(chosenExchange === 'binance' ||
                     chosenExchange === 'kucoin' ||
                     chosenExchange === 'bybit' ||
                     chosenExchange === 'wallex' ||
                     chosenExchange === 'bingx') && (
                     <TextField
                        label="API Key"
                        variant="outlined"
                        color="primaryBlue"
                        type="text"
                        dir="ltr"
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
                  )}

                  {(chosenExchange === 'binance' ||
                     chosenExchange === 'kucoin' ||
                     chosenExchange === 'bybit' ||
                     chosenExchange === 'bingx') && (
                     <TextField
                        label="API Secret"
                        variant="outlined"
                        color="primaryBlue"
                        type="text"
                        dir="ltr"
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
                  )}

                  {chosenExchange === 'kucoin' && (
                     <TextField
                        label="Pass phrase"
                        variant="outlined"
                        color="primaryBlue"
                        type="text"
                        dir="ltr"
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

            <LoadingButton type="submit" variant="contained" color="primaryBlue" loading={addApiKeyLoading}>
               اضافه کردن
            </LoadingButton>
         </form>
      </AddApiFormStyle>
   );
}

export default AddApiForm;
