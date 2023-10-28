/* eslint-disable no-unsafe-optional-chaining */
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function CustomTooltip({ active, payload }) {
   if (active && payload && payload.length) {
      const data = payload[0].payload;

      return (
         <div className="rounded-2xl bg-[#000000be] px-5 py-3">
            {Object.keys(data)?.map(
               (key, index) =>
                  key !== 'label' && (
                     <p key={key} className="mt-2 text-white" style={{ color: payload?.[index - 1]?.stroke }}>
                        {`${key}: ${data[key]}`}
                     </p>
                  )
            )}
         </div>
      );
   }

   return null;
}

function RobotsChart({ detail }) {
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
            <AreaChart width="100%" height={448} data={detail || []}>
               <CartesianGrid strokeDasharray="0" stroke="#000" strokeOpacity={0.2} vertical={false} />
               <XAxis dataKey="name" tick={{ fontSize: '9px', fill: '#A0AEC0' }} axisLine={false} />
               <YAxis axisLine={false} tick={{ fontSize: '9px', fill: '#A0AEC0', dx: -20 }} tickLine={false} />
               <Tooltip content={<CustomTooltip />} />
               <defs>
                  <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                     <stop offset={off} stopColor="#22c55e" stopOpacity={0.9} />
                     <stop offset={off} stopColor="#dc2626" stopOpacity={0.6} />
                  </linearGradient>
               </defs>
               <Area type="monotone" dataKey="profit" stroke="#89929e" fill="url(#splitColor)" />
            </AreaChart>
         </ResponsiveContainer>
      </div>
   );
}

export default RobotsChart;
