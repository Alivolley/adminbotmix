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

// Assets
import { MobileNavbarStyle } from './mobile-navbar.style';

// Components
import ChangeThemeComponent from '../../templates/changeThemeComponent/changeThemeComponent';

function MobileNavbar({ setMobileMenuOpen }) {
  const [marketCollapseOpen, setMarketCollapseOpen] = useState(false);
  const [productsCollapseOpen, setProductsCollapseOpen] = useState(false);

  return (
    <MobileNavbarStyle className="w-[230px] px-5 py-8">
      <div>
        <ul className="space-y-4">
          <li>
            <NavLink
              onClick={() => setMobileMenuOpen(false)}
              to="/"
              className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors duration-200 hover:text-violet-600"
            >
              <HomeOutlinedIcon fontSize="small" />
              <p>صفحه اصلی</p>
            </NavLink>
          </li>

          <li dir="ltr" className="pr-1">
            <Button
              className="!font-vazir"
              endIcon={
                <ExpandMoreIcon
                  {...(marketCollapseOpen && { className: 'rotate-180' })}
                />
              }
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
                  className="px-3 py-4 text-sm transition-colors duration-200 hover:text-violet-600"
                >
                  نمودار
                </NavLink>
                <NavLink
                  onClick={() => setMobileMenuOpen(false)}
                  to="/some"
                  className="p-3 text-sm transition-colors duration-200 hover:text-violet-600"
                >
                  داده های اقتصادی
                </NavLink>
                <NavLink
                  onClick={() => setMobileMenuOpen(false)}
                  to="/some"
                  className="p-3 text-sm transition-colors duration-200 hover:text-violet-600"
                >
                  قیمت ارزهای دیجیتال
                </NavLink>
              </div>
            </Collapse>
          </li>

          <li dir="ltr" className="pr-1">
            <Button
              className="!font-vazir"
              endIcon={
                <ExpandMoreIcon
                  {...(marketCollapseOpen && { className: 'rotate-180' })}
                />
              }
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
                  className="px-3 py-4 text-sm transition-colors duration-200 hover:text-violet-600"
                >
                  سبد گردانی
                </NavLink>
                <NavLink
                  onClick={() => setMobileMenuOpen(false)}
                  to="/products"
                  state="robot_interface"
                  className="p-3 text-sm transition-colors duration-200 hover:text-violet-600"
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
              className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors duration-200 hover:text-violet-600"
            >
              <SchoolIcon fontSize="small" />
              <p>آموزش ها</p>
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={() => setMobileMenuOpen(false)}
              to="/articles"
              className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors duration-200 hover:text-violet-600"
            >
              <ArticleIcon fontSize="small" />
              <p>مقاله ها</p>
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={() => setMobileMenuOpen(false)}
              to="/rules"
              className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors duration-200 hover:text-violet-600"
            >
              <GavelOutlinedIcon fontSize="small" />
              <p>قوانین</p>
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={() => setMobileMenuOpen(false)}
              to="/contactUs"
              className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors duration-200 hover:text-violet-600"
            >
              <GroupsIcon fontSize="small" />
              <p>ارتباط با ما</p>
            </NavLink>
          </li>

          <li>
            <Link
              to="/admin-panel"
              className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors duration-200 hover:text-violet-600"
            >
              <PersonIcon fontSize="small" />
              <p>پنل کاربری</p>
            </Link>
          </li>

          <li>
            <Button className="gap-2 !font-vazir" variant="text" color="error">
              خروج از حساب
            </Button>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <div className="mt-6 flex items-center justify-between">
          <p>حالت :</p>
          <ChangeThemeComponent />
        </div>
      </div>
    </MobileNavbarStyle>
  );
}

export default MobileNavbar;
