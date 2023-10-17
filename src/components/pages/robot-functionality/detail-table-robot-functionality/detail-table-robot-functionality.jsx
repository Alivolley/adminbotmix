import { useState } from 'react';
import { toast } from 'react-toastify';

// Mui
import { LoadingButton } from '@mui/lab';

// Redux
import { useSelector } from 'react-redux';

// Components
import ActiveRobotModal from '../../products/active-robot-modal/active-robot-modal';

function DetailTableRobotFunctionality({ detail }) {
   const [showActiveModal, setShowActiveModal] = useState(false);
   const isLogin = useSelector(state => state.loginStatusReducer);

   const activeRobotHandler = () => {
      if (isLogin) {
         setShowActiveModal(true);
      } else {
         toast.error('برای فعالسازی ربات ، ابتدا باید وارد حساب کاربری خود شوید .', {
            style: {
               direction: 'rtl',
               fontFamily: 'vazir',
            },
            theme: 'colored',
            autoClose: 6000,
         });
      }
   };

   return (
      <div>
         <p dir="rtl" className="mb-8">
            اطلاعات
         </p>
         <div dir="ltr" className="rounded-2xl">
            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">Name</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.name}</p>
            </div>

            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">Total profit</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.total_profit}</p>
            </div>

            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">Win rate</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.winRate}</p>
            </div>

            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">Max drawdown</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.drawdown}</p>
            </div>

            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">Max run up</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.run_up}</p>
            </div>

            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">All trade</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.all_trade}</p>
            </div>

            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">Lose trades</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.lose_trade}</p>
            </div>

            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">Win trades</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.win_trade}</p>
            </div>

            <div className="flex items-center justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <LoadingButton
                  className="w-full !font-vazir"
                  variant="contained"
                  color="primaryBlue"
                  onClick={activeRobotHandler}
                  disabled={detail?.is_active}
               >
                  {detail?.is_active ? 'ربات غیر فعال است' : 'فعالسازی'}
               </LoadingButton>
            </div>
         </div>

         <ActiveRobotModal show={showActiveModal} closeModal={() => setShowActiveModal(false)} detail={detail} />
      </div>
   );
}

export default DetailTableRobotFunctionality;
