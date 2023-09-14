import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

// MUI
import { Button, Drawer, IconButton } from '@mui/material';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

// Components
import ChangeThemeComponent from '../templates/changeThemeComponent/changeThemeComponent';

function PagesLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const theme = useSelector(state => state.themeReducer);

  return (
    <div className="text-textMain transition-colors duration-200 dark:text-textMainDark">
      <header className="sticky top-0 z-[1]  flex items-center justify-between bg-bgPrimary px-7 py-4 dark:bg-[#070A29]">
        <div>
          <p className="font-adlam text-[40px]">BOTMIX</p>
        </div>
        <div>
          <ul className="hidden items-center justify-center gap-10 font-bold customMd:flex">
            <li>
              <Link
                to="/"
                className="transition-colors duration-200 hover:text-purple-600"
              >
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="transition-colors duration-200 hover:text-purple-600"
              >
                قیمت ها
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="transition-colors duration-200 hover:text-purple-600"
              >
                درباره ی ما
              </Link>
            </li>
            <li>
              <Link
                to="/admin-panel"
                className="transition-colors duration-200 hover:text-purple-600"
              >
                پنل ادمین
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden items-center customMd:flex">
          <Button
            className="!font-vazir"
            variant="contained"
            color="buttonPurple"
          >
            <Link to="/" className="text-textMainDark">
              به ما بپیوندید
            </Link>
          </Button>

          <ChangeThemeComponent />
        </div>
        <div className="customMd:hidden">
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
          <div className="w-[230px] px-5 py-8">
            <div>
              <ul className="space-y-4">
                <li>
                  <Button className="!font-vazir">
                    <Link to="/">صفحه اصلی</Link>
                  </Button>
                </li>
                <li>
                  <Button className="!font-vazir">
                    <Link to="/pricing">قیمت ها</Link>
                  </Button>
                </li>
                <li>
                  <Button className="!font-vazir">
                    <Link to="/">درباره ی ما</Link>
                  </Button>
                </li>
                <li>
                  <Button className="!font-vazir">
                    <Link to="/admin-panel">پنل ادمین</Link>
                  </Button>
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <Button
                className="!font-vazir"
                variant="contained"
                color="buttonPurple"
              >
                <Link to="/" className="text-textMainDark">
                  به ما بپیوندید
                </Link>
              </Button>

              <div className="mt-6 flex items-center justify-between">
                <p>حالت :</p>
                <ChangeThemeComponent />
              </div>
            </div>
          </div>
        </Drawer>
      </header>
      <div className="bg-gradientPagesLayout px-7 dark:bg-gradientPagesLayoutDark">
        <Outlet />
      </div>
    </div>
  );
}

export default PagesLayout;
