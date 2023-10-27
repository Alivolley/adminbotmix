import { useMemo, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// MUI
import { CircularProgress } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import IconButton from '@mui/material/IconButton';

// Icons
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CachedIcon from '@mui/icons-material/Cached';

// Components
import LinkAccordion from '../link-accordion/link-accordion';
import ConfirmModal from '../../../templates/confirm-modal/confirm-modal';

// Apis
import useApiKeysAccordion from '../../../../apis/api-keys/useApiKeysAccordion/useApiKeysAccordion';
import useApiKeysRefresh from '../../../../apis/api-keys/useApiKeysRefresh/useApiKeysRefresh';
import useDeleteApiKey from '../../../../apis/api-keys/useDeleteApiKey/useDeleteApiKey';

function AccordionComponent({ detail }) {
   const [copyStatus, setCopyStatus] = useState(false);
   const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);

   const linkRef = useRef();

   const { data: apiKeysRefreshData, isLoading: apiKeysRefreshIsLoading, mutate: refreshLink } = useApiKeysRefresh();
   const { data: apiKeysAccordionData, isLoading: apiKeysAccordionIsLoading } = useApiKeysAccordion(detail?.id);
   const { isLoading: deleteApiKeysIsLoading, mutate: deleteApiKeysMutate } = useDeleteApiKey();

   const confirmHandler = () => {
      setConfirmDeleteModal(false);
      deleteApiKeysMutate(detail?.id);
   };

   const copyLink = () => {
      navigator.clipboard.writeText(linkRef.current.innerText).then(() => {
         setCopyStatus(true);

         setTimeout(() => {
            setCopyStatus(false);
         }, 1500);
      });
   };

   return (
      <div className="rounded-xl bg-bgPrimary p-3 text-textMain dark:bg-bgPrimaryDark dark:text-textMainDark customSm:p-5">
         <div dir="rtl">
            <div className="flex flex-wrap items-center  gap-1 customSm:gap-2">
               <LoadingButton
                  variant="outlined"
                  className="gap-[2px] !p-[1px] !pr-2 !font-vazir customSm:gap-2"
                  size="small"
                  endIcon={<CachedIcon />}
                  color="primaryBlue"
                  loading={apiKeysRefreshIsLoading}
                  onClick={() => refreshLink(detail.id)}
               >
                  تعویض لینک
               </LoadingButton>

               <LoadingButton
                  variant="outlined"
                  className="gap-[2px] !p-[1px] !pr-2 !font-vazir customSm:gap-2"
                  size="small"
                  color="error"
                  endIcon={<DeleteOutlineIcon />}
                  loading={deleteApiKeysIsLoading}
                  onClick={() => setConfirmDeleteModal(true)}
               >
                  حذف
               </LoadingButton>
            </div>
            <div className="mt-8 customSm:mt-3" dir="ltr">
               <p>{detail?.exchange}</p>
               <div className="mt-1 flex items-center gap-2 text-[13px]">
                  <p className="font-bold text-textGray">API KEY :</p>
                  <p>{detail?.api_key}</p>
               </div>
               <div className="mt-1 flex items-center gap-2 text-[13px]">
                  <p className="font-bold text-textGray">API SECRET :</p>
                  <p>{detail?.api_secret}</p>
               </div>
               <div className="mt-1 flex items-center gap-2 text-[13px]">
                  <p className="font-bold text-textGray">type :</p>
                  <p>{detail?.type}</p>
               </div>
               <div className="mt-3 flex flex-wrap items-center gap-2 text-[13px]">
                  <p className="whitespace-nowrap font-bold text-textGray">webhook link :</p>
                  <div
                     dir="ltr"
                     className="relative flex items-center rounded-md border-[1px] border-solid border-textGray text-[10px] customSm:text-xs"
                  >
                     <p
                        className="w-[100px] overflow-hidden border-r-[1px] border-solid
                         border-textGray bg-bgPrimary px-2 py-[6px] dark:bg-bgPrimaryDark customXs:w-[180px] customSm:w-auto"
                        ref={linkRef}
                     >
                        {!apiKeysRefreshData ? detail?.link : apiKeysRefreshData?.link}
                     </p>
                     <div>
                        <IconButton className="text-sm !text-inherit" onClick={copyLink}>
                           <ContentCopyIcon className="!text-sm" />
                        </IconButton>
                     </div>
                     {copyStatus ? (
                        <div className="absolute inset-x-0 bottom-[-30px] z-[1] mx-auto w-fit whitespace-nowrap rounded-md bg-black p-[6px] text-[10px] text-textMainDark">
                           کپی شد
                        </div>
                     ) : null}
                  </div>
               </div>
            </div>
         </div>
         <Accordion
            className="!bg-inherit !bg-none !text-inherit"
            sx={{
               boxShadow: '0px 5px 6px 1px rgba(0, 0, 0, 0.04)',
               '&.MuiAccordion-root:before': {
                  display: 'none',
               },
            }}
         >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} dir="ltr" />
            <AccordionDetails>
               <div className="space-y-2">
                  {useMemo(() => {
                     if (apiKeysAccordionIsLoading) {
                        return (
                           <div className="flex items-center justify-center">
                              <CircularProgress />
                           </div>
                        );
                     }
                     return apiKeysAccordionData?.map(item => <LinkAccordion key={uuidv4()} detail={item} />);
                  }, [apiKeysAccordionData, apiKeysAccordionIsLoading])}
               </div>
            </AccordionDetails>
         </Accordion>

         <ConfirmModal
            open={confirmDeleteModal}
            closeModal={() => setConfirmDeleteModal(false)}
            title={`آیا از حذف apiKey ${detail?.exchange} مطمئن اید ؟`}
            confirmHandler={confirmHandler}
         />
      </div>
   );
}

export default AccordionComponent;
