import { useState } from 'react';

// MUI
import { Button } from '@mui/material';

// Assets
import { RobotCartStyle } from './robot-cart.style';

// Components
import BuyPlanModal from '../buy-plan-modal/buy-plan-modal';

function RobotCart({
   name,
   exchangeCount,
   telegramCount,
   groupOrChannelAlertCount,
   usableExchanges,
   price,
   planeValue,
}) {
   const [showBuyPlanModal, setShowBuyPlanModal] = useState(false);

   return (
      <>
         <RobotCartStyle>
            <h3 className="mt-7 text-2xl font-bold">{name}</h3>
            <p className="mb-12 mt-3 text-left text-2xl">{price} $</p>

            <div className="mb-5 flex items-center justify-between border-b border-gray-200 px-2 pb-5 dark:border-gray-600">
               <p className="text-sm">تعداد ارسال به صرافی (روزانه)</p>
               <p className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-secondaryBlue">
                  {exchangeCount}
               </p>
            </div>

            <div className="mb-5 flex items-center justify-between border-b border-gray-200 px-2 pb-5 dark:border-gray-600">
               <p className="text-sm">تعداد ارسال به تلگرام (روزانه)</p>
               <p className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-secondaryBlue">
                  {telegramCount}
               </p>
            </div>

            <div className="mb-5 flex items-center justify-between border-b border-gray-200 px-2 pb-5 dark:border-gray-600">
               <p className="text-sm">تعداد گروه یا کانال دریافت کننده ی آلرت ها</p>
               <p className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-secondaryBlue">
                  {groupOrChannelAlertCount}
               </p>
            </div>

            <div className="mb-5 flex items-center justify-between px-2 pb-5">
               <p className="text-sm">تعداد صرافی های قابل استفاده</p>
               <p className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-secondaryBlue">
                  {usableExchanges}
               </p>
            </div>
            {price ? (
               <Button
                  className="!mb-3 w-full !font-vazir"
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={() => setShowBuyPlanModal(true)}
               >
                  خرید اشتراک
               </Button>
            ) : (
               <Button className="!mb-3 w-full !font-vazir" variant="outlined" color="primary" size="large" disabled>
                  اشتراک فعلی
               </Button>
            )}
         </RobotCartStyle>
         <BuyPlanModal
            open={showBuyPlanModal}
            closeModal={() => setShowBuyPlanModal(false)}
            name={name}
            planeValue={planeValue}
         />
      </>
   );
}

export default RobotCart;
