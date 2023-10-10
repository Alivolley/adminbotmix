import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

function RobotsTable({ detail }) {
   console.log(detail);

   const isEven = num => num % 2 === 0;

   return (
      <div className="overflow-auto" dir="ltr">
         <table className="w-full border-collapse border-[1px] border-solid border-gray-200 text-center dark:border-gray-600">
            <thead>
               <tr>
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600">
                     Trade
                  </th>
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600">
                     Symbol
                  </th>
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600">
                     Side
                  </th>
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600">
                     Order id
                  </th>
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600">
                     Quantity
                  </th>
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600">
                     Time
                  </th>
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600">
                     Price
                  </th>
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600">
                     Contract
                  </th>
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600">
                     Profit
                  </th>
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600">
                     is closed manual
                  </th>
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600">
                     actions
                  </th>
               </tr>
            </thead>
            <tbody>
               {detail?.pages?.map(item =>
                  item?.data?.map((innerItem, index) => (
                     <tr
                        key={innerItem.id}
                        className={`transition-all duration-200 ${
                           isEven(index) ? 'bg-bgPrimary dark:bg-bgPrimaryDark' : ''
                        }`}
                     >
                        <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
                           {innerItem?.index}
                        </td>
                        <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
                           {innerItem?.symbol}
                        </td>
                        <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
                           {innerItem?.side}
                        </td>
                        <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
                           <div>
                              <p>{innerItem?.open_order_id}</p>
                              <div className="my-2 h-[1px] w-full bg-gray-200 dark:bg-gray-600" />
                              <p>{innerItem?.close_order_id}</p>
                           </div>
                        </td>
                        <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
                           {innerItem?.quantity}%
                        </td>
                        <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
                           <div>
                              <p>{innerItem?.entTime}</p>
                              <div className="my-2 h-[1px] w-full bg-gray-200 dark:bg-gray-600" />
                              <p>{innerItem?.exitTime}</p>
                           </div>
                        </td>
                        <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
                           <div>
                              <p>{innerItem?.entPrice}</p>
                              <div className="my-2 h-[1px] w-full bg-gray-200 dark:bg-gray-600" />
                              <p>{innerItem?.exitPrice}</p>
                           </div>
                        </td>
                        <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
                           {innerItem?.contract}
                        </td>
                        <td
                           className={`border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600 ${
                              innerItem?.profit < 0 ? 'text-error' : 'text-success'
                           }`}
                        >
                           <p>{innerItem?.profit} USDT</p>
                           <p>{innerItem?.profit_percent}%</p>
                        </td>

                        <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
                           {innerItem?.manual_closed ? <DoneIcon color="success" /> : <CloseIcon color="error" />}
                        </td>
                     </tr>
                  ))
               )}
            </tbody>
         </table>
      </div>
   );
}

export default RobotsTable;
