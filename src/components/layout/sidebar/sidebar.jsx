import { NavLink } from 'react-router-dom';

// Icons
import ApartmentIcon from '@mui/icons-material/Apartment';
import HomeIcon from '@mui/icons-material/Home';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import KeyIcon from '@mui/icons-material/Key';
import OfflineShareIcon from '@mui/icons-material/OfflineShare';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

// assets
import { SidebarStyle } from './sidebar.style';
import ChangeThemeComponent from '../../templates/changeThemeComponent/changeThemeComponent';

function Sidebar({ shouldHide }) {
  return (
    <SidebarStyle
      className={`h-[93vh] w-[260px] min-w-[260px] rounded-[15px] bg-bgPrimary p-5
      text-textMain transition-colors duration-200 dark:bg-bgPrimaryDark dark:text-textMainDark ${
        shouldHide ? 'hidden xl:block' : ''
      }`}
    >
      <div className="flex items-center gap-2">
        <div>
          <ApartmentIcon />
        </div>
        <p className="text-[14px] font-[600]">صفحه پنل ادمین</p>
      </div>
      <div className="mt-7 flex h-[1px] w-full bg-lineLinear" />

      <div className="flex flex-col gap-3 pt-4">
        <NavLink
          to="dashboard"
          className="flex items-center gap-3 rounded-[11px] p-4"
          id="navLink"
        >
          <div
            className="flex h-8 w-8 items-center justify-center rounded-[10px] text-[18px] text-primaryBlue"
            id="iconWrapper"
          >
            <HomeIcon color="inherit" fontSize="inherit" />
          </div>
          <p className="text-[14px] font-[700] text-textGray">داشبورد</p>
        </NavLink>

        <NavLink
          to="robots"
          className="flex items-center gap-3 rounded-[11px] p-4"
          id="navLink"
        >
          <div
            className="flex h-8 w-8 items-center justify-center rounded-[10px] text-[18px] text-primaryBlue"
            id="iconWrapper"
          >
            <SmartToyIcon color="inherit" fontSize="inherit" />
          </div>
          <p className="text-[14px] font-[700] text-textGray">ربات ها</p>
        </NavLink>

        <NavLink
          to="api-keys"
          className="flex items-center gap-3 rounded-[11px] p-4"
          id="navLink"
        >
          <div
            className="flex h-8 w-8 items-center justify-center rounded-[10px] text-[18px] text-primaryBlue"
            id="iconWrapper"
          >
            <KeyIcon color="inherit" fontSize="inherit" />
          </div>
          <p className="text-[14px] font-[700] text-textGray">کلید های api</p>
        </NavLink>

        <NavLink
          to="connecting"
          className="flex items-center gap-3 rounded-[11px] p-4"
          id="navLink"
        >
          <div
            className="flex h-8 w-8 items-center justify-center rounded-[10px] text-[18px] text-primaryBlue"
            id="iconWrapper"
          >
            <OfflineShareIcon color="inherit" fontSize="inherit" />
          </div>
          <p className="text-[14px] font-[700] text-textGray">
            اتصال به تلگرام
          </p>
        </NavLink>

        <NavLink
          to="profile-setting"
          className="flex items-center gap-3 rounded-[11px] p-4"
          id="navLink"
        >
          <div
            className="flex h-8 w-8 items-center justify-center rounded-[10px] text-[18px] text-primaryBlue"
            id="iconWrapper"
          >
            <ManageAccountsIcon color="inherit" fontSize="inherit" />
          </div>
          <p className="text-[14px] font-[700] text-textGray">پروفایل</p>
        </NavLink>
      </div>

      <div className="mt-7 flex h-[1px] w-full bg-lineLinear" />

      <div className="mt-6 flex items-center justify-between">
        <p>حالت :</p>
        <ChangeThemeComponent />
      </div>
    </SidebarStyle>
  );
}

export default Sidebar;
