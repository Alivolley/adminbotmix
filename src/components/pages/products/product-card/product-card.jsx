import { Link } from 'react-router-dom';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

// MUI
import { Button } from '@mui/material';

// Icons
import BarChartIcon from '@mui/icons-material/BarChart';

// Assets
import { ProductCardStyle } from './product-card.style';
import RtlProvider from '../../../layout/rtlProvider/rtlProvider';

function ProductCard({ detail }) {
   return (
      <ProductCardStyle>
         <div className="my-8">
            <ResponsiveContainer width="100%" height={100}>
               <AreaChart data={detail?.chart || []}>
                  <defs>
                     <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#48BB78" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#48BB78" stopOpacity={0} />
                     </linearGradient>
                  </defs>

                  <Area
                     type="monotone"
                     dataKey="profit"
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
                  <p className="whitespace-nowrap text-textGray">Name :</p>
                  <p>{detail?.name}</p>
               </div>
               <div className="flex items-center justify-end gap-2">
                  <p className="whitespace-nowrap text-textGray">Total profit :</p>
                  <p>{detail?.total_profit}%</p>
               </div>
               <div className="flex items-center justify-end gap-2">
                  <p className="whitespace-nowrap text-textGray">WinRate :</p>
                  <p>{detail?.winRate}%</p>
               </div>
               <div className="flex items-center justify-end gap-2">
                  <p className="whitespace-nowrap text-textGray">DrawDown :</p>
                  <p>{detail?.drawdown}%</p>
               </div>
            </div>
         </div>

         <div className="flex items-center justify-between gap-3">
            <Button className="!font-vazir" variant="contained" color="primaryBlue">
               فعالسازی
            </Button>
            <RtlProvider>
               <Link to={`/robotFunctionality/${detail?.id}`}>
                  <Button className="!font-vazir" variant="outlined" color="primary" endIcon={<BarChartIcon />}>
                     عملکرد ربات
                  </Button>
               </Link>
            </RtlProvider>
         </div>
      </ProductCardStyle>
   );
}

export default ProductCard;
