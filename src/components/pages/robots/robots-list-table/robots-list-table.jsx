// MUI
import Button from '@mui/material/Button';

function RobotsListTable() {
  const arrayTest = [1, 2, 3, 4, 5, 6, 7];

  const isEven = num => num % 2 === 0;

  return (
    <div>
      <p className="mb-8">لیست ربات ها</p>
      <table className="w-full text-center">
        <thead>
          <tr>
            <th className="whitespace-nowrap px-3 text-[13px] text-textGray">
              نام
            </th>
            <th className="whitespace-nowrap px-3 text-[13px] text-textGray">
              عملیات
            </th>
          </tr>
        </thead>
        <tbody>
          {arrayTest.map((item, index) => (
            <tr
              key={item}
              className={`transition-all duration-200 ${
                isEven(index) ? 'bg-bgPrimary dark:bg-bgPrimaryDark' : ''
              }`}
            >
              <td className="whitespace-nowrap p-3 text-sm">تریدر بات</td>
              <td className="whitespace-nowrap p-3 text-sm">
                <Button
                  variant="outlined"
                  className="!font-vazir !text-sm"
                  size="small"
                >
                  جزئیات
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RobotsListTable;
