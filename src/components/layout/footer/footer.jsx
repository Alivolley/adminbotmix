import { Link } from 'react-router-dom';

// Mui
import { Grid, IconButton } from '@mui/material';

// Icons
import MailIcon from '@mui/icons-material/Mail';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import YouTubeIcon from '@mui/icons-material/YouTube';

// Assets
import logo from '../../../assets/images/logo.png';

function Footer() {
   return (
      <footer className="border-t border-gray-300 bg-bgPrimary p-7 dark:border-gray-600 dark:bg-bgPrimaryDark">
         <div className="mx-auto px-5">
            <Grid container rowSpacing={5} columnSpacing={3}>
               <Grid item xs={12} md={5}>
                  <div>
                     <Link to="/" className="float-right ml-3 mt-3 flex w-fit items-center">
                        <div className="h-32 w-32">
                           <img src={logo} alt="botmix" className="h-full w-full" />
                        </div>
                     </Link>

                     <p className="text-justify text-[15px] leading-[30px] dark:text-textGray">
                        وبسایت <span className="font-bold text-secondaryBlue"> باتمیکس</span> ارائه دهنده ربات تریدر
                        هوشمند ( تکنیکال و آربیتراژ اتوماتیک ) و ربات کمک تریدر و واسط تریدینگ ، خدمات برنامه نویسی
                        بازارهای مالی ، میباشد . ما با تمرکز بر سه ویژگی، یعنی: قابل اعتماد بودن، خدمات مشتری و منحصر به
                        فرد بودن، در کنار شما خواهیم بود. ایده باتمیکس در آپریل 2022( فروردین 1402 ) ایجاد و در مارس
                        2023 ( اسفند 1402) عمومی و در دسترس کاربران قرار گرفت . هنگامی که باتمیکس عمومی شد ، شوق یادگیری
                        مطالب جدید در حوزه بازارهای مالی در تیم ما بیشتر شد و موجب شد تا به اینجای کار چنین خدماتی رو
                        بصورت صادقانه و شفاف ارائه دهیم. ما اکنون در سرتاسر ایران به مشتریانمان خدمات ارائه می دهیم، و
                        از اینکه توانستیم بخشی از نیازهای جامعه محترم تریدر رو برطرف کنیم، بسیار خوشحالیم. امیدواریم از
                        محصولات ما به همان اندازه که ما از ارائه آن‌ها به شما لذت می‌بریم لذت ببرید. اگر سوال یا نظری یا
                        انتقادی دارید، لطفا با ما تماس بگیرید.
                     </p>
                  </div>
               </Grid>

               <Grid item xs={12} md={3}>
                  <div className="flex h-full flex-col items-center border-gray-300 text-center dark:border-gray-600 customMd:border-x">
                     <h2 className="mb-10 text-xl font-bold">خدمات مشتریان</h2>

                     <div className="flex flex-col gap-4">
                        <Link
                           to="/products"
                           state="portfolio_management"
                           className="font-bold text-primaryBlue transition-all duration-150 hover:text-secondaryBlue"
                        >
                           ربات تریدر
                        </Link>
                        <Link
                           to="/products"
                           className="font-bold text-primaryBlue transition-all duration-150 hover:text-secondaryBlue"
                        >
                           ربات واسط api
                        </Link>
                        <Link
                           to="/growableCurrencies"
                           className="font-bold text-primaryBlue transition-all duration-150 hover:text-secondaryBlue"
                        >
                           قیمت رمزارزها
                        </Link>

                        <Link
                           to="/tutorials"
                           className="font-bold text-primaryBlue transition-all duration-150 hover:text-secondaryBlue"
                        >
                           آموزش ها
                        </Link>
                     </div>
                  </div>
               </Grid>

               <Grid item xs={12} md={4}>
                  <div dir="ltr" className="flex flex-col items-center gap-6 text-center">
                     <div>
                        <h2 className="mb-10 text-xl font-bold">تماس با ما</h2>
                        <div className="mt-3 flex items-center gap-2 text-3xl">
                           <a href="mailto:contact@botmix.ir" target="_blank" rel="noreferrer">
                              <IconButton color="warning">
                                 <MailIcon fontSize="inherit" />
                              </IconButton>
                           </a>
                           <a href="https://t.me/Botmix_Support" target="_blank" rel="noreferrer">
                              <IconButton color="info">
                                 <TelegramIcon fontSize="inherit" />
                              </IconButton>
                           </a>
                           <a href="tel:09962563400">
                              <IconButton color="success">
                                 <PhoneEnabledIcon fontSize="inherit" />
                              </IconButton>
                           </a>
                           <a href="https://www.youtube.com/@Botmix" target="_blank" rel="noreferrer">
                              <IconButton color="error">
                                 <YouTubeIcon fontSize="inherit" />
                              </IconButton>
                           </a>
                        </div>
                     </div>

                     <p>contact@botmix.ir</p>

                     <div className="space-y-2 text-sm tracking-[1px]">
                        <p>۰۹۹۶۲۵۶۳۴۰۰</p>
                     </div>

                     <p className="text-sm">هفت روز هفته و ۲۴ ساعته پاسخگوی شما عزیزان هستیم</p>
                  </div>
               </Grid>
               <Grid item xs={12}>
                  <p className="border-t border-gray-300 pt-4 text-center text-sm text-gray-500 dark:border-gray-600">
                     تمامی حقوق برای Botmix محفوظ است
                  </p>
               </Grid>
            </Grid>
         </div>
      </footer>
   );
}

export default Footer;
