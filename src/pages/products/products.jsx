import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// MUI
import { CircularProgress, Grid, FormControl, InputLabel, Select, MenuItem, Button, Alert } from '@mui/material';

// Redux
import { useSelector } from 'react-redux';

// Components
import ProductCard from '../../components/pages/products/product-card/product-card';
import RobotCart from '../../components/pages/products/robot-cart/robot-cart';
import RtlProvider from '../../components/layout/rtlProvider/rtlProvider';

// Api
import useAllProducts from '../../apis/products/useAllProducts/useAllProducts';
import BuyReservePlanModal from '../../components/pages/products/buy-reserve-plan-modal/buy-reserve-plan-modal';

function Products() {
   const [chosenCategory, setChosenCategory] = useState('portfolio_management');
   const [showBuyReserveModal, setShowBuyReserveModal] = useState(false);
   const [planTime, setPlanTime] = useState(1);
   const reservedPlan = useSelector(state => state.emailReducer.reservedPlan);

   const location = useLocation();
   const { data: allProductsData, isLoading: allProductsIsLoading } = useAllProducts();

   useEffect(() => {
      if (location.state) {
         setChosenCategory(location.state);
      }
   }, [location.state]);

   function calculatePercent(number, percent) {
      const multiplyNumber = number * planTime;
      const percentValue = (multiplyNumber * percent) / 100;
      const result = multiplyNumber - percentValue;

      return result.toFixed(2);
   }

   return (
      <div className="mx-auto mb-32 mt-14 min-h-screen max-w-[1150px] customMd:mt-[80px]">
         <div className="mt-9 flex flex-wrap items-center justify-center gap-2 border-b border-gray-300 pb-10 dark:border-gray-600 customSm:gap-5">
            <button
               type="button"
               className={`whitespace-nowrap text-sm customSm:text-xl rounded-lg customSm:px-8 px-4 customSm:py-4 py-3 backdrop:blur-sm
           dark:text-textMainDark ${
              chosenCategory === 'robot_interface' ? 'bg-gradientBtnBlue text-white' : 'bg-gradientGray'
           }`}
               onClick={() => setChosenCategory('robot_interface')}
            >
               اشتراک ربات واسط
            </button>
            <button
               type="button"
               className={`whitespace-nowrap text-sm customSm:text-xl rounded-lg customSm:px-8 px-4 customSm:py-4 py-3 backdrop:blur-sm
           dark:text-textMainDark ${
              chosenCategory === 'portfolio_management' ? 'bg-gradientBtnBlue text-white' : 'bg-gradientGray'
           }`}
               onClick={() => setChosenCategory('portfolio_management')}
            >
               ربات تریدر و کپی ترید
            </button>
         </div>

         {chosenCategory === 'robot_interface' && (
            <>
               <div className="mt-9 flex justify-center">
                  <RtlProvider>
                     <FormControl color="primaryBlue" className="w-full customSm:w-72">
                        <InputLabel className="!font-vazir">مدت پلن</InputLabel>
                        <Select
                           value={planTime}
                           label="مدت پلن"
                           onChange={e => setPlanTime(e.target.value)}
                           className="!font-vazir"
                        >
                           <MenuItem value={1} className="!font-vazir">
                              ۱ ماهه
                           </MenuItem>
                           <MenuItem value={3} className="!font-vazir">
                              <div className="flex items-center gap-1">
                                 <p>۳ ماهه</p>
                                 <p className="text-xs text-textGray">( ۵ درصد تخفیف )</p>
                              </div>
                           </MenuItem>
                           <MenuItem value={12} className="!font-vazir">
                              <div className="flex items-center gap-1">
                                 <p>۱۲ ماهه</p>
                                 <p className="text-xs text-textGray">( ۲۰ درصد تخفیف )</p>
                              </div>
                           </MenuItem>
                        </Select>
                     </FormControl>
                  </RtlProvider>
               </div>
               <div className="mt-9 customSm:mt-16">
                  <Grid container spacing={5}>
                     <Grid item xs={12} sm={6} md={4}>
                        <RobotCart
                           name="رایگان"
                           exchangeCount={4}
                           telegramCount={4}
                           groupOrChannelAlertCount={1}
                           usableExchanges={1}
                           price={0}
                           planTime={planTime}
                           hasTrade={false}
                        />
                     </Grid>
                     <Grid item xs={12} sm={6} md={4}>
                        <RobotCart
                           name="پرو"
                           planeValue="pro"
                           exchangeCount={20}
                           telegramCount={20}
                           groupOrChannelAlertCount={5}
                           usableExchanges={2}
                           price={
                              planTime === 1
                                 ? 2.99
                                 : planTime === 3
                                 ? calculatePercent(2.99, 5)
                                 : planTime === 12
                                 ? calculatePercent(2.99, 20)
                                 : null
                           }
                           planTime={planTime}
                           hasTrade={false}
                        />
                     </Grid>
                     <Grid item xs={12} sm={6} md={4}>
                        <RobotCart
                           name="پرمیوم"
                           planeValue="premium"
                           exchangeCount={400}
                           telegramCount={400}
                           groupOrChannelAlertCount={10}
                           usableExchanges={5}
                           price={
                              planTime === 1
                                 ? 4.99
                                 : planTime === 3
                                 ? calculatePercent(4.99, 5)
                                 : planTime === 12
                                 ? calculatePercent(4.99, 20)
                                 : null
                           }
                           planTime={planTime}
                           hasTrade
                        />
                     </Grid>
                  </Grid>

                  {!reservedPlan ? (
                     <div className="mt-10 flex justify-center border-t border-gray-200 pt-5 dark:border-gray-600">
                        <Button
                           className="!px-16 !font-vazir !text-white"
                           variant="contained"
                           color="primaryBlue"
                           onClick={() => setShowBuyReserveModal(true)}
                        >
                           خرید پلن رزرو
                        </Button>
                     </div>
                  ) : (
                     <Alert
                        className="mt-10 !rounded-xl border-t border-gray-200 !py-1 !font-vazir !text-base dark:border-gray-600"
                        severity="info"
                        icon={false}
                     >
                        شما یک پلن رزرو {reservedPlan} دارید.
                     </Alert>
                  )}
               </div>
               <BuyReservePlanModal open={showBuyReserveModal} closeModal={() => setShowBuyReserveModal(false)} />
            </>
         )}

         {chosenCategory === 'portfolio_management' && (
            <div className="mt-9 customSm:mt-16">
               {allProductsIsLoading ? (
                  <div className="flex items-center justify-center">
                     <CircularProgress />
                  </div>
               ) : (
                  <Grid container spacing={5}>
                     {allProductsData?.data?.map(product => (
                        <Grid item xs={12} sm={6} md={4} key={product?.id}>
                           <ProductCard detail={product} accountBalance={allProductsData?.account_balance} />
                        </Grid>
                     ))}
                  </Grid>
               )}
            </div>
         )}
      </div>
   );
}

export default Products;
