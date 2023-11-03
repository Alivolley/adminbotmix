import { useState } from 'react';
import { toast } from 'react-toastify';

// MUI
import { Button } from '@mui/material';

// Icons
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

// Redux
import { useSelector } from 'react-redux';

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
   planTime,
   hasTrade,
}) {
   const [showBuyPlanModal, setShowBuyPlanModal] = useState(false);
   const isLogin = useSelector(state => state.loginStatusReducer);
   const plan = useSelector(state => state.emailReducer.plan);

   const showBuyPlanModalHandler = () => {
      if (isLogin) {
         setShowBuyPlanModal(true);
      } else {
         toast.error('برای خرید اشتراک ، ابتدا باید وارد حساب کاربری خود شوید .', {
            style: {
               direction: 'rtl',
               fontFamily: 'vazir',
            },
            theme: 'colored',
            autoClose: 5000,
         });
      }
   };

   return (
      <>
         <RobotCartStyle>
            <h3 className="mt-7 text-2xl font-bold">{name}</h3>
            <div className="mb-12 mt-3 flex items-start justify-end gap-2">
               {price ? (
                  <p className="text-xs text-red-400">{planTime === 3 ? '5٪' : planTime === 12 ? '20٪' : null}</p>
               ) : null}
               <p className="text-2xl">{price} $</p>
            </div>

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
               <p className="text-sm">تعداد گروه یا کانال دریافت کننده ی الرت ها</p>
               <p className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-secondaryBlue">
                  {groupOrChannelAlertCount}
               </p>
            </div>

            <div className="mb-5 flex items-center justify-between border-b border-gray-200 px-2 pb-5 dark:border-gray-600">
               <p className="text-sm">تعداد صرافی های قابل استفاده</p>
               <p className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-secondaryBlue">
                  {usableExchanges}
               </p>
            </div>

            <div className="mb-5 flex items-center justify-between px-2">
               <p className="text-sm">ترید با درصد سرمایه موجود در صرافی</p>
               <p className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-secondaryBlue text-[28px]">
                  {hasTrade ? <CheckIcon color="success" fontSize="inherit" /> : <CloseIcon />}
               </p>
            </div>
            {price ? (
               <Button
                  className="!mb-3 w-full !font-vazir"
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={showBuyPlanModalHandler}
                  disabled={plan === planeValue ? true : plan === 'premium'}
               >
                  {plan === planeValue ? 'اشتراک فعلی' : 'خرید اشتراک'}
               </Button>
            ) : (
               <Button className="!mb-3 w-full !font-vazir" variant="outlined" color="primary" size="large" disabled>
                  اشتراک رایگان
               </Button>
            )}
         </RobotCartStyle>
         <BuyPlanModal
            open={showBuyPlanModal}
            closeModal={() => setShowBuyPlanModal(false)}
            name={name}
            planeValue={planeValue}
            planTime={planTime}
            price={price}
         />
      </>
   );
}

export default RobotCart;
