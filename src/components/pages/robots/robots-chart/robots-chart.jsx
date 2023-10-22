// import {
//    Chart as ChartJS,
//    CategoryScale,
//    LinearScale,
//    PointElement,
//    LineElement,
//    Title,
//    Tooltip,
//    Filler,
//    Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

// function RobotsChart({ detail }) {
//    const options = {
//       maintainAspectRatio: false,
//       responsive: true,
//       lineTension: 0.3,
//       plugins: {
//          legend: {
//             display: false,
//          },
//       },
//       elements: {
//          point: {
//             radius: 0,
//          },
//       },

//       interaction: {
//          intersect: false,
//       },
//       scales: {
//          x: {
//             display: false,
//          },
//       },
//    };

//    const data = {
//       labels: detail?.map((item, index) => index),
//       datasets: [
//          {
//             fill: {
//                value: detail?.[0]?.profit,
//                below: '#F56565',
//                above: '#48BB78',
//             },
//             label: 'Profit',
//             data: detail?.map(item => item?.profit),
//             backgroundColor: 'rgba(53, 162, 235, 0.5)',
//          },
//       ],
//    };

//    return (
//       <div className="h-[448px]">
//          <Line options={options} data={data} />
//       </div>
//    );
// }

// export default RobotsChart;

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function RobotsChart({ detail }) {
   const gradientOffset = () => {
      const dataMax = Math.max(...detail.map(i => i.profit));
      const dataMin = Math.min(...detail.map(i => i.profit));

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
               <CartesianGrid strokeDasharray="0" stroke="#000" strokeOpacity={0.2} />
               <XAxis dataKey="name" tick={{ fontSize: '9px', fill: '#A0AEC0' }} axisLine={false} />
               <YAxis axisLine={false} tick={{ fontSize: '9px', fill: '#A0AEC0', dx: -20 }} tickLine={false} />
               <Tooltip />
               <defs>
                  <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                     <stop offset={off} stopColor="#22c55e" stopOpacity={0.9} />
                     <stop offset={off} stopColor="#dc2626" stopOpacity={0.6} />
                  </linearGradient>
               </defs>
               <Area type="monotone" dataKey="profit" stroke="#000" fill="url(#splitColor)" />
            </AreaChart>
         </ResponsiveContainer>
      </div>
   );
}

export default RobotsChart;
