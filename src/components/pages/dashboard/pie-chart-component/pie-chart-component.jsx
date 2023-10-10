import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
   const x = cx + radius * Math.cos(-midAngle * RADIAN);
   const y = cy + radius * Math.sin(-midAngle * RADIAN);

   return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'end' : 'start'} dominantBaseline="central" fontSize={12}>
         {`${(percent * 100).toFixed(0)}%`}
      </text>
   );
};

function PieChartComponent() {
   const data = [
      { name: 'Group A', value: 30 },
      { name: 'Group B', value: 70 },
   ];
   const colors = ['#7F9DC3', '#3D92C9'];

   return (
      <div className="h-[220px] w-full">
         <ResponsiveContainer width="100%" height="100%">
            <PieChart width="100%" height="100%">
               <Pie
                  data={data}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  dataKey="value"
                  startAngle={-270}
                  paddingAngle={2}
               >
                  {data.map((entry, index) => (
                     // eslint-disable-next-line react/no-array-index-key
                     <Cell key={`cell-${index}`} fill={colors[index % colors.length]} stroke="none" cornerRadius={3} />
                  ))}
               </Pie>
            </PieChart>
         </ResponsiveContainer>
      </div>
   );
}

export default PieChartComponent;
