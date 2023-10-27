import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';

const LogsComponent = memo(({ detail }) => (
   <div className="overflow-auto" dir="ltr">
      {detail?.pages?.map(item =>
         item?.data?.map(innerItem => (
            <div
               className={`border-b border-gray-300 dark:border-gray-600 ${innerItem?.has_error ? 'text-red-400' : ''}`}
               key={uuidv4()}
            >
               <div className="py-5">
                  <p>{innerItem?.type}</p>
                  <p className="text-[10px]">( {innerItem?.created_at} )</p>
               </div>
               <p className="text-sm leading-8">
                  {JSON.stringify(innerItem?.data, null, 5)}
                  {/* {Object?.keys(innerItem?.data)?.map(key => (
                     <div className="flex items-start gap-1 p-3" key={uuidv4()}>
                        {key !== 'Response' ? (
                           <>
                              <p className="whitespace-nowrap text-textGray">{key} :</p>
                              <pre className="whitespace-pre-wrap">
                                 {JSON.stringify(innerItem?.data?.[key], null, 2)}
                              </pre>
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
                                    <pre className="whitespace-pre-wrap">
                                       {JSON.stringify(innerItem?.data?.[key], null, 2)}
                                    </pre>
                                 </AccordionDetails>
                              </Accordion>
                           </div>
                        )}
                     </div>
                  ))} */}
               </p>
            </div>
         ))
      )}
   </div>
));

export default LogsComponent;
