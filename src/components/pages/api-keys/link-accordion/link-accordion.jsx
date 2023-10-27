import { useState } from 'react';

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
   const formattedJson = JSON.stringify(detail, null, 2);

   const copyLink = () => {
      navigator.clipboard.writeText(JSON.stringify(detail)).then(() => {
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

               <div dir="ltr" className="my-2 max-h-[300px] overflow-auto py-3 text-sm">
                  <pre className="whitespace-pre-wrap">{formattedJson}</pre>
               </div>
            </div>
         </AccordionDetails>
      </Accordion>
   );
}

export default LinkAccordion;
