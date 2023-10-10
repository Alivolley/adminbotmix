import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// MUI
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { Visibility, VisibilityOff } from '@mui/icons-material';

// Redux
import { useDispatch } from 'react-redux';
import { changeToLoginTrue } from '../../../../store/reducers/loginStatusReducer';

// Assets
import RtlProvider from '../../../layout/rtlProvider/rtlProvider';

// Apis
import useLogin from '../../../../apis/auth/useLogin/useLogin';

function LoginTemplate() {
   const [showPassword, setShowPassword] = useState(false);

   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { mutate: sendLoginData, isLoading: LoginLoading } = useLogin();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      defaultValues: {
         email_or_phone: '',
         password: '',
      },
      mode: 'onSubmit',
   });

   const formSubmit = data => {
      sendLoginData(data, {
         onSuccess: () => {
            dispatch(changeToLoginTrue());
            navigate(-1);
         },
      });
   };

   return (
      <div className="mt-10">
         <RtlProvider>
            <form className="flex w-full flex-col space-y-10" onSubmit={handleSubmit(formSubmit)} id="detail_form">
               <div className="flex flex-col gap-3">
                  <p>ایمیل یا شماره تلفن</p>
                  <TextField
                     dir="ltr"
                     variant="outlined"
                     color="primaryBlue"
                     placeholder="Email"
                     {...register('email_or_phone', {
                        required: {
                           value: true,
                           message: 'این فیلد اجباری است',
                        },
                     })}
                     error={!!errors?.email_or_phone}
                     helperText={errors?.email_or_phone?.message}
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
                     })}
                     error={!!errors?.password}
                     helperText={errors?.password?.message}
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

               <LoadingButton
                  variant="contained"
                  className="!py-3 !font-vazir"
                  type="submit"
                  size="large"
                  color="primaryBlue"
                  loading={LoginLoading}
               >
                  ورود
               </LoadingButton>
            </form>
         </RtlProvider>
      </div>
   );
}

export default LoginTemplate;
