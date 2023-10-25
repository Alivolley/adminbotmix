/* eslint-disable tailwindcss/no-custom-classname */
import React, { useEffect, useRef } from 'react';

function MarketData({ theme, chosenCurrency }) {
   const containerRef = useRef();

   useEffect(() => {
      function createWidget() {
         if (window.TradingView && containerRef.current) {
            // eslint-disable-next-line no-new, new-cap
            new window.TradingView.widget({
               autosize: true,
               symbol: chosenCurrency,
               interval: '60',
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
               container_id: containerRef.current.id,
               withdateranges: true,
               hide_side_toolbar: false,
            });
         }
      }

      createWidget();
   }, [theme, chosenCurrency]);

   return (
      <div className="tradingview-widget-container h-[300px] w-full customMd:aspect-[16/10] customMd:h-auto">
         <div id="tradingview_6cf3a" ref={containerRef} className="h-full w-full" />
      </div>
   );
}

export default MarketData;
