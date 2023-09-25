// MUI
import { Grid } from '@mui/material';

// Components
import BenefitsOfUsCard from '../benefits-of-us-card/benefits-of-us-card';

function BenefitsOfUs() {
  return (
    <div className="relative mx-auto max-w-[1150px]">
      <div className="absolute -bottom-16 left-0 top-24 w-[1px] bg-gray-300 dark:bg-gray-800 customMd:right-[50%]" />

      <p className="text-center font-lalezar text-3xl customMd:text-[60px]">
        مزایای استفاده از باتمیکس
      </p>

      <div className="mt-32 pl-[30px] customMd:pl-0">
        <Grid container columnSpacing={7} rowSpacing={4}>
          <Grid item xs={12} md={6}>
            <BenefitsOfUsCard title="هزینه کم" step="ارزان بودن">
              در این رباتها ما به ازای سودی که به شما میدهیم کارمزد دریافت
              میکنیم و هیچ مبلغی بابت اصل ربات پرداخت نخواهید کرد. و فقط به مبلغ
              دلخواه اکانت خودتون رو شارژ خواهید کرد و کارمزدها از آن مبلغ شارژ
              شده ، کسر خواهد شد
            </BenefitsOfUsCard>
          </Grid>
          <Grid item xs={12} md={6} marginTop={{ md: 15 }}>
            <BenefitsOfUsCard
              title="سهولت استفاده "
              step="آسان"
              pingSide="right"
            >
              به راحتی ، اکانت باتمیکس رو شارژ کن ، Api صرافی خودت رو ثبت کن و
              سرمایه رو مشخص کن و دکمه فعالسازی رو بزن و تمام ، ربات شما با
              موفقیت فعال شد . البته در رباتهای آربیتراژ این مورد حتی راحت تر هم
              هست و فقط کافیه اکانتتون رو شارژ کنید ، به ازای مبلغ شارژ شده ،
              سود دریافت خواهید کرد
            </BenefitsOfUsCard>
          </Grid>
          <Grid item xs={12} md={6} marginTop={{ md: '-120px' }}>
            <BenefitsOfUsCard title="گذشته مشخص و شفاف رباتها" step="شفافیت">
              تمامی ترید هایی که در جزئیات رباتها مشاهده میکنید به صورت لایو
              اجرا میشوند و ربات حاصل معاملات واقعی را بصورت شفاف در مشخصات ربات
              ثبت میکند تا ربات و کارکرد آن بروز باشد.
            </BenefitsOfUsCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <BenefitsOfUsCard title="پشتیبانی" step="پشتیبانی" pingSide="right">
              ما اینجا متعهد به مشتریانمون هستیم ، پس تعارف و خجالت رو بزارید
              کنار و هر سوال و پیشنهاد و انتقادی دارید با ما مطرح کنید ، که باعث
              خوشحالی ما هستش .
            </BenefitsOfUsCard>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default BenefitsOfUs;
