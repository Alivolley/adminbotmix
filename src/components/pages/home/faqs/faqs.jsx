import { useState } from 'react';

// MUI
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from '@mui/material';

// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Assets
import { FaqsStyle } from './faqs.style';

// Components

function Faqs() {
  const [chosenCategory, setChosenCategory] = useState('robot_interface');

  return (
    <FaqsStyle>
      <p className="text-center font-lalezar text-3xl customMd:text-[60px]">
        سوالات متدوال
      </p>
      <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-9">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با سادگی
        نامفهوم استفاده از طراحان سادگی نامفهوم و سطرآنچنان که لازم است
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
        <button
          type="button"
          className={`whitespace-nowrap rounded-lg bg-[#ffffff1a] px-4 py-[6px] text-sm backdrop:blur-sm dark:text-textMainDark ${
            chosenCategory === 'robot_interface'
              ? 'bg-gradientBtnPurple text-white'
              : ''
          }`}
          onClick={() => setChosenCategory('robot_interface')}
        >
          ربات واسط
        </button>
        <button
          type="button"
          className={`whitespace-nowrap rounded-lg bg-[#ffffff1a] px-4 py-[6px] text-sm backdrop:blur-sm dark:text-textMainDark ${
            chosenCategory === 'connect_to_telegram'
              ? 'bg-gradientBtnPurple text-white'
              : ''
          }`}
          onClick={() => setChosenCategory('connect_to_telegram')}
        >
          اتصال به تلگرام
        </button>
        <button
          type="button"
          className={`whitespace-nowrap rounded-lg bg-[#ffffff1a] px-4 py-[6px] text-sm backdrop:blur-sm dark:text-textMainDark ${
            chosenCategory === 'trader_bot'
              ? 'bg-gradientBtnPurple text-white'
              : ''
          }`}
          onClick={() => setChosenCategory('trader_bot')}
        >
          ربات تریدر اتوماتیک
        </button>
      </div>

      <div className="mx-auto mt-7 max-w-[1150px] border-t pt-7 dark:border-stone-600">
        <Grid container rowSpacing={1.5} columnSpacing={4}>
          <Grid item xs={12} md={6}>
            <div className="space-y-3">
              <Accordion
                className="!bg-[#ffffff1a] bg-none"
                sx={{
                  boxShadow: 'none',
                  '&.MuiAccordion-root:before': {
                    display: 'none',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p>سوال ۱</p>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با سادگی نامفهوم استفاده از طراحان گرافیک است در ستون سادگی
                    نامفهوم و سطرآنچنان که لازم است
                  </p>
                </AccordionDetails>
              </Accordion>

              <Accordion
                className="!bg-[#ffffff1a] bg-none"
                sx={{
                  boxShadow: 'none',
                  '&.MuiAccordion-root:before': {
                    display: 'none',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p>سوال ۲</p>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با سادگی نامفهوم استفاده از طراحان گرافیک است در ستون سادگی
                    نامفهوم و سطرآنچنان که لازم است
                  </p>
                </AccordionDetails>
              </Accordion>

              <Accordion
                className="!bg-[#ffffff1a] bg-none"
                sx={{
                  boxShadow: 'none',
                  '&.MuiAccordion-root:before': {
                    display: 'none',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p>سوال ۳</p>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با سادگی نامفهوم استفاده از طراحان گرافیک است در ستون سادگی
                    نامفهوم و سطرآنچنان که لازم است
                  </p>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="space-y-3">
              <Accordion
                className="!bg-[#ffffff1a] bg-none"
                sx={{
                  boxShadow: 'none',
                  '&.MuiAccordion-root:before': {
                    display: 'none',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p>سوال ۱</p>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با سادگی نامفهوم استفاده از طراحان گرافیک است در ستون سادگی
                    نامفهوم و سطرآنچنان که لازم است
                  </p>
                </AccordionDetails>
              </Accordion>

              <Accordion
                className="!bg-[#ffffff1a] bg-none"
                sx={{
                  boxShadow: 'none',
                  '&.MuiAccordion-root:before': {
                    display: 'none',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p>سوال ۲</p>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با سادگی نامفهوم استفاده از طراحان گرافیک است در ستون سادگی
                    نامفهوم و سطرآنچنان که لازم است
                  </p>
                </AccordionDetails>
              </Accordion>

              <Accordion
                className="!bg-[#ffffff1a] bg-none"
                sx={{
                  boxShadow: 'none',
                  '&.MuiAccordion-root:before': {
                    display: 'none',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p>سوال ۳</p>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با سادگی نامفهوم استفاده از طراحان گرافیک است در ستون سادگی
                    نامفهوم و سطرآنچنان که لازم است
                  </p>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
        </Grid>
      </div>
    </FaqsStyle>
  );
}

export default Faqs;
