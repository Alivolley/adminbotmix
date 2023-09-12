/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from 'react';

// MUI
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AlertTitle,
  Button,
  ButtonGroup,
  Grid,
  Tooltip,
} from '@mui/material';

// Icons
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CloseIcon from '@mui/icons-material/Close';
import CachedIcon from '@mui/icons-material/Cached';

// Components
import CardWrapper from '../../components/templates/card-wrapper/card-wrapper';
import GroupCard from '../../components/pages/connecting/group-card/group-card';
import AddGroupForm from '../../components/pages/connecting/add-group-form/add-group-form';
import RtlProvider from '../../components/layout/rtlProvider/rtlProvider';

function Connecting() {
  const [addGroupExpanded, setAddGroupExpanded] = useState(false);
  const [copyStatus, setCopyStatus] = useState(false);

  const linkRef = useRef();

  const testArray = [1, 2, 3];

  const copyLink = () => {
    navigator.clipboard.writeText(linkRef.current.innerText).then(() => {
      setCopyStatus(true);

      setTimeout(() => {
        setCopyStatus(false);
      }, 1500);
    });
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7.5} order={{ xs: 2, md: 1 }}>
          <CardWrapper>
            <div className="space-y-3">
              {testArray?.map(item => (
                <GroupCard key={item} />
              ))}
            </div>

            <div>
              <Accordion
                className="!bg-inherit !bg-none !text-inherit"
                sx={{
                  boxShadow: 'none',
                  '&.MuiAccordion-root:before': {
                    display: 'none',
                  },
                }}
                expanded={addGroupExpanded}
              >
                <AccordionSummary dir="ltr">
                  <Button
                    className="w-full !font-vazir"
                    variant="contained"
                    size="large"
                    onClick={() => setAddGroupExpanded(prev => !prev)}
                    endIcon={addGroupExpanded && <CloseIcon />}
                  >
                    اضافه کردن گروه
                  </Button>
                </AccordionSummary>
                <AccordionDetails>
                  <AddGroupForm />
                </AccordionDetails>
              </Accordion>
            </div>
          </CardWrapper>
        </Grid>
        <Grid item xs={12} md={4.5} order={{ xs: 1, md: 2 }}>
          <CardWrapper>
            <div>
              <p className="mb-4 text-sm">لینک دسترسی</p>
              <div
                dir="ltr"
                className="relative mr-auto mt-2 flex items-center rounded-md border-[1px] border-solid border-textGray text-[10px] customSm:text-xs"
              >
                <p
                  className="grow overflow-hidden border-r-[1px] border-solid border-textGray bg-bgSecondary px-2 py-[6px] dark:bg-bgSecondaryDark"
                  ref={linkRef}
                >
                  jsfiuen54tgregt154er1g5esg5ds61
                </p>

                <ButtonGroup variant="text" size="small">
                  <Tooltip title="کپی">
                    <Button
                      className="text-sm !text-inherit"
                      onClick={copyLink}
                    >
                      <ContentCopyIcon className="!text-sm" />
                    </Button>
                  </Tooltip>
                  <Tooltip title="تعویض لینک">
                    <Button
                      className="text-sm !text-inherit"
                      onClick={() => {}}
                    >
                      <CachedIcon className="!text-base" />
                    </Button>
                  </Tooltip>
                </ButtonGroup>
                {copyStatus ? (
                  <div className="absolute inset-x-0 bottom-[-30px] z-[1] mx-auto w-fit whitespace-nowrap rounded-md bg-black p-[6px] text-[10px] text-textMainDark">
                    کپی شد
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-6">
              <RtlProvider>
                <Alert severity="info" className="!font-vazir">
                  <AlertTitle className="!font-vazir">راهنما</AlertTitle>
                  <div className="mt-8 space-y-4 leading-[24px]">
                    <p>
                      به دو روش میتوانید در تریدینگ ویو یا سایر پلتفرم ها
                      (postman , insomnia ,...) الرت های خود را ارسال کنید :
                    </p>
                    <p>
                      ۱. به صورت متنی ، برای مثال :
                      <br />
                      "your message"
                    </p>
                    <p>
                      ۲. به صورت json ، برای مثال :
                      <br />
                      {'{ "text" : "your message" }'}
                    </p>
                  </div>
                </Alert>

                <Alert severity="warning" className="mt-3 !font-vazir">
                  <AlertTitle className="!font-vazir">هشدار</AlertTitle>
                  <div className="space-y-6 leading-[24px]">
                    <p>
                      برای فرستادن پیام در تلگرام, باید ربات BotmixBot را به
                      گروه یا گروه های مدنظر اضافه کرده و دسترسی ارسال پیام به
                      آن بدهید.
                    </p>
                    <p>
                      دقت کنید که هر کانال تلگرام فقط میتواند یک بات بعنوان
                      ادمین و ارسال کننده داشته باشد, پس اگر میخواهید الرت ها را
                      در کانال خود ارسال کنید نباید ربات دیگری در آن ادمین باشد.
                    </p>
                  </div>
                </Alert>
              </RtlProvider>
            </div>
          </CardWrapper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Connecting;
