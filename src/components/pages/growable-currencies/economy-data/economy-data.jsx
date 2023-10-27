function EconomyData() {
   return (
      <div className="grow">
         <iframe
            src="https://sslecal2.investing.com?ecoDayBackground=%23526a7d&innerBorderColor=%23e8e8e8&borderColor=%23d1d1d1&ecoDayFontColor=%23ffffff&columns=exc_flags,exc_importance,exc_actual,exc_forecast,exc_previous&category=_employment,_economicActivity,_inflation,_centralBanks,_balance&importance=2,3&features=timeselector,filters&countries=5&calType=week&timeZone=19&lang=1"
            title="economy data"
            width="100%"
            height="100%"
         />
      </div>
   );
}

export default EconomyData;
