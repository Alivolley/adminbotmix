import { useRef, useState } from 'react';

// MUI
import { Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import IconButton from '@mui/material/IconButton';

// Icons
import CableIcon from '@mui/icons-material/Cable';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// Components
import LinkAccordion from '../link-accordion/link-accordion';

function AccordionComponent() {
  const [copyStatus, setCopyStatus] = useState(false);

  const linkRef = useRef();

  const testArray = [1, 2, 3, 4, 5, 6];

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
          <Button
            variant="outlined"
            className="gap-[2px] !p-[1px] !pr-2 !font-vazir customSm:gap-2"
            size="small"
            endIcon={<CableIcon />}
            color="primaryBlue"
          >
            اتصال
          </Button>
          <Button
            variant="outlined"
            className="gap-[2px] !p-[1px] !pr-2 !font-vazir customSm:gap-2"
            size="small"
            color="warning"
            endIcon={<DoDisturbOnOutlinedIcon />}
          >
            ابطال
          </Button>
          <Button
            variant="outlined"
            className="gap-[2px] !p-[1px] !pr-2 !font-vazir customSm:gap-2"
            size="small"
            color="error"
            endIcon={<DeleteOutlineIcon />}
          >
            حذف
          </Button>
        </div>
        <div className="mt-8 customSm:mt-3" dir="ltr">
          <p>Binance</p>
          <div className="mt-1 flex items-center gap-2 text-[13px]">
            <p className="font-bold text-textGray">API KEY :</p>
            <p>2546879</p>
          </div>
          <div className="mt-1 flex items-center gap-2 text-[13px]">
            <p className="font-bold text-textGray">API SECRET :</p>
            <p>2687841</p>
          </div>
          <div className="mt-1 flex items-center gap-2 text-[13px]">
            <p className="font-bold text-textGray">نوع :</p>
            <p>Future</p>
          </div>
        </div>

        <div
          dir="ltr"
          className="relative mr-auto mt-2 flex w-fit items-center rounded-md border-[1px] border-solid border-textGray text-[10px] customSm:text-xs"
        >
          <p
            className="border-r-[1px] border-solid border-textGray bg-bgPrimary px-2 py-[6px] dark:bg-bgPrimaryDark"
            ref={linkRef}
          >
            jsfiuen54tgregt154er1g5esg5ds61
          </p>
          <IconButton className="text-sm !text-inherit" onClick={copyLink}>
            <ContentCopyIcon className="!text-sm" />
          </IconButton>
          {copyStatus ? (
            <div className="absolute inset-x-0 bottom-[-30px] z-[1] mx-auto w-fit whitespace-nowrap rounded-md bg-black p-[6px] text-[10px] text-textMainDark">
              کپی شد
            </div>
          ) : null}
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
            {testArray?.map(item => (
              <LinkAccordion key={item} />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionComponent;
