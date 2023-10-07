import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function AreaChartComponent({ detail }) {
   // console.log(detail);

   const data = [
      {
         name: 'Page A',
         uv: Math.random(),
         pv: Math.random(),
      },
      {
         name: 'Page B',
         uv: Math.random(),
         pv: Math.random(),
      },
      {
         name: 'Page C',
         uv: Math.random(),
         pv: Math.random(),
      },
      {
         name: 'Page D',
         uv: Math.random(),
         pv: Math.random(),
      },
      {
         name: 'Page E',
         uv: Math.random(),
         pv: Math.random(),
      },
      {
         name: 'Page F',
         uv: Math.random(),
         pv: Math.random(),
      },
      {
         name: 'Page G',
         uv: Math.random(),
         pv: Math.random(),
      },
   ];

   return (
      <div className="h-[220px] w-full font-vazir">
         <ResponsiveContainer>
            <AreaChart data={data}>
               <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#1f7191" stopOpacity={0.3} />
                     <stop offset="95%" stopColor="#1f7191" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#143542" stopOpacity={0.5} />
                     <stop offset="95%" stopColor="#143542" stopOpacity={0} />
                  </linearGradient>
               </defs>
               <XAxis dataKey="name" tick={{ fontSize: '9px', fill: '#A0AEC0' }} axisLine={false} />
               <YAxis axisLine={false} tick={{ fontSize: '9px', fill: '#A0AEC0', dx: -20 }} tickLine={false} />
               <CartesianGrid strokeDasharray="5" vertical={false} strokeOpacity={0.2} />
               <Tooltip />
               <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#1f7191"
                  strokeWidth="3px"
                  fillOpacity={1}
                  fill="url(#colorUv)"
               />
               <Area
                  type="monotone"
                  dataKey="pv"
                  stroke="#143542"
                  strokeWidth="3px"
                  fillOpacity={1}
                  fill="url(#colorPv)"
               />
            </AreaChart>
         </ResponsiveContainer>
      </div>
   );
}

export default AreaChartComponent;
