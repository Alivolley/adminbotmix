function RobotsTable() {
  const arrayTest = [1, 2, 3, 4, 5, 6];

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
              <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
                14
              </td>
              <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
                IOTAUSDT
              </td>
              <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
                Sell
              </td>
              <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
                <div>
                  <p>6412587925</p>
                  <div className="my-2 h-[1px] w-full bg-gray-200 dark:bg-gray-600" />
                  <p>6412587925</p>
                </div>
              </td>
              <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
                33%
              </td>
              <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
                <div>
                  <p>6412587925</p>
                  <div className="my-2 h-[1px] w-full bg-gray-200 dark:bg-gray-600" />
                  <p>6412587925</p>
                </div>
              </td>
              <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
                <div>
                  <p>6412587925</p>
                  <div className="my-2 h-[1px] w-full bg-gray-200 dark:bg-gray-600" />
                  <p>6412587925</p>
                </div>
              </td>
              <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs dark:border-gray-600">
                2364
              </td>
              <td className="border-collapse whitespace-nowrap border-[1px] border-solid border-gray-200 px-3 py-5 text-xs text-success dark:border-gray-600">
                <p>0.469 USDT</p>
                <p>2.59%</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RobotsTable;
