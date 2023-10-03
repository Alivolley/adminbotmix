import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// MUI
import { Button, Collapse } from '@mui/material';

// Icons
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import SchoolIcon from '@mui/icons-material/School';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import LoginIcon from '@mui/icons-material/Login';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { changeToLoginFalse } from '../../../store/reducers/loginStatusReducer';

// Hooks
import useCookie from '../../../hooks/useCookie';

// Assets
import { MobileNavbarStyle } from './mobile-navbar.style';

// Components
import ChangeThemeComponent from '../../templates/changeThemeComponent/changeThemeComponent';
import ConfirmModal from '../../templates/confirm-modal/confirm-modal';

function MobileNavbar({ setMobileMenuOpen }) {
   const [marketCollapseOpen, setMarketCollapseOpen] = useState(false);
   const [productsCollapseOpen, setProductsCollapseOpen] = useState(false);
   const [confirmLogoutModal, setConfirmLogoutModal] = useState(false);

   const { deleteCookie } = useCookie();
   const dispatch = useDispatch();

   const isLogin = useSelector(state => state.loginStatusReducer);

   const confirmHandler = () => {
      deleteCookie('botmix_accessToken');
      deleteCookie('botmix_refreshToken');
      deleteCookie('isLogin');
      dispatch(changeToLoginFalse());
      setConfirmLogoutModal(false);
      setMobileMenuOpen(false);
   };

   return (
      <MobileNavbarStyle className="w-[230px] px-5 py-8">
         <div>
            <ul className="space-y-4">
               <li>
                  <div className="flex items-center justify-between">
                     <NavLink
                        onClick={() => setMobileMenuOpen(false)}
                        to="/"
                        className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors duration-200 hover:text-secondaryBlue"
                     >
                        <HomeOutlinedIcon fontSize="small" />
                        <p>صفحه اصلی</p>
                     </NavLink>
                     <ChangeThemeComponent />
                  </div>
               </li>

               {!isLogin && (
                  <li>
                     <NavLink
                        onClick={() => setMobileMenuOpen(false)}
                        to="/login"
                        className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors duration-200 hover:text-secondaryBlue"
                     >
                        <LoginIcon fontSize="small" />
                        <p>ورود</p>
                     </NavLink>
                  </li>
               )}

               <li dir="ltr" className="pr-1">
                  <Button
                     className="!font-vazir"
                     endIcon={<ExpandMoreIcon {...(marketCollapseOpen && { className: 'rotate-180' })} />}
                     color="inherit"
                     onClick={() => setMarketCollapseOpen(prev => !prev)}
                  >
                     بازار
                  </Button>
                  <Collapse in={marketCollapseOpen} unmountOnExit>
                     <div className="flex flex-col pr-4">
                        <NavLink
                           onClick={() => setMobileMenuOpen(false)}
                           to="/some"
                           className="px-3 py-4 text-sm transition-colors duration-200 hover:text-secondaryBlue"
                        >
                           نمودار
                        </NavLink>
                        <NavLink
                           onClick={() => setMobileMenuOpen(false)}
                           to="/some"
                           className="p-3 text-sm transition-colors duration-200 hover:text-secondaryBlue"
                        >
                           داده های اقتصادی
                        </NavLink>
                        <NavLink
                           onClick={() => setMobileMenuOpen(false)}
                           to="/some"
                           className="p-3 text-sm transition-colors duration-200 hover:text-secondaryBlue"
                        >
                           قیمت ارزهای دیجیتال
                        </NavLink>
                     </div>
                  </Collapse>
               </li>

               <li dir="ltr" className="pr-1">
                  <Button
                     className="!font-vazir"
                     endIcon={<ExpandMoreIcon {...(marketCollapseOpen && { className: 'rotate-180' })} />}
                     color="inherit"
                     onClick={() => setProductsCollapseOpen(prev => !prev)}
                  >
                     محصولات
                  </Button>
                  <Collapse in={productsCollapseOpen} unmountOnExit>
                     <div className="flex flex-col pr-4">
                        <NavLink
                           onClick={() => setMobileMenuOpen(false)}
                           to="/products"
                           state="portfolio_management"
                           className="px-3 py-4 text-sm transition-colors duration-200 hover:text-secondaryBlue"
                        >
                           سبد گردانی
                        </NavLink>
                        <NavLink
                           onClick={() => setMobileMenuOpen(false)}
                           to="/products"
                           state="robot_interface"
                           className="p-3 text-sm transition-colors duration-200 hover:text-secondaryBlue"
                        >
                           اشتراک ربات واسط
                        </NavLink>
                     </div>
                  </Collapse>
               </li>

               <li>
                  <NavLink
                     onClick={() => setMobileMenuOpen(false)}
                     to="/tutorials"
                     className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors duration-200 hover:text-secondaryBlue"
                  >
                     <SchoolIcon fontSize="small" />
                     <p>آموزش ها</p>
                  </NavLink>
               </li>

               <li>
                  <NavLink
                     onClick={() => setMobileMenuOpen(false)}
                     to="/articles"
                     className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors duration-200 hover:text-secondaryBlue"
                  >
                     <ArticleIcon fontSize="small" />
                     <p>مقاله ها</p>
                  </NavLink>
               </li>

               <li>
                  <NavLink
                     onClick={() => setMobileMenuOpen(false)}
                     to="/rules"
                     className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors duration-200 hover:text-secondaryBlue"
                  >
                     <GavelOutlinedIcon fontSize="small" />
                     <p>قوانین</p>
                  </NavLink>
               </li>

               <li>
                  <NavLink
                     onClick={() => setMobileMenuOpen(false)}
                     to="/contactUs"
                     className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors duration-200 hover:text-secondaryBlue"
                  >
                     <GroupsIcon fontSize="small" />
                     <p>ارتباط با ما</p>
                  </NavLink>
               </li>

               {isLogin && (
                  <>
                     <li>
                        <Link
                           to="/admin-panel/dashboard"
                           className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors duration-200 hover:text-secondaryBlue"
                        >
                           <PersonIcon fontSize="small" />
                           <p>پنل کاربری</p>
                        </Link>
                     </li>

                     <li>
                        <Button
                           className="gap-2 !font-vazirBold"
                           variant="text"
                           color="error"
                           onClick={() => setConfirmLogoutModal(true)}
                        >
                           خروج
                        </Button>
                     </li>
                  </>
               )}
            </ul>
         </div>
         <ConfirmModal
            open={confirmLogoutModal}
            closeModal={() => setConfirmLogoutModal(false)}
            title="آیا از خروج از حساب خود مطمئن هستید ؟"
            confirmHandler={confirmHandler}
         />
      </MobileNavbarStyle>
   );
}

export default MobileNavbar;
