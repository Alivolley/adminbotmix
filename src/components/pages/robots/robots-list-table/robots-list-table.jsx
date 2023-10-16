// MUI
import { LoadingButton } from '@mui/lab';

function RobotsListTable({ detail, setRobotId }) {
   const isEven = num => num % 2 === 0;

   return (
      <div className="overflow-auto">
         <p className="mb-3">لیست ربات ها</p>
         <table className="w-full text-center">
            <thead>
               <tr>
                  <th className="whitespace-nowrap p-3 text-[13px] text-textGray">Name</th>
                  <th className="whitespace-nowrap p-3 text-[13px] text-textGray">Total profit</th>
                  <th className="whitespace-nowrap p-3 text-[13px] text-textGray">Total profit percent</th>
                  <th className="whitespace-nowrap p-3 text-[13px] text-textGray">Winrate</th>
                  <th className="whitespace-nowrap p-3 text-[13px] text-textGray">عملیات</th>
               </tr>
            </thead>
            <tbody>
               {detail?.map((item, index) => (
                  <tr
                     key={item.id}
                     className={`transition-all duration-200 ${
                        isEven(index) ? 'bg-bgPrimary dark:bg-bgPrimaryDark' : ''
                     }`}
                  >
                     <td className="whitespace-nowrap p-3 text-sm">{item?.name}</td>
                     <td className="whitespace-nowrap p-3 text-sm">{item?.total_profit}</td>
                     <td className="whitespace-nowrap p-3 text-sm">{item?.profit_percent}</td>
                     <td className="whitespace-nowrap p-3 text-sm">{item?.winRate}</td>
                     <td className="whitespace-nowrap p-3 text-sm">
                        <LoadingButton
                           variant="outlined"
                           className="!font-vazir !text-sm"
                           size="small"
                           color="primaryBlue"
                           onClick={() => setRobotId(item.id)}
                        >
                           جزئیات
                        </LoadingButton>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}

export default RobotsListTable;
