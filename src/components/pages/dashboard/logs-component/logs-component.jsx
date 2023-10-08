import { v4 as uuidv4 } from 'uuid';

function LogsComponent({ detail }) {
   return (
      <div className="overflow-auto" dir="ltr">
         {detail?.pages?.map(item =>
            item?.map(innerItem => (
               <div
                  className={`border-b border-gray-300 dark:border-gray-600 ${
                     innerItem?.has_error ? 'text-red-400' : ''
                  }`}
                  key={uuidv4()}
               >
                  <div className="py-5">
                     <p>{innerItem?.type}</p>
                     <p className="text-[10px]">( {innerItem?.created_at} )</p>
                  </div>
                  <div className="flex flex-wrap items-start text-sm">
                     {Object.keys(innerItem?.data).map(key => (
                        <div className="flex items-start gap-1 p-3" key={uuidv4()}>
                           <p className="whitespace-nowrap text-textGray">{key} :</p>
                           <p>{innerItem?.data[key]}</p>
                        </div>
                     ))}
                  </div>
               </div>
            ))
         )}
      </div>
   );
}

export default LogsComponent;
