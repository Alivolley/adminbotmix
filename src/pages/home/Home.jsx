import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

// MUi
import { Grid } from '@mui/material';

// Assets
import testPic from '../../assets/images/testPic.png';
import { HomeStyle } from './home.style';

// Components
import LinkComponent from '../../components/form-group/link-component/link-component';

function Home() {
  return (
    <HomeStyle>
      <div className="pb-40 pt-14 customSm:pt-[100px]">
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
                <span id="nftSpan" className="whitespace-nowrap">
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

              <div className="mx-auto mt-7 flex w-fit items-center justify-between customSm:mt-20">
                <div className="flex flex-col items-center justify-center">
                  <p className="px-5 font-lalezar text-base customSm:px-10 customSm:pr-0 customSm:text-5xl">
                    <sup className="font-vazir customSm:text-2xl">+</sup>
                    <CountUp end={38} duration={3} />k
                  </p>
                  <p>کاربران</p>
                </div>
                <div className="flex flex-col items-center justify-center border-r-[1px] border-solid border-stone-600">
                  <p className="px-5 font-lalezar text-base customSm:px-10 customSm:text-5xl">
                    <sup className="font-vazir customSm:text-2xl">+</sup>
                    <CountUp end={52} duration={3} />k
                  </p>
                  <p>معاملات</p>
                </div>
                <div className="flex flex-col items-center justify-center border-r-[1px] border-solid border-stone-600">
                  <p className="px-5 font-lalezar text-base customSm:px-10 customSm:text-5xl">
                    <sup className="font-vazir customSm:text-2xl">+</sup>
                    <CountUp end={69} duration={3} />k
                  </p>
                  <p>در گردش</p>
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
              className="mt-2"
              id="home_card"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="350"
            >
              some
              <div className="absolute inset-x-0 bottom-[-13%] flex justify-center">
                <LinkComponent className="px-16">ایجاد سفارش</LinkComponent>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </HomeStyle>
  );
}

export default Home;
