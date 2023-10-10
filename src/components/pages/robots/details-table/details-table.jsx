function DetailsTable({ detail }) {
   return (
      <div>
         <p dir="rtl" className="mb-8">
            اطلاعات
         </p>
         <div dir="ltr" className="rounded-2xl">
            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">name</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.name}</p>
            </div>
            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">all trade</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.all_trade}</p>
            </div>
            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">api key</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.api_key}</p>
            </div>
            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">api secret</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.api_secret}</p>
            </div>
            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">drawdown</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.drawdown}</p>
            </div>
            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">exchange</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.exchange}</p>
            </div>
            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">fund</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.fund}</p>
            </div>
            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">lose trade</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.lose_trade}</p>
            </div>
            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">open positions</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.openPositions}</p>
            </div>
            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">profit percent</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.profit_percent}</p>
            </div>
            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">run up</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.run_up}</p>
            </div>
            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">total profit</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.total_profit}</p>
            </div>
            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">win rate</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.winRate}</p>
            </div>
            <div className="flex justify-between gap-1 border-b-[1px] border-solid border-gray-200 p-3 dark:border-gray-600">
               <p className="text-sm text-textGray">win trade</p>
               <div className="h-5 w-[1px] bg-gray-200 dark:bg-gray-600" />
               <p className="text-sm">{detail?.win_trade}</p>
            </div>
         </div>
      </div>
   );
}

export default DetailsTable;
