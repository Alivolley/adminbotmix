import { useState } from 'react';

// MUI
import { Accordion, AccordionDetails, AccordionSummary, Grid } from '@mui/material';

// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Assets
import { FaqsStyle } from './faqs.style';
import faqData from './faqData';

// Components

function Faqs() {
   const [chosenCategory, setChosenCategory] = useState('automatic_robot');

   return (
      <FaqsStyle>
         <p className="text-center font-lalezar text-3xl customMd:text-[50px]">سوالات متدوال</p>
         <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-9">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با سادگی نامفهوم استفاده از طراحان سادگی نامفهوم
            و سطرآنچنان که لازم است
         </p>

         <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
            <button
               type="button"
               className={`whitespace-nowrap rounded-lg px-4 py-[6px] text-sm backdrop:blur-sm
           dark:text-textMainDark ${
              chosenCategory === 'automatic_robot' ? 'bg-gradientBtnBlue text-white' : 'bg-gradientGray'
           }`}
               onClick={() => setChosenCategory('automatic_robot')}
            >
               ربات تریدر اتوماتیک
            </button>
            <button
               type="button"
               className={`whitespace-nowrap rounded-lg px-4 py-[6px] text-sm backdrop:blur-sm
           dark:text-textMainDark ${
              chosenCategory === 'robot_interface' ? 'bg-gradientBtnBlue text-white' : 'bg-gradientGray'
           }`}
               onClick={() => setChosenCategory('robot_interface')}
            >
               ربات واسط تریدینگ ویو به صرافی و تلگرام
            </button>
         </div>

         {chosenCategory === 'automatic_robot' && (
            <div className="mx-auto mt-7 max-w-[1150px] border-t pt-7 dark:border-gray-600">
               <Grid container rowSpacing={1.5} columnSpacing={4}>
                  <Grid item xs={12} md={6}>
                     <div className="space-y-3">
                        {faqData?.automaticRobot?.map(
                           (item, index) =>
                              index < 3 && (
                                 <div key={item?.id} className="bg-gradientAccordion dark:bg-gradientAccordionDark">
                                    <Accordion
                                       className="!bg-inherit"
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
                                          <p>{item?.title}</p>
                                       </AccordionSummary>
                                       <AccordionDetails>
                                          <p>{item?.description}</p>
                                       </AccordionDetails>
                                    </Accordion>
                                 </div>
                              )
                        )}
                     </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                     <div className="space-y-3">
                        {faqData?.automaticRobot?.map(
                           (item, index) =>
                              index >= 3 && (
                                 <div key={item?.id} className="bg-gradientAccordion dark:bg-gradientAccordionDark">
                                    <Accordion
                                       className="!bg-inherit"
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
                                          <p>{item?.title}</p>
                                       </AccordionSummary>
                                       <AccordionDetails>
                                          <p>{item?.description}</p>
                                       </AccordionDetails>
                                    </Accordion>
                                 </div>
                              )
                        )}
                     </div>
                  </Grid>
               </Grid>
            </div>
         )}

         {chosenCategory === 'robot_interface' && (
            <div className="mx-auto mt-7 max-w-[1150px] border-t pt-7 dark:border-gray-600">
               <Grid container rowSpacing={1.5} columnSpacing={4}>
                  <Grid item xs={12} md={6}>
                     <div className="space-y-3">
                        {faqData?.robotInterface?.map(
                           (item, index) =>
                              index < 3 && (
                                 <div key={item?.id} className="bg-gradientAccordion dark:bg-gradientAccordionDark">
                                    <Accordion
                                       className="!bg-inherit"
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
                                          <p>{item?.title}</p>
                                       </AccordionSummary>
                                       <AccordionDetails>
                                          <p>{item?.description}</p>
                                       </AccordionDetails>
                                    </Accordion>
                                 </div>
                              )
                        )}
                     </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                     <div className="space-y-3">
                        {faqData?.robotInterface?.map(
                           (item, index) =>
                              index >= 3 && (
                                 <div key={item?.id} className="bg-gradientAccordion dark:bg-gradientAccordionDark">
                                    <Accordion
                                       className="!bg-inherit"
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
                                          <p>{item?.title}</p>
                                       </AccordionSummary>
                                       <AccordionDetails>
                                          <p>{item?.description}</p>
                                       </AccordionDetails>
                                    </Accordion>
                                 </div>
                              )
                        )}
                     </div>
                  </Grid>
               </Grid>
            </div>
         )}
      </FaqsStyle>
   );
}

export default Faqs;
