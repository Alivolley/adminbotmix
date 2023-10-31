import { memo } from 'react';
import { AreaChart, Area, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, XAxis } from 'recharts';

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
                        {`${key}: ${data[key]} $`}
                     </p>
                  ))
            )}
         </div>
      );
   }

   return null;
}

const AreaChartComponentRobots = memo(({ detail }) => {
   const newDetail = detail.map((item, index) => ({ ...item, number: index + 1 }));

   const dataKeys = detail?.map(item => Object.keys(item).filter(key => key !== 'label'));
   const uniqueArray = Array.from(new Set(dataKeys.flat()));
   const colors = [
      '#0E65F6',
      '#03B2D9',
      '#1cbadd',
      '#3e84f8',
      '#35c1e1',
      '#5693f9',
      '#4fc9e4',
      '#0d5bdd',
      '#03a0c3',
      '#0b51c5',
      '#028eae',
      '#0a47ac',
   ];

   const gradientId = 'color-gradient';

   return (
      <div className="h-[220px] w-full font-vazir">
         <ResponsiveContainer>
            <AreaChart data={newDetail || []}>
               <defs>
                  <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                     {uniqueArray.map((key, index) => (
                        <stop
                           key={key}
                           offset={`${(index * 100) / (uniqueArray.length - 1)}%`}
                           stopColor={colors[index]}
                           stopOpacity={0.06}
                        />
                     ))}
                  </linearGradient>
               </defs>

               <YAxis axisLine={false} tick={{ fontSize: '9px', fill: '#A0AEC0', dx: -20 }} tickLine={false} />
               <XAxis axisLine={false} tick={{ fontSize: '9px', fill: '#A0AEC0' }} tickLine={false} dataKey="number" />
               <CartesianGrid strokeDasharray="5" vertical={false} strokeOpacity={0.2} />
               <Tooltip content={<CustomTooltip />} />

               {uniqueArray.map((key, index) => (
                  <Area
                     key={key}
                     type="monotone"
                     dataKey={key}
                     stroke={colors[index]}
                     strokeWidth="2px"
                     fillOpacity={1}
                     fill={`url(#${gradientId})`}
                  />
               ))}
            </AreaChart>
         </ResponsiveContainer>
      </div>
   );
});

export default AreaChartComponentRobots;
