import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function CustomTooltip({ active, payload }) {
   if (active && payload && payload.length) {
      const data = payload[0].payload;

      return (
         <div className="rounded-2xl bg-[#000000be] px-5 py-3">
            {Object.keys(data).map(
               (key, idx) =>
                  key !== 'label' &&
                  key !== 'id' && (
                     <p key={key} className="mt-2" style={{ color: payload?.[idx - 1]?.stroke }} dir="ltr">
                        {`${data?.id} - ${key}: ${data[key]}`}
                     </p>
                  )
            )}
         </div>
      );
   }

   return null;
}

function AreaChartComponentTransform({ detail }) {
   const newDetail = detail.map((item, index) => ({ ...item, id: index + 1 }));

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
