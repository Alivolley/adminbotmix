import { Link } from 'react-router-dom';

// MUi
import { Button, Grid } from '@mui/material';

// Assets
import testPic from '../../assets/images/testPic.png';
import { HomeStyle } from './home.style';

// Components
import LinkComponent from '../../components/form-group/link-component/link-component';

function Home() {
  return (
    <HomeStyle>
      <div className="pb-40 pt-14 customSm:pt-[100px]">
        <Grid container spacing={2}>
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
          </Grid>
        </Grid>
      </div>
    </HomeStyle>
  );
}

export default Home;
