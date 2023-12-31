/* eslint-disable no-nested-ternary */
import { useState } from 'react';

// MUI
import { LoadingButton } from '@mui/lab';

// Components
import ConfirmModal from '../../../templates/confirm-modal/confirm-modal';

// Apis
import useCloseDeal from '../../../../apis/robots/useCloseDeal/useCloseDeal';

function RobotsTableItem({ index, detail, refetchData, hasMoreDetail }) {
   const [showConfirmModal, setShowConfirmModal] = useState(false);

   const { isLoading: closeDealIsLoading, mutate: closeDeal } = useCloseDeal(detail?.id);

   const isEven = num => num % 2 === 0;

   const closeDealHandler = () => {
      setShowConfirmModal(false);
      closeDeal(detail?.id, {
         onSuccess: () => {
            refetchData();
         },
      });
   };

   return (
      <>
         <tr
            key={detail?.id}
            className={`transition-all duration-200 ${isEven(index) ? 'bg-bgPrimary dark:bg-bgPrimaryDark' : ''}`}
         >
            <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600 xl:whitespace-normal">
               {detail?.index}
            </td>
            <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600 xl:whitespace-normal">
               {detail?.symbol}
            </td>
            <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600 xl:whitespace-normal">
               <div>
                  <p>Exit {detail?.side}</p>
                  <div className="my-2 h-[1px] w-full bg-gray-200 dark:bg-gray-600" />
                  <p>Entry {detail?.side}</p>
               </div>
            </td>

            {hasMoreDetail && (
               <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600 xl:whitespace-normal">
                  <div>
                     <p>{detail?.close_order_id}</p>
                     <div className="my-2 h-[1px] w-full bg-gray-200 dark:bg-gray-600" />
                     <p>{detail?.open_order_id}</p>
                  </div>
               </td>
            )}
            <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600 xl:whitespace-normal">
               <div>
                  <p>{detail?.exitTime}</p>
                  <div className="my-2 h-[1px] w-full bg-gray-200 dark:bg-gray-600" />
                  <p>{detail?.entTime}</p>
               </div>
            </td>
            <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600 xl:whitespace-normal">
               <div>
                  <p>{detail?.exitPrice}</p>
                  <div className="my-2 h-[1px] w-full bg-gray-200 dark:bg-gray-600" />
                  <p>{detail?.entPrice}</p>
               </div>
            </td>
            <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600 xl:whitespace-normal">
               {detail?.quantity}%
            </td>
            {hasMoreDetail && (
               <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600 xl:whitespace-normal">
                  {detail?.contract}
               </td>
            )}
            <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600 xl:whitespace-normal">
               {detail?.leverage}
            </td>
            <td
               className={`border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600 xl:whitespace-normal ${
                  (detail?.profit || detail?.profit_percent) < 0 ? 'text-error' : 'text-success'
               }`}
            >
               <p>{detail?.profit} USDT</p>
               <p>{detail?.profit_percent}%</p>
            </td>

            {hasMoreDetail && (
               <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600 xl:whitespace-normal">
                  {!detail?.is_closed ? (
                     <LoadingButton
                        className="!normal-case"
                        variant="outlined"
                        color="primaryBlue"
                        size="small"
                        loading={closeDealIsLoading}
                        onClick={() => setShowConfirmModal(true)}
                     >
                        Close manual
                     </LoadingButton>
                  ) : detail?.manual_closed ? (
                     'Closed Manually'
                  ) : (
                     ' '
                  )}
               </td>
            )}
         </tr>
         {hasMoreDetail && (
            <ConfirmModal
               open={showConfirmModal}
               closeModal={() => setShowConfirmModal(false)}
               title={`آیا از بستن معامله ی ${detail?.symbol} مطمئن هستید ؟`}
               confirmHandler={closeDealHandler}
            />
         )}
      </>
   );
}

export default RobotsTableItem;
