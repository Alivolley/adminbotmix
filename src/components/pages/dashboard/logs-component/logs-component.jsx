import { v4 as uuidv4 } from 'uuid';

// MUI
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function LogsComponent({ detail }) {
   return (
      <div className="overflow-auto" dir="ltr">
         {detail?.pages?.map(item =>
            item?.data?.map(innerItem => (
               <div
                  className={`border-b border-gray-300 dark:border-gray-600 ${
                     innerItem?.has_error ? 'text-red-400' : ''
                  }`}
                  key={uuidv4()}
               >
                  <div className="py-5">
                     <p>{innerItem?.type}</p>
                     <p className="text-[10px]">( {innerItem?.created_at} )</p>
                  </div>
                  <div className="flex flex-wrap items-start text-sm">
                     {Object?.keys(innerItem?.data)?.map(key => (
                        <div className="flex items-start gap-1 p-3" key={uuidv4()}>
                           {key !== 'response' ? (
                              <>
                                 <p className="whitespace-nowrap text-textGray">{key} :</p>
                                 <p>{JSON.stringify(innerItem?.data?.[key])}</p>
                              </>
                           ) : (
                              <div>
                                 <Accordion
                                    className="!bg-inherit !bg-none !text-inherit"
                                    sx={{
                                       boxShadow: '0px 5px 6px 1px rgba(0, 0, 0, 0.04)',
                                       '&.MuiAccordion-root:before': {
                                          display: 'none',
                                       },
                                    }}
                                 >
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />} />
                                    <AccordionDetails>
                                       <p className="whitespace-nowrap text-textGray">{key} :</p>
                                       <p>{JSON.stringify(innerItem?.data?.[key])}</p>
                                    </AccordionDetails>
                                 </Accordion>
                              </div>
                           )}
                        </div>
                     ))}
                  </div>
               </div>
            ))
         )}
      </div>
   );
}

export default LogsComponent;
