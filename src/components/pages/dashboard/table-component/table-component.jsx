function TableComponent() {
  const arrayTest = [1, 2, 3, 4, 5, 6];

  return (
    <div className="overflow-auto">
      <table className="w-full text-right">
        <thead>
          <tr>
            <th className="whitespace-nowrap px-3 text-[13px] text-textGray">
              نام
            </th>
            <th className="whitespace-nowrap px-3 text-[13px] text-textGray">
              عنوان
            </th>
            <th className="whitespace-nowrap px-3 text-[13px] text-textGray">
              شغل
            </th>
            <th className="whitespace-nowrap px-3 text-[13px] text-textGray">
              رشته
            </th>
            <th className="whitespace-nowrap px-3 text-[13px] text-textGray">
              سن
            </th>
            <th className="whitespace-nowrap px-3 text-[13px] text-textGray">
              وزن
            </th>
            <th className="whitespace-nowrap px-3 text-[13px] text-textGray">
              قد
            </th>
            <th className="whitespace-nowrap px-3 text-[13px] text-textGray">
              امتیاز
            </th>
          </tr>
        </thead>
        <tbody>
          {arrayTest.map(item => (
            <tr key={item}>
              <td className="whitespace-nowrap px-3 py-5 text-sm">
                علی ازقندی
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-sm">فرانت اند</td>
              <td className="whitespace-nowrap px-3 py-5 text-sm">
                برنامه نویس
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-sm">والیبال</td>
              <td className="whitespace-nowrap px-3 py-5 text-sm">25</td>
              <td className="whitespace-nowrap px-3 py-5 text-sm">
                ۹۰ کیلوگرم
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-sm">
                ۱۹۲ سانتی متر
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-sm">خیلی خوب</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
