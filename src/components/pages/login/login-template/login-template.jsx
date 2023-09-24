import { useState } from 'react';
import { useForm } from 'react-hook-form';

// MUI
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';

// Icons
import { Visibility, VisibilityOff } from '@mui/icons-material';

// Assets
import RtlProvider from '../../../layout/rtlProvider/rtlProvider';

function LoginTemplate() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
  });

  const formSubmit = data => {
    console.log(data);
  };

  return (
    <div className="mt-16">
      <RtlProvider>
        <form
          className="flex w-full flex-col space-y-10"
          onSubmit={handleSubmit(formSubmit)}
          id="detail_form"
        >
          <TextField
            label="ایمیل"
            variant="outlined"
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

          <TextField
            label="رمز عبور"
            variant="outlined"
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

          <Button
            variant="contained"
            className="!font-vazir"
            type="submit"
            size="large"
          >
            ورود
          </Button>
        </form>
      </RtlProvider>
    </div>
  );
}

export default LoginTemplate;
