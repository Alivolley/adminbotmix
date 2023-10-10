import { useForm } from 'react-hook-form';

// MUI
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

// Assets
import { ChangeEmailStyle } from './change-email.style';

// Components
import RtlProvider from '../../../layout/rtlProvider/rtlProvider';

function ChangeEmail() {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm({
      defaultValues: {
         currentEmail: '',
         newEmail: '',
      },
      mode: 'onTouched',
   });
   const currentEmailValue = watch('currentEmail');

   const formSubmit = data => {
      console.log(data);
   };

   return (
      <RtlProvider>
         <ChangeEmailStyle>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit(formSubmit)}>
               <TextField
                  label="ایمیل فعلی"
                  variant="outlined"
                  color="primaryBlue"
                  type="text"
                  {...register('currentEmail', {
                     required: {
                        value: true,
                        message: 'این فیلد اجباری است',
                     },
                     pattern: {
                        value: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/,
                        message: 'لطفا یک ایمیل معتبر وارد کنید',
                     },
                  })}
                  error={!!errors?.currentEmail}
                  helperText={errors?.currentEmail?.message}
               />

               <TextField
                  label="ایمیل جدید"
                  variant="outlined"
                  color="primaryBlue"
                  type="text"
                  {...register('newEmail', {
                     required: {
                        value: true,
                        message: 'این فیلد اجباری است',
                     },
                     pattern: {
                        value: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/,
                        message: 'لطفا یک ایمیل معتبر وارد کنید',
                     },
                     validate: value => value !== currentEmailValue || 'ایمیل جدید با فعلی نباید یکی باشد',
                  })}
                  error={!!errors?.newEmail}
                  helperText={errors?.newEmail?.message}
               />

               <Button type="submit" variant="contained" color="primaryBlue" size="large">
                  تغییر
               </Button>
            </form>
         </ChangeEmailStyle>
      </RtlProvider>
   );
}

export default ChangeEmail;
