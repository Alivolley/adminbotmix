function LogsComponent() {
  const arrayTest = [1, 2, 3, 4, 5, 6];

  return (
    <div className="overflow-auto">
      {arrayTest.map(item => (
        <div className="flex items-center text-sm" key={item}>
          <div className="flex grow items-center gap-1 whitespace-nowrap p-3">
            <p className="text-textGray">نام :</p>
            <p>علی</p>
          </div>
          <div className="flex grow items-center gap-1 whitespace-nowrap p-3">
            <p className="text-textGray">عنوان :</p>
            <p>فرانت اند</p>
          </div>
          <div className="flex grow items-center gap-1 whitespace-nowrap p-3">
            <p className="text-textGray">شغل :</p>
            <p>برنامه نویس</p>
          </div>
          <div className="flex grow items-center gap-1 whitespace-nowrap p-3">
            <p className="text-textGray">رشته :</p>
            <p>والیبال</p>
          </div>
          <div className="flex grow items-center gap-1 whitespace-nowrap p-3">
            <p className="text-textGray">سن :</p>
            <p>۲۵</p>
          </div>
          <div className="flex grow items-center gap-1 whitespace-nowrap p-3">
            <p className="text-textGray">وزن :</p>
            <p>۹۰ کیلوگرم</p>
          </div>
          <div className="flex grow items-center gap-1 whitespace-nowrap p-3">
            <p className="text-textGray">قد :</p>
            <p>192</p>
          </div>
          <div className="flex grow items-center gap-1 whitespace-nowrap p-3">
            <p className="text-textGray">امتیاز :</p>
            <p>عالی</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LogsComponent;
