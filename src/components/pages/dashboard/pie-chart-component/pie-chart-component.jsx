import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

function PieChartComponent() {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
  ];
  const colors = ['#1f7191', '#143542'];

  return (
    <div className="h-[220px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width="100%" height="100%">
          <Pie
            data={data}
            innerRadius={65}
            outerRadius={95}
            dataKey="value"
            startAngle={-270}
          >
            {data.map((entry, index) => (
              <Cell
                fill={colors[index]}
                // eslint-disable-next-line react/no-array-index-key
                key={`cell-${index}`}
                className="pointer-events-none"
              />
            ))}
            <Label
              value="۱۰۰٪"
              position="center"
              fontSize={14}
              fontWeight={700}
              fill="#A0AEC0"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieChartComponent;
