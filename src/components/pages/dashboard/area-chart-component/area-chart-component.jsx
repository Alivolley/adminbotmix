import { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function AreaChartComponent({ detail }) {
   const [data, setData] = useState([]);

   useEffect(() => {
      detail?.forEach(item => setData(prev => [...prev, { name: item?.label, uv: detail?.order, pv: detail?.alert }]));
   }, [detail]);

   return (
      <div className="h-[220px] w-full font-vazir">
         <ResponsiveContainer>
            <AreaChart data={data}>
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
               <XAxis dataKey="name" tick={{ fontSize: '9px', fill: '#A0AEC0' }} axisLine={false} />
               <YAxis axisLine={false} tick={{ fontSize: '9px', fill: '#A0AEC0', dx: -20 }} tickLine={false} />
               <CartesianGrid strokeDasharray="5" vertical={false} strokeOpacity={0.2} />
               <Tooltip />
               <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#0E65F6"
                  strokeWidth="2px"
                  fillOpacity={1}
                  fill="url(#colorUv)"
               />
               <Area
                  type="monotone"
                  dataKey="pv"
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

export default AreaChartComponent;
