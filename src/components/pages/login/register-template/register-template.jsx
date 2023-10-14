import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// MUI
import { LoadingButton } from '@mui/lab';
import { FormHelperText, IconButton, InputAdornment, TextField } from '@mui/material';
import { MuiOtpInput } from 'mui-one-time-password-input';

// Icons
import { Visibility, VisibilityOff } from '@mui/icons-material';

// Redux
import { useDispatch } from 'react-redux';
import { changeToLoginTrue } from '../../../../store/reducers/loginStatusReducer';
import { getUserEmail } from '../../../../store/reducers/emailReducer';

// Assets
import RtlProvider from '../../../layout/rtlProvider/rtlProvider';

// Apis
import useRegisterOtp from '../../../../apis/auth/useRegisterOtp/useRegisterOtp';
import useRegisterData from '../../../../apis/auth/useRegisterData/useRegisterData';

// Components
import CountdownTimer from '../../../templates/countdown-timer/countdown-timer';

function RegisterTemplate() {
   const [showPassword, setShowPassword] = useState(false);
   const [registerStep, setRegisterStep] = useState(1);

   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { mutate: sendRegisterOtpData, isLoading: registerOtpLoading } = useRegisterOtp();
   const { mutate: sendRegisterData, isLoading: registerLoading } = useRegisterData();

   const {
      register,
      handleSubmit,
      watch,
      getValues,
      formState: { errors, isValid },
      control,
   } = useForm({
      defaultValues: {
         email: '',
         password: '',
         phone_number: '',
         confirmPassword: '',
         phone_otp: '',
         email_otp: '',
      },
      mode: 'onSubmit',
   });
   const passwordValue = watch('password');

   const signUpSubmit = data => {
      if (registerStep === 1) {
         const newData = {
            email: data.email,
            password: data.password,
            phone_number: data.phone_number,
         };
         sendRegisterOtpData(newData, {
            onSuccess: () => setRegisterStep(2),
         });
      } else {
         const newData = {
            email: data.email,
            phone_number: data.phone_number,
            email_otp: data.email_otp,
            phone_otp: data.phone_otp,
         };
         sendRegisterData(newData, {
            onSuccess: () => {
               dispatch(changeToLoginTrue());
               dispatch(getUserEmail());
               navigate(-1);
            },
         });
      }
   };

   const resendCode = () => {
      const newData = {
         email: getValues('email'),
         password: getValues('password'),
         phone_number: getValues('phone_number'),
      };
      sendRegisterOtpData(newData);
   };

   return (
      <div className="mt-10">
         <RtlProvider>
            <form className="flex w-full flex-col space-y-10" onSubmit={handleSubmit(signUpSubmit)} id="detail_form">
               <div className="flex flex-col gap-3">
                  <p>ایمیل</p>

                  <TextField
                     dir="ltr"
                     variant="outlined"
                     placeholder="Email"
                     color="primaryBlue"
                     {...register('email', {
                        required: {
                           value: true,
                           message: 'این فیلد اجباری است',
                        },
                        pattern: {
                           value: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/,
                           message: 'لطفا یک ایمیل معتبر وارد کنید',
                        },
                     })}
                     error={!!errors?.email}
                     helperText={errors?.email?.message}
                     disabled={registerStep === 2}
                  />
               </div>

               <div className="flex flex-col gap-3" id="inputNumber">
                  <p>شماره تلفن</p>

                  <TextField
                     dir="ltr"
                     variant="outlined"
                     placeholder="Phone number"
                     color="primaryBlue"
                     type="number"
                     {...register('phone_number', {
                        required: {
                           value: true,
                           message: 'این فیلد اجباری است',
                        },
                        pattern: {
                           value: /^09\d{9}$/,
                           message: 'لطفا یک شماره تلفن معتبر ۱۱ رقمی وارد کنید',
                        },
                     })}
                     error={!!errors?.phone_number}
                     helperText={errors?.phone_number?.message}
                     disabled={registerStep === 2}
                  />
               </div>

               <div className="flex flex-col gap-3">
                  <p>رمز عبور</p>

                  <TextField
                     dir="ltr"
                     variant="outlined"
                     color="primaryBlue"
                     placeholder="Password"
                     type={showPassword ? 'text' : 'password'}
                     {...register('password', {
                        required: {
                           value: true,
                           message: 'این فیلد اجباری است',
                        },
                        pattern: {
                           value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                           message: 'رمز عبور باید حداقل ۸ حرف و شامل حروف بزرگ و کوچک باشد',
                        },
                     })}
                     error={!!errors?.password}
                     helperText={errors?.password?.message}
                     disabled={registerStep === 2}
                     InputProps={{
                        endAdornment: (
                           <InputAdornment position="end">
                              <IconButton onClick={() => setShowPassword(prev => !prev)}>
                                 {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                           </InputAdornment>
                        ),
                     }}
                  />
               </div>

               <div className="flex flex-col gap-3">
                  <p>تکرار رمز عبور</p>

                  <TextField
                     dir="ltr"
                     variant="outlined"
                     color="primaryBlue"
                     placeholder="Confirm password"
                     type={showPassword ? 'text' : 'password'}
                     {...register('confirmPassword', {
                        required: {
                           value: true,
                           message: 'این فیلد اجباری است',
                        },
                        validate: value => value === passwordValue || 'پسورد ها با یکدیگر همخوانی ندارند',
                     })}
                     error={!!errors?.confirmPassword}
                     helperText={errors?.confirmPassword?.message}
                     disabled={registerStep === 2}
                     InputProps={{
                        endAdornment: (
                           <InputAdornment position="end">
                              <IconButton onClick={() => setShowPassword(prev => !prev)}>
                                 {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                           </InputAdornment>
                        ),
                     }}
                  />
               </div>

               {registerStep === 1 ? (
                  <LoadingButton
                     variant="contained"
                     className="!py-3 !font-vazir"
                     type="submit"
                     size="large"
                     color="primaryBlue"
                     loading={registerOtpLoading}
                  >
                     ثبت نام
                  </LoadingButton>
               ) : (
                  <>
                     <div className="flex flex-col gap-3">
                        <p>کد تایید شماره تلفن</p>

                        <Controller
                           control={control}
                           name="phone_otp"
                           rules={{
                              required: 'این فیلد اجباری است',
                              minLength: {
                                 value: 6,
                              },
                           }}
                           render={({ field: { onChange, value }, fieldState }) => (
                              <>
                                 <MuiOtpInput
                                    value={value}
                                    onChange={onChange}
                                    length={6}
                                    dir="ltr"
                                    TextFieldsProps={{
                                       color: 'primaryBlue',
                                    }}
                                 />
                                 {fieldState.invalid
                                    ? errors?.phone_otp?.message && (
                                         <FormHelperText error>{errors?.phone_otp?.message}</FormHelperText>
                                      )
                                    : null}
                              </>
                           )}
                        />
                     </div>

                     <div className="flex flex-col gap-3">
                        <p>کد تایید ایمیل</p>

                        <Controller
                           control={control}
                           name="email_otp"
                           rules={{
                              required: 'این فیلد اجباری است',
                              minLength: {
                                 value: 6,
                              },
                           }}
                           render={({ field: { onChange, value }, fieldState }) => (
                              <>
                                 <MuiOtpInput
                                    value={value}
                                    onChange={onChange}
                                    length={6}
                                    dir="ltr"
                                    TextFieldsProps={{
                                       color: 'primaryBlue',
                                    }}
                                 />
                                 {fieldState.invalid
                                    ? errors?.email_otp?.message && (
                                         <FormHelperText error>{errors?.email_otp?.message}</FormHelperText>
                                      )
                                    : null}
                              </>
                           )}
                        />
                     </div>

                     <CountdownTimer initialCount={130} onResetClick={resendCode} />

                     <LoadingButton
                        variant="contained"
                        className="!py-3 !font-vazir"
                        type="submit"
                        size="large"
                        color="primaryBlue"
                        loading={registerLoading}
                        disabled={!isValid}
                     >
                        ارسال اطلاعات
                     </LoadingButton>
                  </>
               )}
            </form>
         </RtlProvider>
      </div>
   );
}

export default RegisterTemplate;
