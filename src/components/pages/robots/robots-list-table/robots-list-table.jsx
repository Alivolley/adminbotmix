// MUI
import { LoadingButton } from '@mui/lab';

function RobotsListTable({ detail, setRobotId, robotId, defaultId }) {
   return (
      <div className="overflow-auto">
         <p className="mb-3">لیست ربات ها</p>
         <table className="w-full" dir="ltr">
            <thead>
               <tr>
                  <th className="whitespace-nowrap p-3 text-left text-[13px] text-textGray">Name</th>
                  <th className="whitespace-nowrap p-3 text-left text-[13px] text-textGray">Exchange</th>
                  <th className="whitespace-nowrap p-3 text-left text-[13px] text-textGray">Total profit</th>
                  <th className="whitespace-nowrap p-3 text-left text-[13px] text-textGray">Winrate</th>
                  <th className="whitespace-nowrap p-3 text-left text-[13px] text-textGray">عملیات</th>
               </tr>
            </thead>
            <tbody>
               {detail?.map(item => (
                  <tr
                     key={item?.id}
                     className={`transition-all duration-200 ${
                        robotId === item?.id || defaultId === item?.id ? 'bg-bgPrimary dark:bg-[#171c26]' : ''
                     }`}
                  >
                     <td className="whitespace-nowrap p-3 text-sm">
                        <div className="flex items-center gap-2">
                           <div className={`h-3 w-3 rounded-full ${item?.is_active ? 'bg-success' : 'bg-error'}`} />
                           <p>{item?.name}</p>
                        </div>
                     </td>
                     <td className="whitespace-nowrap p-3 text-sm">{item?.exchange}</td>
                     <td className="whitespace-nowrap p-3 text-sm">{item?.total_profit}</td>
                     <td className="whitespace-nowrap p-3 text-sm">{item?.winRate}</td>
                     <td className="whitespace-nowrap p-3 text-sm">
                        <LoadingButton
                           variant="outlined"
                           className="!font-vazir !text-sm"
                           size="small"
                           color="primaryBlue"
                           onClick={() => setRobotId(item?.id)}
                           disabled={robotId === item?.id || defaultId === item?.id}
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
