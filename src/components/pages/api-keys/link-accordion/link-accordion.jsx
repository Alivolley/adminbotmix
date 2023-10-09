import { useRef, useState } from 'react';

// MUI
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import IconButton from '@mui/material/IconButton';

// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function LinkAccordion({ detail }) {
   const [copyStatus, setCopyStatus] = useState(false);

   const linkRef = useRef();

   const copyLink = () => {
      navigator.clipboard.writeText(linkRef.current.innerHTML).then(() => {
         setCopyStatus(true);
         setTimeout(() => {
            setCopyStatus(false);
         }, 1500);
      });
   };

   return (
      <Accordion
         className="!bg-inherit !bg-none !text-inherit"
         sx={{
            boxShadow: '0px 2px 5px 1px rgba(31, 113, 145, 0.2)',
            '&.MuiAccordion-root:before': {
               display: 'none',
            },
         }}
      >
         <AccordionSummary expandIcon={<ExpandMoreIcon />} dir="ltr" className="">
            {detail?.action}
         </AccordionSummary>
         <AccordionDetails>
            <div>
               <div className="flex items-center">
                  <IconButton className="!text-inherit" onClick={copyLink}>
                     <ContentCopyIcon className="!text-base" />
                  </IconButton>
                  {copyStatus ? (
                     <div className="rounded-md bg-black p-[6px] text-xs text-textMainDark">کپی شد</div>
                  ) : null}
               </div>

               <div ref={linkRef} dir="ltr" className="my-2 max-h-[300px] overflow-auto py-3 text-sm">
                  <div className="flex items-center">
                     <p>leverage : </p>
                     <p>{detail?.leverage}</p>
                  </div>

                  <div className="flex items-center">
                     <p>side : </p>
                     <p>{detail?.side}</p>
                  </div>

                  <div className="flex items-center">
                     <p>size : </p>
                     <p>{detail?.size}</p>
                  </div>

                  <div className="flex items-center">
                     <p>symbol : </p>
                     <p>{detail?.symbol}</p>
                  </div>

                  <div className="flex items-center">
                     <p>type : </p>
                     <p>{detail?.type}</p>
                  </div>
               </div>
            </div>
         </AccordionDetails>
      </Accordion>
   );
}

export default LinkAccordion;
