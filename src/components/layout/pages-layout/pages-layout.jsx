import { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';

// MUI
import { Button, Drawer, IconButton, Tooltip } from '@mui/material';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LoginIcon from '@mui/icons-material/Login';

// Redux
import { useSelector } from 'react-redux';

// Assets
import { PagesLayoutStyle } from './pages-layout.style';
import logo3 from '../../../assets/images/logo3.png';

// Hooks
import useCookie from '../../../hooks/useCookie';

// Components
import MobileNavbar from '../mobile-navbar/mobile-navbar';
import Footer from '../footer/footer';
import ChangeThemeComponent from '../../templates/changeThemeComponent/changeThemeComponent';
import ConfirmModal from '../../templates/confirm-modal/confirm-modal';

function PagesLayout() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [confirmLogoutModal, setConfirmLogoutModal] = useState(false);

   const { pathname } = useLocation();
   const { deleteCookie } = useCookie();

   const theme = useSelector(state => state.themeReducer);
   const isLogin = useSelector(state => state.loginStatusReducer);
   const userEmail = useSelector(state => state.emailReducer);

   const confirmHandler = () => {
      deleteCookie('botmix_accessToken');
      deleteCookie('botmix_refreshToken');
      deleteCookie('isLogin');
      window.location.reload();
   };

   return (
      <PagesLayoutStyle className="text-textMain dark:text-textMainDark">
         <header className="sticky top-0 z-[11] flex items-center justify-between bg-bgPrimary px-7 py-2 dark:bg-bgPrimaryDark">
            <div className="hidden items-center customLg:flex">
               {!isLogin && (
                  <NavLink
                     to="/login"
                     className="flex items-center gap-2 rounded-md p-2 text-[13px] transition-colors duration-200 hover:text-secondaryBlue"
                  >
                     <LoginIcon fontSize="small" />
                     <p>ورود</p>
                  </NavLink>
               )}

               {isLogin && (
                  <>
                     <Tooltip
                        title={userEmail?.value}
                        classes={{
                           tooltip: '!text-[13px] !bg-[#1A202C]',
                           arrow: '!text-[#1A202C]',
                        }}
                        arrow
                     >
                        <Link
                           to="/admin-panel/dashboard"
                           className="flex items-center gap-2 rounded-md p-2 text-[13px] transition-colors duration-200 hover:text-secondaryBlue"
                        >
                           <PersonIcon fontSize="small" />
                           <p>پنل کاربری</p>
                        </Link>
                     </Tooltip>

                     <Button
                        className="gap-2 !font-vazirBold !text-xs"
                        variant="text"
                        color="error"
                        onClick={() => setConfirmLogoutModal(true)}
                     >
                        خروج
                     </Button>
                  </>
               )}
               <div>
                  <ChangeThemeComponent />
               </div>
            </div>

            <div>
               <ul className="hidden items-center justify-center gap-10 text-[13px] customLg:flex">
                  <li>
                     <NavLink to="/contactUs" className="transition-colors duration-200 hover:text-secondaryBlue">
                        ارتباط با ما
                     </NavLink>
                  </li>

                  <li>
                     <NavLink to="/rules" className="transition-colors duration-200 hover:text-secondaryBlue">
                        قوانین
                     </NavLink>
                  </li>

                  <li>
                     <NavLink to="/articles" className="transition-colors duration-200 hover:text-secondaryBlue">
                        مقاله ها
                     </NavLink>
                  </li>

                  <li>
                     <NavLink to="/tutorials" className="transition-colors duration-200 hover:text-secondaryBlue">
                        آموزش ها
                     </NavLink>
                  </li>

                  <li>
                     <NavLink
                        to="/growableCurrencies"
                        className="transition-colors duration-200 hover:text-secondaryBlue"
                     >
                        ارز های مستعد رشد
                     </NavLink>
                  </li>

                  <li>
                     <div id="dropdownWrapper">
                        <NavLink
                           to="/products"
                           id="dropdownBtn"
                           className="flex items-center gap-2 py-3 transition-colors duration-200 hover:text-secondaryBlue"
                        >
                           محصولات
                           <KeyboardArrowDownIcon fontSize="small" />
                        </NavLink>

                        <div id="dropdownBox" className="bg-bgPrimaryDark dark:bg-bgPrimary">
                           <NavLink
                              to="/products"
                              state="portfolio_management"
                              className="border-b-[1px] border-solid border-stone-200 p-3 text-textMainDark transition-colors duration-200 hover:!text-secondaryBlue dark:text-textMain"
                           >
                              ربات تریدر و کپی ترید
                           </NavLink>
                           <NavLink
                              to="/products"
                              state="robot_interface"
                              className="border-b-[1px] border-solid border-stone-200 p-3 text-textMainDark transition-colors duration-200 hover:!text-secondaryBlue dark:text-textMain"
                           >
                              اشتراک ربات واسط
                           </NavLink>
                        </div>
                     </div>
                  </li>

                  <li>
                     <NavLink to="/" className="text-2xl transition-colors duration-200 hover:text-secondaryBlue">
                        <HomeOutlinedIcon fontSize="inherit" />
                     </NavLink>
                  </li>

                  <li>
                     <Link to="/" className="flex items-start text-xl font-bold">
                        <div className="h-12">
                           <img src={logo3} alt="logo" className="h-full w-full" />
                        </div>
                     </Link>
                  </li>
               </ul>
            </div>

            <div className="flex w-full items-center justify-between customLg:hidden">
               <IconButton onClick={() => setMobileMenuOpen(true)}>
                  {mobileMenuOpen ? <MenuOpenIcon className="rotate-180" /> : <MenuIcon />}
               </IconButton>

               <Link to="/" className="flex items-start text-xl font-bold">
                  <div className="h-12">
                     <img src={logo3} alt="logo" className="h-full w-full" />
                  </div>
               </Link>
            </div>

            <Drawer
               anchor="left"
               open={mobileMenuOpen}
               SlideProps={{
                  direction: 'right',
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
         <ConfirmModal
            open={confirmLogoutModal}
            closeModal={() => setConfirmLogoutModal(false)}
            title="آیا از خروج از حساب خود مطمئن هستید ؟"
            confirmHandler={confirmHandler}
         />
         <div className="overflow-x-hidden bg-bgPrimary px-7 dark:bg-bgPrimaryDark customXl:px-[140px]">
            <Outlet />
         </div>

         {pathname === '/' && <Footer />}
      </PagesLayoutStyle>
   );
}

export default PagesLayout;
