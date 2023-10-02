import { useState } from 'react';

// MUI
import { IconButton } from '@mui/material';

// Icons
import HiveIcon from '@mui/icons-material/Hive';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

// Assets
import { Link } from 'react-router-dom';
import { LoginStyle } from './login.style';
import loginBackground from '../../assets/images/loginPic.jpg';

// Components
import LoginTemplate from '../../components/pages/login/login-template/login-template';
import RegisterTemplate from '../../components/pages/login/register-template/register-template';

function Login() {
  const [tabsValue, setTabsValue] = useState('login');

  return (
    <LoginStyle className="min-h-screen gap-5 bg-bgPrimary text-textMain dark:bg-bgPrimaryDark dark:text-textMainDark customSm:flex">
      <div className="order-2 hidden customSm:block customSm:max-w-xs customMd:max-w-sm customLg:max-w-md customXl:max-w-xl 2xl:max-w-3xl">
        <img
          src={loginBackground}
          alt="login"
          className="h-full w-full object-cover object-bottom"
        />
      </div>

      <div className="grow customSm:order-1 customSm:mt-14 customMd:mt-[80px]">
        <div className="mx-auto max-w-xl rounded-xl p-8">
          <Link to="/">
            <h2 className="mb-20 flex items-center justify-center gap-2 font-lalezar text-4xl text-primaryBlue">
              <HiveIcon fontSize="large" />
              باتمیکس
            </h2>
          </Link>

          <p className="flex items-center justify-between text-lg font-bold">
            {tabsValue === 'login' ? 'ورود به باتمیکس' : 'ساخت حساب در باتمیکس'}
            <Link to={-1}>
              <IconButton>
                <KeyboardBackspaceIcon />
              </IconButton>
            </Link>
          </p>

          {tabsValue === 'register' ? <RegisterTemplate /> : <LoginTemplate />}

          {tabsValue === 'login' ? (
            <div className="mt-4 flex flex-wrap justify-between gap-6 text-sm customMd:gap-0">
              <p>
                هنوز ثبت نام نکرده اید ؟{' '}
                <button
                  type="button"
                  onClick={() => setTabsValue('register')}
                  className="font-bold text-secondaryBlue"
                >
                  ساخت حساب کاربری
                </button>
              </p>
              <Link to="/">رمز عبور را فراموش کرده ام</Link>
            </div>
          ) : (
            <div className="mt-4 flex justify-between text-sm">
              <p>
                در باتمیکس حساب دارید ؟{' '}
                <button
                  type="button"
                  onClick={() => setTabsValue('login')}
                  className="font-bold text-secondaryBlue"
                >
                  وارد شوید
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </LoginStyle>
  );
}

export default Login;
