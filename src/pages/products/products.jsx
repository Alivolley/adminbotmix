import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// MUI
import { Grid } from '@mui/material';

// Assets
import articlePicTest from '../../assets/images/articlePicTest.png';
import articlePicTest2 from '../../assets/images/portfolioTest.png';
import articlePicTest3 from '../../assets/images/testPic.png';
import articlePicTest4 from '../../assets/images/user.jpg';

// Components
import ProductCard from '../../components/pages/products/product-card/product-card';

function Products() {
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
             chosenCategory === 'robot_interface'
               ? 'bg-gradientBtnBlue text-white'
               : 'bg-gradientGray dark:bg-gradientBtnDark'
           }`}
          onClick={() => setChosenCategory('robot_interface')}
        >
          اشتراک رباط واسط
        </button>
        <button
          type="button"
          className={`whitespace-nowrap text-sm customSm:text-xl rounded-lg customSm:px-8 px-4 customSm:py-4 py-3 backdrop:blur-sm
           dark:text-textMainDark ${
             chosenCategory === 'portfolio_management'
               ? 'bg-gradientBtnBlue text-white'
               : 'bg-gradientGray dark:bg-gradientBtnDark'
           }`}
          onClick={() => setChosenCategory('portfolio_management')}
        >
          سبدگردانی
        </button>
      </div>

      {chosenCategory === 'robot_interface' && (
        <div className="mt-9 customSm:mt-16">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={4}>
              کارت اشتراک ربات
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              کارت اشتراک ربات
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              کارت اشتراک ربات
            </Grid>
          </Grid>
        </div>
      )}

      {chosenCategory === 'portfolio_management' && (
        <div className="mt-9 customSm:mt-16">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={4}>
              <ProductCard imageSrc={articlePicTest} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ProductCard imageSrc={articlePicTest2} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ProductCard imageSrc={articlePicTest3} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ProductCard imageSrc={articlePicTest4} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ProductCard imageSrc={articlePicTest} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ProductCard imageSrc={articlePicTest} />
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
}

export default Products;
