import RobotsTableItem from '../robots-table-item/robots-table-item';

function RobotsTable({ detail, refetchData }) {
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
               {detail?.map((innerItem, index) => (
                  <RobotsTableItem key={innerItem?.id} index={index} detail={innerItem} refetchData={refetchData} />
               ))}
            </tbody>
         </table>
      </div>
   );
}

export default RobotsTable;
