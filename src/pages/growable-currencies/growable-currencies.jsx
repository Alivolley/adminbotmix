import React, { useEffect } from 'react';

// MUI
import { CircularProgress, Grid } from '@mui/material';

// Redex
import { useSelector } from 'react-redux';

// Components
import MarketData from '../../components/pages/growable-currencies/market-data/market-data';

// Apis
import useGrowableCurrencies from '../../apis/growable-currencies/useGrowableCurrencies/useGrowableCurrencies';

function GrowableCurrencies() {
   const theme = useSelector(state => state.themeReducer);

   const { data: growableData, isLoading: growableIsLoading } = useGrowableCurrencies();

   // console.log(growableData);

   useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
         width: '100%',
         height: 700,
         defaultColumn: 'overview',
         screener_type: 'crypto_mkt',
         displayCurrency: 'USD',
         colorTheme: theme,
         locale: 'en',
         isTransparent: true,
      });

      const widgetContainer = document.getElementsByClassName('tradingview-widget-container__widget')[0];

      if (widgetContainer) {
         widgetContainer.appendChild(script);
      }

      return () => {
         if (widgetContainer) {
            widgetContainer.innerHTML = '';
         }
      };
   }, [theme]);

   return (
      <div className="mb-20 mt-16 min-h-screen">
         <Grid container columnSpacing={2}>
            <Grid item xs={12} md={8} order={{ xs: 2, md: 1 }}>
               <MarketData theme={theme} />
            </Grid>
            <Grid item xs={12} md={4} order={{ xs: 1, md: 2 }}>
               {growableIsLoading ? (
                  <div className="flex items-center justify-center">
                     <CircularProgress />
                  </div>
               ) : (
                  <div className="min-h-[300px]">
                     <div className="flex items-center border border-stone-300 dark:border-gray-700">
                        <p className="flex-1 p-2 text-center">میان مدت</p>
                        <p className="flex-1 border-r border-stone-300 p-2 text-center dark:border-gray-700">
                           بلند مدت
                        </p>
                     </div>
                     <div className="flex border border-stone-300 dark:border-gray-700">
                        <div className="flex flex-1 flex-col text-center">
                           {growableData?.high_risk?.map(item => (
                              <button key={item?.rank} type="button" className="space-y-1.5 p-2 text-sm">
                                 <p className="text-[#ff0000]">{item?.name}</p>
                                 <p className="text-xs text-textGray">( Rank : {item?.rank} )</p>
                              </button>
                           ))}

                           {growableData?.med_risk?.map(item => (
                              <button key={item?.rank} type="button" className="space-y-1.5 p-2 text-sm">
                                 <p className="text-[#ff6400]">{item?.name}</p>
                                 <p className="text-xs text-textGray">( Rank : {item?.rank} )</p>
                              </button>
                           ))}

                           {growableData?.low_risk?.map(item => (
                              <button key={item?.rank} type="button" className="space-y-1.5 p-2 text-sm">
                                 <p className="text-[#ffc800]">{item?.name}</p>
                                 <p className="text-xs text-textGray">( Rank : {item?.rank} )</p>
                              </button>
                           ))}
                        </div>
                        <div className="flex flex-1 flex-col border-r border-stone-300 text-center dark:border-gray-700">
                           {growableData?.high_risk_d?.map(item => (
                              <button key={item?.rank} type="button" className="space-y-1.5 p-2 text-sm">
                                 <p className="text-[#ff0000]">{item?.name}</p>
                                 <p className="text-xs text-textGray">( Rank : {item?.rank} )</p>
                              </button>
                           ))}

                           {growableData?.med_risk_d?.map(item => (
                              <button key={item?.rank} type="button" className="space-y-1.5 p-2 text-sm">
                                 <p className="text-[#ff6400]">{item?.name}</p>
                                 <p className="text-xs text-textGray">( Rank : {item?.rank} )</p>
                              </button>
                           ))}

                           {growableData?.low_risk_d?.map(item => (
                              <button key={item?.rank} type="button" className="space-y-1.5 p-2 text-sm">
                                 <p className="text-[#ffc800]">{item?.name}</p>
                                 <p className="text-xs text-textGray">( Rank : {item?.rank} )</p>
                              </button>
                           ))}
                        </div>
                     </div>
                  </div>
               )}
            </Grid>
            <Grid item xs={12} order={3}>
               <div className="tradingview-widget-container mt-14 border border-stone-300 dark:border-gray-700">
                  <div className="tradingview-widget-container__widget" />
               </div>
            </Grid>
         </Grid>
      </div>
   );
}

export default GrowableCurrencies;
