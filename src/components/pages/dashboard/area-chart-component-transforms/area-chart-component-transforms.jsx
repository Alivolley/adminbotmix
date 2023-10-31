import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function CustomTooltip({ active, payload }) {
   if (active && payload && payload.length) {
      const data = payload[0].payload;

      return (
         <div className="flex flex-col gap-0.5 rounded-lg bg-[#000000be] p-2 text-sm">
            {Object.keys(data).map(
               (key, index) =>
                  key !== 'label' &&
                  (key === 'number' ? (
                     <p key={key} className="order-1 text-xs text-white" dir="ltr">
                        {data[key]}
                     </p>
                  ) : (
                     <p key={key} className="order-2" style={{ color: payload?.[index - 1]?.stroke }} dir="ltr">
                        {`${key}: ${data[key]}`}
                     </p>
                  ))
            )}
         </div>
      );
   }

   return null;
}

function AreaChartComponentTransform({ detail }) {
   const newDetail = detail.map((item, index) => ({ ...item, number: index + 1 }));

   return (
      <div className="h-[220px] w-full font-vazir">
         <ResponsiveContainer>
            <AreaChart data={newDetail || []}>
               <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="10%" stopColor="#0E65F6" stopOpacity={0.3} />
                     <stop offset="90%" stopColor="#0E65F6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="10%" stopColor="#03B2D9" stopOpacity={0.5} />
                     <stop offset="90%" stopColor="#03B2D9" stopOpacity={0} />
                  </linearGradient>
               </defs>
               <XAxis dataKey="label" tick={{ fontSize: '9px', fill: '#A0AEC0' }} axisLine={false} />
               <YAxis axisLine={false} tick={{ fontSize: '9px', fill: '#A0AEC0', dx: -20 }} tickLine={false} />
               <CartesianGrid strokeDasharray="5" vertical={false} strokeOpacity={0.2} />
               <Tooltip content={<CustomTooltip />} />
               <Area
                  type="monotone"
                  dataKey="alert"
                  stroke="#0E65F6"
                  strokeWidth="2px"
                  fillOpacity={1}
                  fill="url(#colorUv)"
               />
               <Area
                  type="monotone"
                  dataKey="order"
                  stroke="#03B2D9"
                  strokeWidth="2px"
                  fillOpacity={1}
                  fill="url(#colorPv)"
               />
            </AreaChart>
         </ResponsiveContainer>
      </div>
   );
}

export default AreaChartComponentTransform;
