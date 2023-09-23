import { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// MUI
import { Button, Drawer, IconButton, Tooltip } from '@mui/material';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HiveIcon from '@mui/icons-material/Hive';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';

// Assets
import { PagesLayoutStyle } from './pages-layout.style';
import {
  changeToDarkMode,
  changeToLightMode,
} from '../../../store/reducers/themeReducer';

// Components
import MobileNavbar from '../mobile-navbar/mobile-navbar';
import Footer from '../footer/footer';

function PagesLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const theme = useSelector(state => state.themeReducer);

  return (
    <PagesLayoutStyle className="text-textMain dark:text-textMainDark">
      <header className="sticky top-0 z-[11] flex items-center justify-between bg-bgSecondary px-7 py-2 dark:bg-grayBackground">
        <div className="hidden items-center customLg:flex">
          <Tooltip
            title="alicryptovolley@gmail.com"
            classes={{
              tooltip: '!text-[13px] !bg-bgSecondaryDark',
              arrow: '!text-bgSecondaryDark',
            }}
            arrow
          >
            <Link
              to="/admin-panel"
              className="flex items-center gap-2 rounded-md p-2 text-[13px] transition-colors duration-200 hover:text-purple-600"
            >
              <PersonIcon fontSize="small" />
              <p>پنل کاربری</p>
            </Link>
          </Tooltip>

          <Button
            className="gap-2 !font-vazir !text-xs"
            variant="text"
            color="inherit"
          >
            خروج از حساب
          </Button>

          <div>
            {theme === 'dark' ? (
              <IconButton onClick={() => dispatch(changeToLightMode())}>
                <DarkModeOutlinedIcon />
              </IconButton>
            ) : (
              <IconButton onClick={() => dispatch(changeToDarkMode())}>
                <Brightness5OutlinedIcon />
              </IconButton>
            )}
          </div>
        </div>

        <div>
          <ul className="hidden items-center justify-center gap-10 text-[13px] customLg:flex">
            <li>
              <NavLink
                to="/aboutUs"
                className="transition-colors duration-200 hover:text-purple-600"
              >
                درباره ی ما
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/rules"
                className="transition-colors duration-200 hover:text-purple-600"
              >
                قوانین
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/articles"
                className="transition-colors duration-200 hover:text-purple-600"
              >
                مقاله ها
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/tutorials"
                className="transition-colors duration-200 hover:text-purple-600"
              >
                آموزش ها
              </NavLink>
            </li>

            <li>
              <div id="dropdownWrapper">
                <NavLink
                  to="/products"
                  id="dropdownBtn"
                  className="flex items-center gap-2 py-2 transition-colors duration-200 hover:text-purple-600"
                >
                  محصولات
                  <KeyboardArrowDownIcon fontSize="small" />
                </NavLink>

                <div
                  id="dropdownBox"
                  className="bg-grayBackground dark:bg-bgSecondary"
                >
                  <NavLink
                    to="/some"
                    className="border-b-[1px] border-solid border-stone-200 p-3 text-textMainDark transition-colors duration-200 
                    hover:!text-purple-600 dark:text-textMain"
                  >
                    سبدگردانی
                  </NavLink>
                  <NavLink
                    to="/some"
                    className="border-b-[1px] border-solid border-stone-200 p-3 text-textMainDark transition-colors duration-200 
                    hover:!text-purple-600 dark:text-textMain"
                  >
                    اشتراک رباط واسط
                  </NavLink>
                </div>
              </div>
            </li>

            <li>
              <div id="dropdownWrapper">
                <p
                  id="dropdownBtn"
                  className="flex items-center gap-2 py-2 transition-colors duration-200 hover:text-purple-600"
                >
                  بازار
                  <KeyboardArrowDownIcon fontSize="small" />
                </p>

                <div
                  id="dropdownBox"
                  className="bg-grayBackground dark:bg-bgSecondary"
                >
                  <NavLink
                    to="/some"
                    className="border-b-[1px] border-solid border-stone-200 p-3 text-textMainDark transition-colors duration-200 
                    hover:!text-purple-600 dark:text-textMain"
                  >
                    نمودار
                  </NavLink>
                  <NavLink
                    to="/some"
                    className="border-b-[1px] border-solid border-stone-200 p-3 text-textMainDark transition-colors duration-200 
                    hover:!text-purple-600 dark:text-textMain"
                  >
                    داده های اقتصادی
                  </NavLink>
                  <NavLink
                    to="/some"
                    className="border-b-[1px] border-solid border-stone-200 p-3 text-textMainDark transition-colors duration-200 
                    hover:!text-purple-600 dark:text-textMain"
                  >
                    قیمت ارزهای دیجیتال
                  </NavLink>
                </div>
              </div>
            </li>

            <li>
              <NavLink
                to="/"
                className="text-2xl transition-colors duration-200 hover:text-purple-600"
              >
                <HomeOutlinedIcon fontSize="inherit" />
              </NavLink>
            </li>

            <li>
              <Link to="/" className="flex items-start gap-2 text-xl font-bold">
                Botmix
                <HiveIcon fontSize="medium" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex w-full items-center justify-between customLg:hidden">
          <Link to="/" className="flex items-start gap-2 text-xl font-bold">
            <HiveIcon fontSize="medium" />
            Botmix
          </Link>

          <IconButton onClick={() => setMobileMenuOpen(true)}>
            {mobileMenuOpen ? (
              <MenuOpenIcon className="rotate-180" />
            ) : (
              <MenuIcon />
            )}
          </IconButton>
        </div>

        <Drawer
          anchor="right"
          open={mobileMenuOpen}
          SlideProps={{
            direction: 'left',
          }}
          onClose={() => setMobileMenuOpen(false)}
          sx={{
            'div:nth-of-type(3)': {
              backgroundImage: 'none',
              bgcolor: theme === 'dark' ? '#191D24' : '#FFFFFF',
              '& > div': {
                bgcolor: 'transparent',
              },
            },
          }}
          className="font-vazir"
        >
          <MobileNavbar setMobileMenuOpen={setMobileMenuOpen} />
        </Drawer>
      </header>
      <div className="overflow-x-hidden bg-bgSecondary px-7 dark:bg-grayBackground customXl:px-[140px]">
        <Outlet />
      </div>

      {pathname === '/' && <Footer />}
    </PagesLayoutStyle>
  );
}

export default PagesLayout;
