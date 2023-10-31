/* eslint-disable no-unsafe-optional-chaining */
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function CustomTooltip({ active, payload, percent }) {
   if (active && payload && payload.length) {
      const data = payload[0].payload;

      return (
         <div className="flex flex-col gap-0.5 rounded-lg bg-[#000000be] p-2 text-sm">
            {Object.keys(data)?.map(
               key =>
                  key !== 'label' &&
                  (key === 'number' ? (
                     <p key={key} className="order-1 text-xs text-white" dir="ltr">
                        {data[key]}
                     </p>
                  ) : (
                     <p key={key} className="order-2 text-white" dir="ltr">
                        {`${key}: ${data[key]}${percent ? '%' : '$'}`}
                     </p>
                  ))
            )}
         </div>
      );
   }

   return null;
}

function RobotsChart({ detail, percent }) {
   const newDetail = detail.map((item, index) => ({ ...item, number: index + 1 }));

   const gradientOffset = () => {
      const dataMax = Math.max(...detail?.map(i => i.profit));
      const dataMin = Math.min(...detail?.map(i => i.profit));

      if (dataMax <= 0) {
         return 0;
      }
      if (dataMin >= 0) {
         return 1;
      }

      return dataMax / (dataMax - dataMin);
   };

   const off = gradientOffset();

   return (
      <div className="h-[448px]">
         <ResponsiveContainer width="100%" height="100%">
            <AreaChart width="100%" height={448} data={newDetail || []}>
               <CartesianGrid strokeDasharray="0" stroke="#000" strokeOpacity={0.2} vertical={false} />
               <XAxis dataKey="number" tick={{ fontSize: '9px', fill: '#A0AEC0' }} axisLine={false} />
               <YAxis axisLine={false} tick={{ fontSize: '9px', fill: '#A0AEC0', dx: -20 }} tickLine={false} />
               <Tooltip content={<CustomTooltip percent={percent} />} />
               <defs>
                  <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                     <stop offset={off} stopColor="#137A6C" stopOpacity={1} />
                     <stop offset={off} stopColor="#B73541" stopOpacity={1} />
                  </linearGradient>
               </defs>
               <Area type="monotone" dataKey="profit" stroke="#00000044" fill="url(#splitColor)" />
            </AreaChart>
         </ResponsiveContainer>
      </div>
   );
}

export default RobotsChart;
