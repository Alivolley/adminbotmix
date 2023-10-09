import { useEffect } from 'react';
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
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Assets
import { AddApiFormStyle } from './add-api-form.style';

// Components
import RtlProvider from '../../../layout/rtlProvider/rtlProvider';

// Apis
import useAddApiKey from '../../../../apis/useAddApiKey/useAddApiKey';

function AddApiForm() {
   const { isLoading: addApiKeyLoading, mutate: addApiKey } = useAddApiKey();

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

   return (
      <RtlProvider>
         <AddApiFormStyle>
            <p className="mb-8">اضافه کردن کلید api</p>
            <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col gap-4">
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
      </RtlProvider>
   );
}

export default AddApiForm;
