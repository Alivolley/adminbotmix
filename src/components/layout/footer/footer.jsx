// Mui
import { Grid, IconButton } from '@mui/material';

// Icons
import MailIcon from '@mui/icons-material/Mail';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
  return (
    <footer className="bg-bgPrimary px-7 py-14 dark:bg-darkPurple">
      <div className="mx-auto max-w-[1150px]">
        <Grid container rowSpacing={5} columnSpacing={3}>
          <Grid item xs={12} md={6}>
            <p className="text-justify text-[15px] leading-[30px] dark:text-textGray">
              بعد از تجربه نامطلوب تحریم کاربران ایرانی، توسط صرافی های بین
              المللی رمز ارز، این نیاز رو در جامعه دیدیم که افراد بدون نیاز به
              مراجعه به صرافی و شاید به نوعی راحت تر از قبل تحریم ها، بتوانند
              معاملات خودشون رو کنترل کنند، یا استراتژی هاشون رو به شکل ربات
              معامله گر به صرافی مد نظرشون متصل کنن، برای همین منظور{' '}
              <span className="font-bold text-purple-500">باتمیکس</span> رو
              ساختیم. اما در ادامه تصمیم گرفتیم ربات و استراتژی های مختلف رو در
              اختیار شما عزیزان بزاریم همچنین میتونید در کانال تلگراممون از
              تحلیل های معتبر که حاصل سالها تجربه میباشد استفاده کنید.
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <div
              dir="ltr"
              className="flex flex-col items-center gap-6 text-center customMd:items-start customMd:text-start"
            >
              <div>
                <h2 className="text-4xl font-bold">Botmix</h2>
                <div className="mt-3 flex items-center gap-2 text-3xl">
                  <IconButton color="warning">
                    <MailIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton color="info">
                    <TelegramIcon fontSize="inherit" />
                  </IconButton>

                  <IconButton color="success">
                    <PhoneEnabledIcon fontSize="inherit" />
                  </IconButton>

                  <IconButton color="error">
                    <YouTubeIcon fontSize="inherit" />
                  </IconButton>
                </div>
              </div>

              <div className="space-y-2 text-sm tracking-[1px]">
                <p>۰۹۹۶۲۵۶۳۴۰۰</p>
                <p>۰۱۳۴۳۴۳۰۰۴۴</p>
              </div>

              <div className="flex items-start gap-2">
                <address className="text-sm not-italic">
                  گیلان / رشت - بلوار دیلمان - خیابان یلدا -کوچه توحید1 -
                  آپارتمان پارسا (پلاک 19)
                </address>
                <LocationOnIcon color="secondary" />
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <p className="border-t border-gray-300 pt-4 text-center text-sm text-gray-500 dark:border-gray-800">
              تمامی حقوق برای Botmix محفوظ است
            </p>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
}

export default Footer;
