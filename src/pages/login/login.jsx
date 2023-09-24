import { useState } from 'react';

// MUI
import { Tab, Tabs } from '@mui/material';

// Assets
import { LoginStyle } from './login.style';
import loginBackground from '../../assets/images/loginBackground.jpg';

// Components
import LoginTemplate from '../../components/pages/login/login-template/login-template';
import RegisterTemplate from '../../components/pages/login/register-template/register-template';

function Login() {
  const [tabsValue, setTabsValue] = useState('login');

  return (
    <LoginStyle className="min-h-screen gap-5 customSm:flex">
      <div className="customSm:max-w-xs customMd:max-w-sm customLg:max-w-md customXl:mr-[-140px] customXl:max-w-lg 2xl:max-w-xl">
        <img
          src={loginBackground}
          alt="login"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mb-32 mt-5 grow customSm:mt-14 customMd:mt-[80px]">
        <div className="mx-auto max-w-xl rounded-xl p-8 shadow-purpleShadow">
          <div>
            <Tabs
              value={tabsValue}
              onChange={(e, newValue) => setTabsValue(newValue)}
              variant="fullWidth"
            >
              <Tab label="ورود" value="login" className="!font-vazir" />
              <Tab label="ثبت نام" value="register" className="!font-vazir" />
            </Tabs>
          </div>

          {tabsValue === 'register' ? <RegisterTemplate /> : <LoginTemplate />}
        </div>
      </div>
    </LoginStyle>
  );
}

export default Login;
