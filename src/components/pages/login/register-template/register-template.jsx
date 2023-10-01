import { useState } from 'react';
import { useForm } from 'react-hook-form';

// MUI
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';

// Icons
import { Visibility, VisibilityOff } from '@mui/icons-material';

// Assets
import RtlProvider from '../../../layout/rtlProvider/rtlProvider';

function RegisterTemplate() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onSubmit',
  });

  const formSubmit = data => {
    console.log(data);
  };

  const passwordValue = watch('password');

  return (
    <div className="mt-10">
      <RtlProvider>
        <form
          className="flex w-full flex-col space-y-10"
          onSubmit={handleSubmit(formSubmit)}
          id="detail_form"
        >
          <div className="flex flex-col gap-3">
            <p>ایمیل</p>

            <TextField
              variant="outlined"
              placeholder="ایمیل خود را وارد کنید"
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
            />
          </div>

          <div className="flex flex-col gap-3">
            <p>رمز عبور</p>

            <TextField
              variant="outlined"
              color="primaryBlue"
              placeholder="رمز عبور خود را وارد کنید"
              type={showPassword ? 'text' : 'password'}
              {...register('password', {
                required: {
                  value: true,
                  message: 'این فیلد اجباری است',
                },
                minLength: {
                  value: 8,
                  message: 'رمز عبور باید بیشتر از ۸ حرف باشد',
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

          <div className="flex flex-col gap-3">
            <p>تکرار رمز عبور</p>

            <TextField
              variant="outlined"
              color="primaryBlue"
              placeholder="رمز عبور خود را تکرار کنید"
              type={showPassword ? 'text' : 'password'}
              {...register('confirmPassword', {
                required: {
                  value: true,
                  message: 'این فیلد اجباری است',
                },
                minLength: {
                  value: 8,
                  message: 'رمز عبور باید بیشتر از ۸ حرف باشد',
                },
                validate: value =>
                  value === passwordValue ||
                  'پسورد ها با یکدیگر همخوانی ندارند',
              })}
              error={!!errors?.confirmPassword}
              helperText={errors?.confirmPassword?.message}
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

          <Button
            variant="contained"
            className="!py-3 !font-vazir"
            type="submit"
            size="large"
            color="primaryBlue"
          >
            ثبت نام
          </Button>
        </form>
      </RtlProvider>
    </div>
  );
}

export default RegisterTemplate;
