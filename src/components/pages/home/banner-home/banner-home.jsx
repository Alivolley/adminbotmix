import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer } from 'recharts';

// MUi
import { Grid } from '@mui/material';

// Assets
import { useEffect } from 'react';
import testPic from '../../../../assets/images/testPic.png';
import { BannerHomeStyle } from './banner-home.style';

// Components
import LinkComponent from '../../../form-group/link-component/link-component';

function BannerHome() {
  const testArray = [];

  useEffect(() => {
    for (let i = 0; i < 30; i++) {
      testArray.push({
        uv: Math.random(),
      });
    }
  }, []);

  return (
    <BannerHomeStyle>
      <div className="mt-14 customMd:mt-[100px]">
        <Grid container spacing={{ xs: 15, md: 2 }}>
          <Grid item xs={12} md={6}>
            <div>
              {/* <p className="text-center font-lalezar text-lg customSm:text-start customSm:text-2xl">
            ربات
          </p>
          <p className="text-center font-lalezar text-lg customSm:text-start customSm:text-2xl">
            بات میکس
          </p> */}

              <p className="mt-6 font-lalezar text-5xl customSm:mt-[90px] customSm:text-start customSm:text-[80px] customSm:leading-[100px]">
                تنها با چند کلیک{' '}
                <span id="linear-text" className="whitespace-nowrap">
                  ربات تریدرت
                </span>{' '}
                رو بساز
              </p>
              <p className="mt-8 max-w-lg leading-8">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است در ستون و سطرآنچنان که لازم است
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-5 customSm:mt-12 customSm:justify-start">
                <Link to="/">
                  <LinkComponent className="px-[70px]">ثبت نام</LinkComponent>
                </Link>

                <Link to="/">
                  <LinkComponent className="px-[55px]" color="gray">
                    ورود
                  </LinkComponent>
                </Link>
              </div>

              <div className="mx-auto mt-12 flex w-fit items-center justify-between customSm:mx-0 customSm:mt-24">
                <div className="flex flex-col items-center justify-center pl-5">
                  <p className="font-lalezar text-xl customSm:text-5xl">
                    <sup className="font-vazir customSm:text-2xl">+</sup>
                    <CountUp end={38} duration={3} />k
                  </p>
                  <p className="text-center">تعداد کاربران</p>
                </div>

                <div className="flex flex-col items-center justify-center border-r-[1px] border-solid border-stone-600 pr-5">
                  <p className="font-lalezar text-xl customSm:text-5xl">
                    <sup className="font-vazir customSm:text-2xl">+</sup>
                    <CountUp end={52} duration={3} />k
                  </p>
                  <p className="text-center">سرمایه در گردش ربات</p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <img
                className="mx-auto w-full rounded-[60px]"
                src={testPic}
                alt="first pic"
                id="home_first_image"
              />
            </div>

            <div
              className="mt-2 px-4 py-2"
              id="home_card"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="350"
            >
              <p className="border-b-[1px] border-solid border-stone-600 pb-3 text-lg font-bold">
                محصول پیشنهادی باتمیکس
              </p>
              <div
                className="mt-4 flex items-center justify-between gap-6 pb-12 customMd:gap-16"
                dir="ltr"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <p className="whitespace-nowrap text-textGray">
                      Exchange :
                    </p>
                    <p>Binance</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <p className="whitespace-nowrap text-textGray">
                      Total profit :
                    </p>
                    <p>12.6%</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <p className="whitespace-nowrap text-textGray">WinRate :</p>
                    <p>67%</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <p className="whitespace-nowrap text-textGray">
                      DrawDown :
                    </p>
                    <p>2%</p>
                  </div>
                </div>

                <div className="w-[70px] customSm:max-w-[250px] customSm:grow">
                  <ResponsiveContainer width="100%" height={60}>
                    <LineChart width="100%" height="100%" data={testArray}>
                      <Line
                        dataKey="uv"
                        type="natural"
                        stroke="#48BB78"
                        strokeWidth={3}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-[-13%] flex justify-center">
                <LinkComponent className="px-16">ایجاد سفارش</LinkComponent>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </BannerHomeStyle>
  );
}

export default BannerHome;
