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

function HowWeWork() {
  return (
    <HowWeWorkStyle className="mx-auto max-w-[1150px]">
      <p className="text-center font-lalezar text-3xl customMd:text-[60px]">
        باتمیکس چطور کار میکنه
      </p>

      <div className="mt-32">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="space-y-[25px]">
              <HowWeWorkCard
                imageSrc={telegramTest}
                step="ربات تکنیکال"
                title="ربات تریدر (تکنیکال) خودکار"
              >
                بدون نیاز به هیچ پلتفرم دیگری و فقط همینجا ، رربات خودت رو
                انتخاب کن و به صرافی خودت متصل کن تا اتوماتیک برات معامله کنه
              </HowWeWorkCard>

              <HowWeWorkCard
                imageSrc={exchangeTest}
                step="ربات آربیتراژ"
                title="ربات تریدر (آربیتراژ) خودکار"
              >
                به علاوه ربات تریدر تکنیکال ، ما اینجا ربات تریدر آربیتراژ هم
                داریم که از اختلاف قیمت ارزهای دیجیتال سود میگیره و بهتون سود
                منطقی و مداوم میده
              </HowWeWorkCard>

              <HowWeWorkCard
                imageSrc={candlestickTest}
                step="سبد گردانی"
                title="سبد گردانی"
              >
                از خدمات سبد گردانی ما غافل نشوید ، چرا که متخصصین ما با تجربه
                ای که در بازار اسپات دارند میتوانند به صورت سالانه سرمایه شما را
                رشد دهند که سود چشمگیری خواهد بود
              </HowWeWorkCard>

              <HowWeWorkCard
                imageSrc={robotTest}
                step="ارسال سیگنال"
                title="ارسال سیگنال از تریدینگ ویو به صرافی و تلگرام"
              >
                این خدمات ما مخصوص دوستانی هست که میخواهند از اندیکاتور و
                استراتژی های تریدینگ ویو به عنوان ربات تریدر استفاده کنند و
                میتوانند به راحتی سیگنال ( الرت ها ) را به صرافی خودشون ارسال
                کنند تا اتوماتیک براشون ترید کنه ، یا اینکه به کانال یه گروه
                تلگرامشون ارسال کنند تا دیگران هم بتوانند از سیگنال هاشون
                استفاده کنند
              </HowWeWorkCard>

              <HowWeWorkCard
                imageSrc={robotTest}
                step="برنامه نویسی"
                title="خدمات برنامه نویسی بازار های مالی ( ربات تریدر و ...)"
              >
                ما اینجا متخصصینین در زمینه برنامه نویسی و بازار های مالی داریم
                که میتونن استراتژی شخصی شما رو تبدیل به ربات تریدر کرده تا ربات
                تریدر یا دستایر شخصی خودتون رو داشته باشید
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
