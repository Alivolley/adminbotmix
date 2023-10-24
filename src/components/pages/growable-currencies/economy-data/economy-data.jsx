import React, { useEffect, useRef } from 'react';

function EconomyData({ theme = 'dark' }) {
   const widgetRef = useRef();

   useEffect(() => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
      script.async = true;

      script.innerHTML = JSON.stringify({
         width: '100%',
         height: '100%',
         colorTheme: theme,
         isTransparent: true,
         locale: 'en',
         importanceFilter: '0,1',
         currencyFilter: 'USD',
      });

      const widgetContainer = widgetRef.current;

      if (widgetContainer) {
         widgetContainer.innerHTML = '';
         widgetContainer.appendChild(script);
      }

      return () => {
         if (widgetContainer && widgetContainer.contains(script)) {
            widgetContainer.removeChild(script);
         }
      };
   }, [theme]);

   return (
      <div className="tradingview-widget-container" ref={widgetRef}>
         <div />
      </div>
   );
}

export default EconomyData;
