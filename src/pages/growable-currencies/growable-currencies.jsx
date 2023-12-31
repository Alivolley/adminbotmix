import React, { useState } from 'react';

// MUI
import { CircularProgress, Grid, Tooltip } from '@mui/material';

// Icons
import InfoIcon from '@mui/icons-material/Info';

// Redux
import { useSelector } from 'react-redux';

// style
import { GrowableCurrenciesStyle } from './growable-currencies.style';

// Components
import MarketData from '../../components/pages/growable-currencies/market-data/market-data';
import EconomyData from '../../components/pages/growable-currencies/economy-data/economy-data';
import CryptoTable from '../../components/pages/growable-currencies/crypto-table/crypto-table';

// Apis
import useGrowableCurrencies from '../../apis/growable-currencies/useGrowableCurrencies/useGrowableCurrencies';

function GrowableCurrencies() {
   const theme = useSelector(state => state.themeReducer);
   const [chosenCurrency, setChosenCurrency] = useState('BINANCE:BTCUSDT');

   const { data: growableData, isLoading: growableIsLoading } = useGrowableCurrencies();

   return (
      <GrowableCurrenciesStyle className="mb-20 mt-16 min-h-screen">
         <Grid container spacing={2}>
            <Grid item xs={12} md={8} order={{ xs: 2, md: 1 }}>
               <MarketData theme={theme} chosenCurrency={chosenCurrency} />
            </Grid>
            <Grid item xs={12} md={4} order={{ xs: 1, md: 2 }}>
               <div className="flex h-[500px] flex-col gap-5 customMd:h-full">
                  <div className="flex w-full flex-1 flex-col rounded-sm border border-stone-300 dark:border-gray-700">
                     <div className="flex items-center border-b border-stone-300 bg-bgPrimary dark:border-gray-700 dark:bg-bgPrimaryDark">
                        <p className="flex-1 p-2 text-center text-sm">داده های اقتصادی</p>
                     </div>
                     <EconomyData theme={theme} />
                  </div>
                  {growableIsLoading ? (
                     <div className="flex items-center justify-center">
                        <CircularProgress />
                     </div>
                  ) : (
                     <>
                        <div
                           className="relative flex flex-1 flex-col overflow-auto rounded-sm border border-stone-300 dark:border-gray-700"
                           id="custom-scroll"
                        >
                           <div className="flex items-center border-b border-stone-300 bg-bgPrimary dark:border-gray-700 dark:bg-bgPrimaryDark">
                              <p className="flex-1 p-2 text-center text-sm">
                                 <Tooltip
                                    title={
                                       <ul className="flex flex-col gap-3 p-2 pr-4">
                                          <li className="list-disc text-textGray">
                                             ارز های مستعد رشد ارزهای پیشنهادی باتمیکس هستند که احتمال پامپ شدن بالایی
                                             دارند.
                                          </li>
                                          <li className="list-disc text-textGray">
                                             شما عزیزان با بررسی وضعیت تکنیکالی این ارزها میتونید با مدیریت سرمایه بین
                                             سه یا چهار تا از این ارزها برای معاملات هفتگیتون فکر کنید.
                                          </li>
                                          <li className="list-disc text-textGray">
                                             بهتره دارایی هاتون رو بین ریسک های متفاوت تقسیم کنید و درصد بیشتر مبلغ
                                             سرمایه گذاری رو ، روی ارز های کم ریسک بزارید.
                                          </li>
                                       </ul>
                                    }
                                    arrow
                                    placement="top"
                                    classes={{
                                       tooltip: '!text-[13px] !bg-[#000000]',
                                       arrow: '!text-[#000000]',
                                    }}
                                 >
                                    <InfoIcon fontSize="small" className="ml-1.5" color="info" />
                                 </Tooltip>
                                 ارز های مستعد رشد به تشخیص باتمیکس
                              </p>
                           </div>
                           <div className="sticky top-0 flex items-center border-b border-stone-300 bg-bgPrimary dark:border-gray-700 dark:bg-bgPrimaryDark">
                              <p className="flex-1 p-2 text-center text-sm">میان مدت</p>
                              <p className="flex-1 border-r border-stone-300 p-2 text-center text-sm dark:border-gray-700">
                                 کوتاه مدت
                              </p>
                           </div>
                           <div className="flex grow">
                              <div className="flex flex-1 flex-col text-center">
                                 {growableData?.high_risk?.map(item => (
                                    <button
                                       onClick={() => setChosenCurrency(item?.symbol)}
                                       key={item?.rank}
                                       type="button"
                                       className={`space-y-1.5 p-2 text-sm ${
                                          chosenCurrency === item?.symbol ? 'bg-[#8886865b] dark:bg-[#171c26]' : ''
                                       }`}
                                    >
                                       <p className="text-[#ff0000]">{item?.name}</p>
                                       <p className="text-xs text-textGray">( Rank : {item?.rank} )</p>
                                    </button>
                                 ))}

                                 {growableData?.med_risk?.map(item => (
                                    <button
                                       onClick={() => setChosenCurrency(item?.symbol)}
                                       key={item?.rank}
                                       type="button"
                                       className={`space-y-1.5 p-2 text-sm ${
                                          chosenCurrency === item?.symbol ? 'bg-[#8886865b] dark:bg-[#171c26]' : ''
                                       }`}
                                    >
                                       <p className="text-[#ff6400]">{item?.name}</p>
                                       <p className="text-xs text-textGray">( Rank : {item?.rank} )</p>
                                    </button>
                                 ))}

                                 {growableData?.low_risk?.map(item => (
                                    <button
                                       onClick={() => setChosenCurrency(item?.symbol)}
                                       key={item?.rank}
                                       type="button"
                                       className={`space-y-1.5 p-2 text-sm ${
                                          chosenCurrency === item?.symbol ? 'bg-[#8886865b] dark:bg-[#171c26]' : ''
                                       }`}
                                    >
                                       <p className="text-[#ffc800]">{item?.name}</p>
                                       <p className="text-xs text-textGray">( Rank : {item?.rank} )</p>
                                    </button>
                                 ))}
                              </div>
                              <div className="border-r border-stone-300 text-center dark:border-gray-700" />
                              <div className="flex flex-1 flex-col text-center">
                                 {growableData?.high_risk_d?.map(item => (
                                    <button
                                       onClick={() => setChosenCurrency(item?.symbol)}
                                       key={item?.rank}
                                       type="button"
                                       className={`space-y-1.5 p-2 text-sm ${
                                          chosenCurrency === item?.symbol ? 'bg-[#8886865b] dark:bg-[#171c26]' : ''
                                       }`}
                                    >
                                       <p className="text-[#ff0000]">{item?.name}</p>
                                       <p className="text-xs text-textGray">( Rank : {item?.rank} )</p>
                                    </button>
                                 ))}

                                 {growableData?.med_risk_d?.map(item => (
                                    <button
                                       onClick={() => setChosenCurrency(item?.symbol)}
                                       key={item?.rank}
                                       type="button"
                                       className={`space-y-1.5 p-2 text-sm ${
                                          chosenCurrency === item?.symbol ? 'bg-[#8886865b] dark:bg-[#171c26]' : ''
                                       }`}
                                    >
                                       <p className="text-[#ff6400]">{item?.name}</p>
                                       <p className="text-xs text-textGray">( Rank : {item?.rank} )</p>
                                    </button>
                                 ))}

                                 {growableData?.low_risk_d?.map(item => (
                                    <button
                                       onClick={() => setChosenCurrency(item?.symbol)}
                                       key={item?.rank}
                                       type="button"
                                       className={`space-y-1.5 p-2 text-sm ${
                                          chosenCurrency === item?.symbol ? 'bg-[#8886865b] dark:bg-[#171c26]' : ''
                                       }`}
                                    >
                                       <p className="text-[#ffc800]">{item?.name}</p>
                                       <p className="text-xs text-textGray">( Rank : {item?.rank} )</p>
                                    </button>
                                 ))}
                              </div>
                           </div>
                        </div>
                        <p className="-mt-2 text-center text-xs text-textGray">
                           تاریخ آخرین آپدیت : {growableData?.last_update}
                        </p>
                     </>
                  )}
               </div>
            </Grid>
            <Grid item xs={12} order={3}>
               <CryptoTable theme={theme} />
            </Grid>
         </Grid>
      </GrowableCurrenciesStyle>
   );
}

export default GrowableCurrencies;
