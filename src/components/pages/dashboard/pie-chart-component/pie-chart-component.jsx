import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { v4 as uuidv4 } from 'uuid';

function CustomTooltip({ active, payload }) {
   if (active && payload && payload.length) {
      const data = payload[0].payload;

      return (
         <div className="rounded-2xl bg-[#000000be] px-5 py-3">
            <p className="mt-2 text-sm text-white">{`${data?.name} : %${data?.value}`}</p>
         </div>
      );
   }

   return null;
}

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
   const x = cx + radius * Math.cos(-midAngle * RADIAN);
   const y = cy + radius * Math.sin(-midAngle * RADIAN);

   return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'end' : 'start'} dominantBaseline="central">
         {`${(percent * 100).toFixed(0)}%`}
      </text>
   );
};

function PieChartComponent() {
   const colors = ['#3D92C9', '#7F9DC3'];

   const data = [
      { name: 'کاربر', value: 75 },
      { name: 'باتمیکس', value: 25 },
   ];

   return (
      <div className="h-[320px] w-full">
         <ResponsiveContainer width="100%" height="100%">
            <PieChart width="100%" height="100%" style={{ outline: 'none' }}>
               <Pie
                  dataKey="value"
                  data={data}
                  outerRadius={120}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  style={{ outline: 'none' }}
                  startAngle={-180}
               >
                  {data.map((entry, index) => (
                     <Cell
                        key={uuidv4()}
                        fill={colors[index % colors.length]}
                        stroke="#0000006c"
                        style={{ outline: 'none' }}
                     />
                  ))}
               </Pie>
               <Tooltip content={<CustomTooltip />} />
            </PieChart>
         </ResponsiveContainer>
      </div>
   );
}

export default PieChartComponent;
