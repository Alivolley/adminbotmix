import RobotsTableItem from '../robots-table-item/robots-table-item';

function RobotsTable({ detail, refetchData, hasMoreDetail }) {
   return (
      <div className="overflow-auto" dir="ltr">
         <table className="w-full border-collapse border-[1px] border-solid border-gray-200 text-center dark:border-gray-600">
            <thead>
               <tr>
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600">
                     Number
                  </th>
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600">
                     Symbol
                  </th>
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600">
                     Side
                  </th>
                  {hasMoreDetail && (
                     <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600">
                        Order id
                     </th>
                  )}
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600">
                     Quantity Percent
                  </th>
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600">
                     Time
                  </th>
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600">
                     Price
                  </th>
                  {hasMoreDetail && (
                     <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600">
                        Quantity
                     </th>
                  )}
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600">
                     Profit
                  </th>
                  {hasMoreDetail && (
                     <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600">
                        Manual Closing
                     </th>
                  )}
               </tr>
            </thead>
            <tbody>
               {detail?.map((innerItem, index) => (
                  <RobotsTableItem
                     key={innerItem?.id}
                     index={index}
                     detail={innerItem}
                     refetchData={refetchData}
                     hasMoreDetail={hasMoreDetail}
                  />
               ))}
            </tbody>
         </table>
      </div>
   );
}

export default RobotsTable;
