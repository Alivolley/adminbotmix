// MUI
import { Grid } from '@mui/material';

// Assets
import howWeWorkPic from '../../../../assets/images/howWeWorkPic.png';
import robotTest from '../../../../assets/icons/icon-robot.png';
import telegramTest from '../../../../assets/icons/icon-telegram.png';
import codeTest from '../../../../assets/icons/icon-code.png';
import portfolioTestIcon from '../../../../assets/icons/icon-portfolio.png';
import robot2Test from '../../../../assets/icons/icon-robot-2.png';

// Components
import HowWeWorkCard from '../how-we-work-card/how-we-work-card';

function HowWeWork() {
   return (
      <div className="mx-auto max-w-[1150px]">
         <p className="text-center font-lalezar text-3xl customMd:text-[50px]">خدمات باتمیکس</p>

         <div className="mt-32">
            <Grid container columnSpacing={10} rowSpacing={3}>
               <Grid item xs={12} md={6}>
                  <div className="space-y-[25px]">
                     <HowWeWorkCard imageSrc={robotTest} step="ربات تکنیکال">
                        بدون نیاز به هیچ پلتفرم دیگری و فقط همینجا ، ربات خودت رو انتخاب کن و به صرافی خودت متصل کن تا
                        اتوماتیک برات معامله کنه
                     </HowWeWorkCard>

                     <HowWeWorkCard imageSrc={robot2Test} step="ربات آربیتراژ">
                        به علاوه ربات تریدر تکنیکال ، ما اینجا ربات تریدر آربیتراژ هم داریم که از اختلاف قیمت ارزهای
                        دیجیتال سود میگیره و بهتون سود منطقی و مداوم میده
                     </HowWeWorkCard>

                     <HowWeWorkCard imageSrc={portfolioTestIcon} step="کپی ترید">
                        از خدمات کپی ترید ما غافل نشوید ، چرا که متخصصین ما با تجربه ای که در بازار اسپات دارند میتوانند
                        به صورت سالانه سرمایه شما را رشد دهند که سود چشمگیری خواهد بود
                     </HowWeWorkCard>

                     <HowWeWorkCard imageSrc={telegramTest} step="ارسال سیگنال">
                        این خدمات ما مخصوص دوستانی هست که میخواهند از اندیکاتور و استراتژی های تریدینگ ویو به عنوان ربات
                        تریدر استفاده کنند و میتوانند به راحتی سیگنال ( الرت ها ) را به صرافی خودشون ارسال کنند تا
                        اتوماتیک براشون ترید کنه ، یا اینکه به کانال یه گروه تلگرامشون ارسال کنند تا دیگران هم بتوانند
                        از سیگنال هاشون استفاده کنند
                     </HowWeWorkCard>

                     <HowWeWorkCard imageSrc={codeTest} step="برنامه نویسی">
                        ما اینجا متخصصین در زمینه برنامه نویسی و بازار های مالی داریم که میتونن استراتژی شخصی شما رو
                        تبدیل به ربات تریدر کرده تا ربات تریدر یا دستیار شخصی خودتون رو داشته باشید
                     </HowWeWorkCard>
                  </div>
               </Grid>
               <Grid item xs={12} md={6}>
                  <div data-aos="fade-zoom-in" data-aos-duration="1500" className="customMd:mt-36">
                     <img src={howWeWorkPic} alt="how batmix work" className="w-full" />
                  </div>
               </Grid>
            </Grid>
         </div>
      </div>
   );
}

export default HowWeWork;
