import { useState } from 'react';

// MUI
import { LoadingButton } from '@mui/lab';

// Icons
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

// Components
import ConfirmModal from '../../../templates/confirm-modal/confirm-modal';

// Apis
import useCloseDeal from '../../../../apis/robots/useCloseDeal/useCloseDeal';

function RobotsTableItem({ index, detail, refetchData }) {
   const [showConfirmModal, setShowConfirmModal] = useState(false);

   const { isLoading: closeDealIsLoading, mutate: closeDeal } = useCloseDeal();

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
            <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
               {detail?.index}
            </td>
            <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
               {detail?.symbol}
            </td>
            <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
               {detail?.side}
            </td>
            <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
               <div>
                  <p>{detail?.open_order_id}</p>
                  <div className="my-2 h-[1px] w-full bg-gray-200 dark:bg-gray-600" />
                  <p>{detail?.close_order_id}</p>
               </div>
            </td>
            <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
               {detail?.quantity}%
            </td>
            <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
               <div>
                  <p>{detail?.entTime}</p>
                  <div className="my-2 h-[1px] w-full bg-gray-200 dark:bg-gray-600" />
                  <p>{detail?.exitTime}</p>
               </div>
            </td>
            <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
               <div>
                  <p>{detail?.entPrice}</p>
                  <div className="my-2 h-[1px] w-full bg-gray-200 dark:bg-gray-600" />
                  <p>{detail?.exitPrice}</p>
               </div>
            </td>
            <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
               {detail?.contract}
            </td>
            <td
               className={`border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600 ${
                  detail?.profit < 0 ? 'text-error' : 'text-success'
               }`}
            >
               <p>{detail?.profit} USDT</p>
               <p>{detail?.profit_percent}%</p>
            </td>

            <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
               {detail?.manual_closed ? <DoneIcon color="success" /> : <CloseIcon color="error" />}
            </td>
            <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
               {!detail?.is_closed && (
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
               )}
            </td>
         </tr>

         <ConfirmModal
            open={showConfirmModal}
            closeModal={() => setShowConfirmModal(false)}
            title={`آیا از بستن معامله ی ${detail?.symbol} مطمئن هستید ؟`}
            confirmHandler={closeDealHandler}
         />
      </>
   );
}

export default RobotsTableItem;
