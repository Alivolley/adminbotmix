function EconomyData({ theme = 'dark' }) {
   return (
      <div className="grow">
         <iframe
            src="https://sslecal2.investing.com?ecoDayBackground=%23526a7d&innerBorderColor=%23e8e8e8&borderColor=%23d1d1d1&ecoDayFontColor=%23ffffff&columns=exc_flags,exc_importance,exc_actual,exc_forecast,exc_previous&category=_employment,_economicActivity,_inflation,_centralBanks,_balance&importance=2,3&features=timeselector,filters&countries=5&calType=week&timeZone=19&lang=1"
            title="economy data"
            width="100%"
            height="100%"
            // frameBorder="0"
            // allowtransparency="true"
            // marginWidth="0"
            // marginHeight="0"
         />
      </div>
   );
}

export default EconomyData;
// /* eslint-disable tailwindcss/no-custom-classname */
// import React, { useEffect, useRef } from 'react';

// function EconomyData({ theme = 'dark' }) {
//    const widgetRef = useRef();

//    useEffect(() => {
//       const script = document.createElement('script');
//       script.type = 'text/javascript';
//       script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
//       script.async = true;

//       script.innerHTML = JSON.stringify({
//          width: '100%',
//          height: '100%',
//          colorTheme: theme,
//          isTransparent: true,
//          locale: 'en',
//          importanceFilter: '0,1',
//          currencyFilter: 'USD',
//       });

//       const widgetContainer = widgetRef.current;

//       if (widgetContainer) {
//          widgetContainer.innerHTML = '';
//          widgetContainer.appendChild(script);
//       }

//       return () => {
//          if (widgetContainer && widgetContainer.contains(script)) {
//             widgetContainer.removeChild(script);
//          }
//       };
//    }, [theme]);

//    return (
//       <div className="tradingview-widget-container" ref={widgetRef}>
//          <div />
//       </div>
//    );
// }

// export default EconomyData;
