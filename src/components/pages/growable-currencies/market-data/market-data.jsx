/* eslint-disable tailwindcss/no-custom-classname */
import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

function MarketData({ theme }) {
   const onLoadScriptRef = useRef();

   useEffect(() => {
      function createWidget() {
         if (document.getElementById('tradingview_6cf3a') && 'TradingView' in window) {
            // eslint-disable-next-line no-new, new-cap
            new window.TradingView.widget({
               autosize: true,
               symbol: 'BINANCE:BTCUSDT',
               interval: 'D',
               timezone: 'Etc/UTC',
               theme,
               style: '1',
               locale: 'en',
               enable_publishing: false,
               ...(theme === 'dark' && {
                  backgroundColor: '#212836',
                  gridColor: '#212836',
               }),
               allow_symbol_change: true,
               container_id: 'tradingview_6cf3a',
            });
         }
      }

      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
         tvScriptLoadingPromise = new Promise(resolve => {
            const script = document.createElement('script');
            script.id = 'tradingview-widget-loading-script';
            script.src = 'https://s3.tradingview.com/tv.js';
            script.type = 'text/javascript';
            script.onload = resolve;

            document.head.appendChild(script);
         });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      // eslint-disable-next-line no-return-assign
      return () => (onLoadScriptRef.current = null);
   }, [theme]);

   return (
      <div className="tradingview-widget-container h-[400px] w-full customMd:h-full">
         <div id="tradingview_6cf3a" className="h-full w-full" />
      </div>
   );
}

export default MarketData;
