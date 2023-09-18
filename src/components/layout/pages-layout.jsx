import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

// MUI
import { Button, Drawer, IconButton, Tooltip } from '@mui/material';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Assets
import { PagesLayoutStyle } from './pages-layout.style';

// Components
import ChangeThemeComponent from '../templates/changeThemeComponent/changeThemeComponent';
import MobileNavbar from './mobile-navbar/mobile-navbar';
import Footer from './footer/footer';

function PagesLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const theme = useSelector(state => state.themeReducer);

  return (
    <PagesLayoutStyle className="text-textMain dark:text-textMainDark">
      <header className="sticky top-0 z-[11] flex items-center justify-between bg-bgPrimary px-7 py-4 dark:bg-darkPurple customXl:px-[140px]">
        <div className="hidden items-center customMd:flex">
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
              className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors duration-200 hover:text-purple-600"
            >
              <PersonIcon fontSize="small" />
              <p>پنل کاربری</p>
            </Link>
          </Tooltip>

          <Button className="gap-2 !font-vazir" variant="text" color="inherit">
            خروج از حساب
          </Button>

          <ChangeThemeComponent />
        </div>

        <div>
          <ul className="hidden items-center justify-center gap-10 customMd:flex">
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
                  className="bg-darkPurple dark:bg-bgPrimary"
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
                to="/some"
                className="transition-colors duration-200 hover:text-purple-600"
              >
                آموزش ها
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
                to="/"
                className="transition-colors duration-200 hover:text-purple-600"
              >
                محصولات
              </NavLink>
            </li>

            <li>
              <Link to="/" className="text-2xl font-bold">
                BOTMIX
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex w-full items-center justify-between customMd:hidden">
          <Link to="/" className="text-2xl font-bold">
            BOTMIX
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
              bgcolor: theme === 'dark' ? '#070A29' : '#F7FAFC',
              '& > div': {
                bgcolor: 'transparent',
              },
            },
          }}
          className="font-vazir"
        >
          <MobileNavbar />
        </Drawer>
      </header>
      <div className="overflow-x-hidden bg-gradientPagesLayout px-7 dark:bg-gradientPagesLayoutDark customXl:px-[140px]">
        <Outlet />
      </div>

      <Footer />
    </PagesLayoutStyle>
  );
}

export default PagesLayout;
