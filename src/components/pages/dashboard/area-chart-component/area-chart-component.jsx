import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

function AreaChartComponent() {
  const data = [
    {
      name: 'Page A',
      uv: 1200,
      pv: 800,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 5000,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
    },
  ];

  return (
    <div className="h-[220px] w-full font-vazir">
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4FD1C5" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#4FD1C5" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0075FF" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#0075FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            tick={{ fontSize: '9px', fill: '#A0AEC0' }}
            axisLine={false}
          />
          <YAxis
            axisLine={false}
            tick={{ fontSize: '9px', fill: '#A0AEC0', dx: -20 }}
            tickLine={false}
          />
          <CartesianGrid
            strokeDasharray="5"
            vertical={false}
            strokeOpacity={0.2}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#4FD1C5"
            strokeWidth="3px"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#0075FF"
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
