import { useState } from 'react';

// Mui
import { Button, Switch } from '@mui/material';

// Components
import ConfirmModal from '../../../templates/confirm-modal/confirm-modal';
import EditRobotModal from '../edit-robot-modal/edit-robot-modal';

// Apis
import useActiveRobotStatus from '../../../../apis/robots/useActiveRobotStatus/useActiveRobotStatus';

function DetailsTable({ detail }) {
   const [isActive, setIsActive] = useState(detail?.is_active);
   const [confirmModalStatus, setConfirmModalStatus] = useState(false);
   const [showEditModal, setShowEditModal] = useState(false);

   const { mutate: changeRobotActivityStatus, isLoading: robotActivityIsLoading } = useActiveRobotStatus(detail?.id);

   const confirmHandler = () => {
      if (isActive) {
         changeRobotActivityStatus(
            {
               action: 'active',
               active: false,
               botId: detail?.id,
            },
            {
               onSuccess: () => {
                  setIsActive(false);
                  setConfirmModalStatus(false);
               },
            }
         );
      } else {
         changeRobotActivityStatus(
            {
               action: 'active',
               active: true,
               botId: detail?.id,
            },
            {
               onSuccess: () => {
                  setIsActive(true);
                  setConfirmModalStatus(false);
               },
            }
         );
      }
   };

   // console.log(detail);

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
               <p className="text-sm text-textGray">Total profit percent</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.profit_percent}</p>
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

            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">Open positions</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.openPositions}</p>
            </div>

            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">Fund percent</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.fund}</p>
            </div>

            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">Exchange</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.exchange}</p>
            </div>

            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">Api key</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.api_key}</p>
            </div>
            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">Api secret</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.api_secret}</p>
            </div>

            <div className="flex items-center justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm">{isActive ? 'غیر فعالسازی ربات' : 'فعالسازی ربات'}</p>
               <div>
                  <Switch checked={isActive} onClick={() => setConfirmModalStatus(true)} />
               </div>
            </div>
            <div className="flex items-center justify-between gap-1 p-3">
               <Button
                  className="w-full !font-vazir"
                  variant="contained"
                  color="primaryBlue"
                  onClick={() => setShowEditModal(true)}
               >
                  ویرایش ربات
               </Button>
            </div>
         </div>

         <ConfirmModal
            open={confirmModalStatus}
            closeModal={() => setConfirmModalStatus(false)}
            title={`آیا از ${isActive ? 'غیر فعالسازی' : 'فعالسازی'} ربات مطمئن هستید ؟`}
            confirmHandler={confirmHandler}
            confirmLoading={robotActivityIsLoading}
         />

         <EditRobotModal show={showEditModal} closeModal={() => setShowEditModal(false)} detail={detail} />
      </div>
   );
}

export default DetailsTable;
