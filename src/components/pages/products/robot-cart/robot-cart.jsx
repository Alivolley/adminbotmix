// MUI
import { Button } from '@mui/material';

// Assets
import { RobotCartStyle } from './robot-cart.style';

function RobotCart() {
  return (
    <RobotCartStyle>
      <h3 className="mt-7 text-2xl font-bold">نام محصول</h3>
      <p className="mb-12 mt-3 text-left text-2xl">20.00 $</p>

      <div className="mb-5 flex items-center justify-between border-b border-gray-200 px-2 pb-5 dark:border-gray-600">
        <p>ارسال به صرافی (روزانه)</p>
        <p className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-secondaryBlue">
          1
        </p>
      </div>

      <div className="mb-5 flex items-center justify-between border-b border-gray-200 px-2 pb-5 dark:border-gray-600">
        <p>ارسال به تلگرام (روزانه)</p>
        <p className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-secondaryBlue">
          20
        </p>
      </div>

      <div className="mb-5 flex items-center justify-between border-b border-gray-200 px-2 pb-5 dark:border-gray-600">
        <p>گروه یا کانال دریافت کننده ی آلرت ها</p>
        <p className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-secondaryBlue">
          4
        </p>
      </div>

      <div className="mb-5 flex items-center justify-between px-2 pb-5">
        <p>تعداد صرافی های قابل استفاده</p>
        <p className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-secondaryBlue">
          555
        </p>
      </div>

      <Button className="w-full !font-vazir" variant="outlined" color="primary">
        خرید اشتراک
      </Button>
    </RobotCartStyle>
  );
}

export default RobotCart;
