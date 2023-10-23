import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// MUI
import { CircularProgress, Grid } from '@mui/material';

// Components
import ProductCard from '../../components/pages/products/product-card/product-card';
import RobotCart from '../../components/pages/products/robot-cart/robot-cart';

// Api
import useAllProducts from '../../apis/products/useAllProducts/useAllProducts';

function Products() {
   const { data: allProductsData, isLoading: allProductsIsLoading } = useAllProducts();

   const location = useLocation();

   const [chosenCategory, setChosenCategory] = useState('robot_interface');

   useEffect(() => {
      if (location.state) {
         setChosenCategory(location.state);
      }
   }, [location.state]);

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
                        price={2.5}
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
                        price={4}
                     />
                  </Grid>
               </Grid>
            </div>
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
