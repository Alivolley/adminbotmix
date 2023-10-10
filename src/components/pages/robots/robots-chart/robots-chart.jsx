import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function RobotsChart() {
   const data = [
      {
         name: 'Page A',
         uv: 4000,
      },
      {
         name: 'Page B',
         uv: 3000,
      },
      {
         name: 'Page C',
         uv: -1000,
      },
      {
         name: 'Page D',
         uv: 500,
      },
      {
         name: 'Page E',
         uv: -2000,
      },
      {
         name: 'Page F',
         uv: -250,
      },
      {
         name: 'Page G',
         uv: 3490,
      },
   ];

   const gradientOffset = () => {
      const dataMax = Math.max(...data.map(i => i.uv));
      const dataMin = Math.min(...data.map(i => i.uv));

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
            <AreaChart width="100%" height={448} data={data}>
               <CartesianGrid strokeDasharray="0" stroke="#000" strokeOpacity={0.2} />
               <XAxis dataKey="name" tick={{ fontSize: '9px', fill: '#A0AEC0' }} axisLine={false} />
               <YAxis axisLine={false} tick={{ fontSize: '9px', fill: '#A0AEC0', dx: -20 }} tickLine={false} />
               <Tooltip />
               <defs>
                  <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                     <stop offset={off} stopColor="#22c55e" stopOpacity={1} />
                     <stop offset={off} stopColor="#ef4444" stopOpacity={1} />
                  </linearGradient>
               </defs>
               <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)" />
            </AreaChart>
         </ResponsiveContainer>
      </div>
   );
}

export default RobotsChart;
