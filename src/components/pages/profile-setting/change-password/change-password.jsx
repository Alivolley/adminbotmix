import { useForm } from 'react-hook-form';

// MUI
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import { Button } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

// Assets
import { ChangePasswordStyle } from './change-password.style';

function ChangePassword() {
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    mode: 'onTouched',
  });

  const newPasswordValue = watch('newPassword');

  const formSubmit = data => {
    console.log(data);
  };

  return (
    <CacheProvider value={cacheRtl}>
      <ChangePasswordStyle>
        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit(formSubmit)}
        >
          <TextField
            label="پسورد فعلی"
            variant="outlined"
            color="primaryBlue"
            sx={{
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#4FD1C5 !important',
              },
            }}
            inputProps={{
              className:
                'text-textMain transition-colors duration-200 dark:text-textMainDark',
            }}
            type="password"
            {...register('currentPassword', {
              required: {
                value: true,
                message: 'این فیلد اجباری است',
              },
              minLength: {
                value: 8,
                message: 'پسورد باید بیشتر از ۸ حرف باشد',
              },
            })}
            error={!!errors?.currentPassword}
            helperText={errors?.currentPassword?.message}
          />

          <TextField
            label="پسورد جدید"
            variant="outlined"
            color="primaryBlue"
            sx={{
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#4FD1C5 !important',
              },
            }}
            inputProps={{
              className:
                'text-textMain transition-colors duration-200 dark:text-textMainDark',
            }}
            type="password"
            {...register('newPassword', {
              required: {
                value: true,
                message: 'این فیلد اجباری است',
              },
              minLength: {
                value: 8,
                message: 'پسورد باید بیشتر از ۸ حرف باشد',
              },
            })}
            error={!!errors?.newPassword}
            helperText={errors?.newPassword?.message}
          />

          <TextField
            label="تکرار پسورد جدید"
            variant="outlined"
            color="primaryBlue"
            sx={{
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#4FD1C5 !important',
              },
            }}
            inputProps={{
              className:
                'text-textMain transition-colors duration-200 dark:text-textMainDark',
            }}
            type="password"
            {...register('confirmPassword', {
              required: {
                value: true,
                message: 'این فیلد اجباری است',
              },
              minLength: {
                value: 8,
                message: 'پسورد باید بیشتر از ۸ حرف باشد',
              },
              validate: value =>
                value === newPasswordValue ||
                'پسورد ها با یکدیگر همخوانی ندارند',
            })}
            error={!!errors?.confirmPassword}
            helperText={errors?.confirmPassword?.message}
          />

          <Button type="submit" variant="contained">
            تغییر
          </Button>
        </form>
      </ChangePasswordStyle>
    </CacheProvider>
  );
}

export default ChangePassword;
