import RobotsTableItem from '../robots-table-item/robots-table-item';

function RobotsTable({ detail, refetchData, hasMoreDetail }) {
   return (
      <div className="overflow-auto" dir="ltr">
         <table className="w-full border-collapse border-[1px] border-solid border-gray-200 text-center dark:border-gray-600">
            <thead>
               <tr>
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600 xl:whitespace-normal">
                     Number
                  </th>
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600 xl:whitespace-normal">
                     Symbol
                  </th>
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600 xl:whitespace-normal">
                     Side
                  </th>
                  {hasMoreDetail && (
                     <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600 xl:whitespace-normal">
                        Order id
                     </th>
                  )}
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600 xl:whitespace-normal">
                     Time
                  </th>
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600 xl:whitespace-normal">
                     Price
                  </th>
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600 xl:whitespace-normal">
                     Quantity Percent
                  </th>
                  {hasMoreDetail && (
                     <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600 xl:whitespace-normal">
                        Quantity
                     </th>
                  )}
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600 xl:whitespace-normal">
                     Leverage
                  </th>
                  <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600 xl:whitespace-normal">
                     Profit
                  </th>
                  {hasMoreDetail && (
                     <th className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 p-3 text-[13px] text-textGray dark:border-gray-600 xl:whitespace-normal">
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
