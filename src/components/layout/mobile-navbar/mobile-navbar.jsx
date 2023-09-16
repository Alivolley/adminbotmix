import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// MUI
import { Button, Collapse } from '@mui/material';

// Icons
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ArticleIcon from '@mui/icons-material/Article';
import SchoolIcon from '@mui/icons-material/School';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Components
import ChangeThemeComponent from '../../templates/changeThemeComponent/changeThemeComponent';

function MobileNavbar() {
  const [marketCollapseOpen, setMarketCollapseOpen] = useState(false);

  return (
    <div className="w-[230px] px-5 py-8">
      <div>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/"
              className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors duration-200 hover:text-purple-600"
            >
              <StorefrontIcon fontSize="small" />
              <p>محصولات</p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/pricing"
              className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors duration-200 hover:text-purple-600"
            >
              <ArticleIcon fontSize="small" />
              <p>مقاله ها</p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/some"
              className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors duration-200 hover:text-purple-600"
            >
              <SchoolIcon fontSize="small" />
              <p>آموزش ها</p>
            </NavLink>
          </li>

          <li dir="ltr" className="pr-1">
            <Button
              className="!font-vazir"
              endIcon={<ExpandMoreIcon />}
              color="inherit"
              onClick={() => setMarketCollapseOpen(prev => !prev)}
            >
              بازار
            </Button>
            <Collapse in={marketCollapseOpen} unmountOnExit>
              <div className="flex flex-col pr-4">
                <NavLink
                  to="/some"
                  className="px-3 py-4 text-sm transition-colors duration-200"
                >
                  نمودار
                </NavLink>
                <NavLink
                  to="/some"
                  className="p-3 text-sm transition-colors duration-200"
                >
                  داده های اقتصادی
                </NavLink>
                <NavLink
                  to="/some"
                  className="p-3 text-sm transition-colors duration-200"
                >
                  قیمت ارزهای دیجیتال
                </NavLink>
              </div>
            </Collapse>
          </li>

          <li>
            <Link
              to="/admin-panel"
              className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors duration-200 hover:text-purple-600"
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
    </div>
  );
}

export default MobileNavbar;
