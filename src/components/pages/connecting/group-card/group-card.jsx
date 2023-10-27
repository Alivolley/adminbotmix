import { useState } from 'react';

// Mui
import { LoadingButton } from '@mui/lab';

// Icons
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

// Components
import ConfirmModal from '../../../templates/confirm-modal/confirm-modal';

// Apis
import useDeleteTelegramGroup from '../../../../apis/connect-telegram/useDeleteTelegramGroup/useDeleteTelegramGroup';

function GroupCard({ detail }) {
   const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);

   const { isLoading: deleteTelegramIsLoading, mutate: deleteTelegramMutate } = useDeleteTelegramGroup();

   const confirmHandler = () => {
      setConfirmDeleteModal(false);
      deleteTelegramMutate(detail?.id);
   };

   return (
      <div className="rounded-xl bg-bgPrimary p-3 text-textMain dark:bg-bgPrimaryDark dark:text-textMainDark customSm:p-5">
         <div className="flex items-center justify-end  gap-1 customSm:gap-2">
            <LoadingButton
               variant="outlined"
               className="gap-[2px] !p-[1px] !pr-2 !font-vazir customSm:gap-2"
               size="small"
               color="error"
               endIcon={<DeleteOutlineIcon />}
               onClick={() => setConfirmDeleteModal(true)}
               loading={deleteTelegramIsLoading}
            >
               حذف
            </LoadingButton>
         </div>
         <div className="mt-8 space-y-3 customSm:mt-3">
            <div className="mt-1 flex items-center gap-2 text-sm">
               <p className="font-bold text-textGray">نام گروه :</p>
               <p dir="ltr">{detail?.name}</p>
            </div>
            <div className="mt-1 flex items-center gap-2 text-sm">
               <p className="font-bold text-textGray">آیدی گروه :</p>
               <p dir="ltr">{detail?.group_id}</p>
            </div>
         </div>

         <ConfirmModal
            open={confirmDeleteModal}
            closeModal={() => setConfirmDeleteModal(false)}
            title={`آیا از حذف گروه ${detail?.name} اطمینان دارید ؟`}
            confirmHandler={confirmHandler}
         />
      </div>
   );
}

export default GroupCard;
