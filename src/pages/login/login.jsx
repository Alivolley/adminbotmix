import { useState } from 'react';

// Icons
import HiveIcon from '@mui/icons-material/Hive';

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
    <LoginStyle className="gap-5 bg-bgPrimary text-textMain dark:bg-bgPrimaryDark dark:text-textMainDark customSm:flex customSm:min-h-screen">
      <div className="aspect-video customSm:order-2 customSm:aspect-auto customSm:max-w-xs customMd:max-w-sm customLg:max-w-md customXl:max-w-lg 2xl:max-w-xl">
        <img
          src={loginBackground}
          alt="login"
          className="h-full w-full object-cover object-bottom"
        />
      </div>

      <div className="mt-5 grow customSm:order-1 customSm:mt-14 customMd:mt-[80px]">
        <div className="mx-auto max-w-xl rounded-xl p-8">
          <h2 className="mb-20 flex items-center justify-center gap-2 font-lalezar text-4xl">
            <HiveIcon fontSize="large" />
            باتمیکس
          </h2>

          <p className="text-lg font-bold">
            {tabsValue === 'login' ? 'ورود به باتمیکس' : 'ساخت حساب در باتمیکس'}
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
