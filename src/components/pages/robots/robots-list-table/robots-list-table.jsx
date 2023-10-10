// MUI
import { LoadingButton } from '@mui/lab';

function RobotsListTable({ detail, setRobotId }) {
   const isEven = num => num % 2 === 0;

   return (
      <div>
         <p className="mb-8">لیست ربات ها</p>
         <table className="w-full text-center">
            <thead>
               <tr>
                  <th className="whitespace-nowrap p-3 text-[13px] text-textGray">نام</th>
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
