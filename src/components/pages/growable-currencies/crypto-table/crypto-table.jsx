/* eslint-disable tailwindcss/no-custom-classname */
import { useEffect } from 'react';

function CryptoTable({ theme }) {
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
      <div className="tradingview-widget-container mt-14 border border-stone-300 dark:border-gray-700">
         <div className="tradingview-widget-container__widget" />
      </div>
   );
}

export default CryptoTable;
