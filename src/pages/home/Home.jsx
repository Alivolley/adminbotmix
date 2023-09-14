import { Link } from 'react-router-dom';

// MUi
import { Button, Grid } from '@mui/material';

// Assets
import testPic from '../../assets/images/testPic.png';
import { HomeStyle } from './home.style';

function Home() {
  return (
    <HomeStyle>
      <div className="pt-14 customSm:pt-[100px]">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div>
              <p className="text-center font-lalezar text-lg customSm:text-start customSm:text-2xl">
                ربات
              </p>
              <p className="text-center font-lalezar text-lg customSm:text-start customSm:text-2xl">
                بات میکس
              </p>

              <p className="mt-6 text-center font-lalezar text-4xl customSm:mt-12 customSm:text-start customSm:text-[80px] customSm:leading-[100px]">
                تنها با چند کلیک <br />
                <span id="nftSpan">ربات تریدرت</span> رو بساز
              </p>
              <div className="mt-6 flex items-center justify-center gap-5 customSm:mt-12 customSm:justify-start">
                <Button
                  className="!font-vazir"
                  variant="contained"
                  color="buttonPurple"
                >
                  <Link to="/" className="text-textMainDark">
                    ورود
                  </Link>
                </Button>
                <Button
                  className="!font-vazir"
                  variant="contained"
                  color="buttonPurple"
                >
                  <Link to="/" className="text-textMainDark">
                    ثبت نام
                  </Link>
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <img
                className="mx-auto w-full max-w-xl rounded-[60px]"
                src={testPic}
                alt="first pic"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </HomeStyle>
  );
}

export default Home;
