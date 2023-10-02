import { Link } from 'react-router-dom';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

// MUI
import { Button } from '@mui/material';

// Icons
import BarChartIcon from '@mui/icons-material/BarChart';

// Assets
import { ProductCardStyle } from './product-card.style';
import RtlProvider from '../../../layout/rtlProvider/rtlProvider';

function ProductCard() {
  const testArray = [
    { uv: 1200 },
    { uv: 3000 },
    { uv: 2000 },
    { uv: 2780 },
    { uv: 1890 },
    { uv: 2390 },
    { uv: 3490 },
  ];

  return (
    <ProductCardStyle>
      <div className="my-8">
        <ResponsiveContainer width="100%" height={100}>
          <AreaChart data={testArray}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#48BB78" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#48BB78" stopOpacity={0} />
              </linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="uv"
              stroke="#48BB78"
              strokeWidth="3px"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <h3 className="mt-7 text-xl font-bold">نام محصول</h3>

      <div className="mb-5 mt-8 border-b border-gray-300 pb-5 dark:border-gray-600">
        <div className="space-y-2">
          <div className="flex items-center justify-end gap-2">
            <p className="whitespace-nowrap text-textGray">Exchange :</p>
            <p>Binance</p>
          </div>
          <div className="flex items-center justify-end gap-2">
            <p className="whitespace-nowrap text-textGray">Total profit :</p>
            <p>12.6%</p>
          </div>
          <div className="flex items-center justify-end gap-2">
            <p className="whitespace-nowrap text-textGray">WinRate :</p>
            <p>67%</p>
          </div>
          <div className="flex items-center justify-end gap-2">
            <p className="whitespace-nowrap text-textGray">DrawDown :</p>
            <p>2%</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <Button className="!font-vazir" variant="contained" color="primaryBlue">
          فعالسازی
        </Button>
        <RtlProvider>
          <Link to="/robotFunctionality/2">
            <Button
              className="!font-vazir"
              variant="outlined"
              color="primary"
              endIcon={<BarChartIcon />}
            >
              عملکرد ربات
            </Button>
          </Link>
        </RtlProvider>
      </div>
    </ProductCardStyle>
  );
}

export default ProductCard;
