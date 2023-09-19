// MUI
import { Grid } from '@mui/material';

// Assets
import portfolioTest from '../../../../assets/images/portfolioTest.png';
import candlestickTest from '../../../../assets/icons/icon-candlestick.png';
import exchangeTest from '../../../../assets/icons/icon-exchange.png';
import robotTest from '../../../../assets/icons/icon-robot.png';
import telegramTest from '../../../../assets/icons/icon-telegram.png';
import { HowWeWorkStyle } from './how-we-work.style';

// Components
import HowWeWorkCard from '../how-we-work-card/how-we-work-card';
import GlowingShadow from '../../../templates/glowing-shadow/glowing-shadow';

function HowWeWork() {
  return (
    <HowWeWorkStyle className="mx-auto max-w-[1150px]">
      <p className="text-center font-lalezar text-3xl customMd:text-[60px]">
        باتمیکس چطور کار میکنه
      </p>

      <div className="mt-32">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="relative space-y-[25px]">
              <GlowingShadow
                color="rgba(114, 91, 218, 0.3)"
                className="bottom-[40%] right-[-50%] top-[30%] z-0"
              />

              <HowWeWorkCard
                imageSrc={telegramTest}
                step="اتصال به تلگرام"
                title="اتصال به تلگرام"
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                سادگی نامفهوم استفاده از طراحان گرافیک است در ستون سادگی نامفهوم
                و سطرآنچنان که لازم است
              </HowWeWorkCard>

              <HowWeWorkCard
                imageSrc={exchangeTest}
                step="اتصال به صرافی"
                title="اتصال به صرافی"
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                سادگی نامفهوم استفاده از طراحان گرافیک است در ستون سادگی نامفهوم
                و سطرآنچنان که لازم است
              </HowWeWorkCard>

              <HowWeWorkCard
                imageSrc={candlestickTest}
                step="ربات تریدر"
                title="ربات تریدر"
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                سادگی نامفهوم استفاده از طراحان گرافیک است در ستون سادگی نامفهوم
                و سطرآنچنان که لازم است
              </HowWeWorkCard>

              <HowWeWorkCard
                imageSrc={robotTest}
                step="ربات آربیتراژ"
                title="ربات آربیتراژ"
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                سادگی نامفهوم استفاده از طراحان گرافیک است در ستون سادگی نامفهوم
                و سطرآنچنان که لازم است
              </HowWeWorkCard>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div data-aos="fade-zoom-in" data-aos-duration="1500">
              <img
                src={portfolioTest}
                alt="how batmix work"
                className="w-full"
                id="how_we_work_image"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </HowWeWorkStyle>
  );
}

export default HowWeWork;
