import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Filler,
   Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

function RobotsChart({ detail }) {
   const options = {
      maintainAspectRatio: false,
      responsive: true,
      lineTension: 0.3,
      plugins: {
         legend: {
            display: false,
         },
      },
      elements: {
         point: {
            radius: 0,
         },
      },

      interaction: {
         intersect: false,
      },
      scales: {
         x: {
            display: false,
         },
      },
   };

   const data = {
      labels: detail?.map((item, index) => index),
      datasets: [
         {
            fill: {
               value: detail?.[0]?.profit,
               below: '#F56565',
               above: '#48BB78',
            },
            label: 'Profit',
            data: detail?.map(item => item?.profit),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
         },
      ],
   };

   return (
      <div className="h-[448px]">
         <Line options={options} data={data} />
      </div>
   );
}

export default RobotsChart;
