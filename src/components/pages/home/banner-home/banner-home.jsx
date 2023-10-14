import { Link } from 'react-router-dom';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

// MUi
import { CircularProgress, Grid, Tooltip } from '@mui/material';

// Redux
import { useSelector } from 'react-redux';

// Assets
import homeBannerBg from '../../../../assets/images/homeBannerBg.png';
import { BannerHomeStyle } from './banner-home.style';
import binanceLogo from '../../../../assets/icons/binance.svg';
import bingXLogo from '../../../../assets/icons/bingx.com.svg';
import byBitLogo from '../../../../assets/icons/bybit-logo.svg';
import kuCoinLogo from '../../../../assets/icons/kcs.svg';
import wallexLogo from '../../../../assets/icons/wallex-logo-v-light.svg';

// Components
import LinkComponent from '../../../form-group/link-component/link-component';

function BannerHome({ detail, loading }) {
   const isLogin = useSelector(state => state.loginStatusReducer);

   return (
      <BannerHomeStyle>
         <div className="mt-1 customMd:mt-[100px]">
            <Grid container spacing={{ xs: 15, md: 2 }}>
               <Grid item xs={12} md={6}>
                  <div>
                     <p className="mt-6 font-lalezar text-[65px] customSm:mt-[60px] customSm:text-start customSm:text-[80px] customSm:leading-[100px]">
                        <span id="linear-text" className="whitespace-nowrap">
                           باتمیکس
                        </span>
                     </p>
                     <ul className=" mt-6 list-disc space-y-2 pr-4 text-sm customSm:text-base">
                        <li>ربات تریدر اتوماتیک تکنیکال و آربیتراژ</li>
                        <li>رابط تریدینگ ویو به صرافی و تلگرام</li>
                        <li>خدمات برنامه نویسی بازار رمزارزها</li>
                        <li>سبدگردانی و کپی ترید اسپات</li>
                     </ul>
                     {!isLogin && (
                        <div className="mt-6 flex items-center justify-center gap-2 customSm:mt-12 customSm:justify-start customSm:gap-5">
                           <Link to="/login" state="register">
                              <LinkComponent className="px-10 customSm:px-[82px]">ثبت نام</LinkComponent>
                           </Link>

                           <Link to="/login">
                              <LinkComponent className="px-6 customSm:px-[65px]" color="green">
                                 ورود
                              </LinkComponent>
                           </Link>
                        </div>
                     )}

                     <div className="mt-12 customSm:mt-24">
                        <div className="flex flex-wrap items-center gap-3">
                           <p className="whitespace-nowrap">صرافی های متصل :</p>

                           <div className="flex items-center gap-4">
                              <Tooltip title="Binance" arrow placement="top">
                                 <div className="h-8 w-8 cursor-pointer transition-all duration-300 hover:scale-[1.2]">
                                    <img src={binanceLogo} alt="exchange" className="h-full w-full" />
                                 </div>
                              </Tooltip>
                              <Tooltip title="kuCoin" arrow placement="top">
                                 <div className="h-8 w-8 cursor-pointer transition-all duration-300 hover:scale-[1.2]">
                                    <img src={kuCoinLogo} alt="exchange" className="h-full w-full" />
                                 </div>
                              </Tooltip>

                              <Tooltip title="bingX" arrow placement="top">
                                 <div className="h-10 w-10 cursor-pointer transition-all duration-300 hover:scale-[1.2]">
                                    <img src={bingXLogo} alt="exchange" className="h-full w-full" />
                                 </div>
                              </Tooltip>
                              <Tooltip title="wallex" arrow placement="top">
                                 <div className="flex h-10 w-10 cursor-pointer transition-all duration-300 hover:scale-[1.2]">
                                    <img src={wallexLogo} alt="exchange" className="h-full w-full" />
                                 </div>
                              </Tooltip>
                              <Tooltip title="byBit" arrow placement="top">
                                 <div className="h-10 w-10 cursor-pointer transition-all duration-300 hover:scale-[1.2]">
                                    <img src={byBitLogo} alt="exchange" className="h-full w-full" />
                                 </div>
                              </Tooltip>
                           </div>
                        </div>
                     </div>
                  </div>
               </Grid>
               <Grid item xs={12} md={6}>
                  <div>
                     <div>
                        <img className="mx-auto w-full rounded-[60px]" src={homeBannerBg} alt="first pic" />
                     </div>

                     <div className="mt-24 px-4 py-2" id="home_card" data-aos="fade-up" data-aos-duration="1500">
                        <p className="border-b-[1px] border-solid border-stone-600 pb-3 text-lg font-bold">
                           محصول پیشنهادی باتمیکس
                        </p>
                        <div className="mt-4 flex items-center justify-between gap-6 pb-12 customMd:gap-16" dir="ltr">
                           {loading ? (
                              <div className="flex items-center justify-center">
                                 <CircularProgress />
                              </div>
                           ) : (
                              <>
                                 <div className="space-y-2">
                                    <div className="flex flex-wrap gap-2">
                                       <p className="whitespace-nowrap text-textGray">Name :</p>
                                       <p>{detail?.name}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                       <p className="whitespace-nowrap text-textGray">Total profit :</p>
                                       <p>{detail?.total_profit}%</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                       <p className="whitespace-nowrap text-textGray">WinRate :</p>
                                       <p>{detail?.winRate}%</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                       <p className="whitespace-nowrap text-textGray">DrawDown :</p>
                                       <p>{detail?.drawdown}%</p>
                                    </div>
                                 </div>

                                 <div className="w-[70px] customSm:max-w-[250px] customSm:grow">
                                    <ResponsiveContainer width="100%" height={100}>
                                       <AreaChart data={detail?.chart || []}>
                                          <defs>
                                             <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#48BB78" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#48BB78" stopOpacity={0} />
                                             </linearGradient>
                                          </defs>

                                          <Area
                                             type="monotone"
                                             dataKey="profit"
                                             stroke="#48BB78"
                                             strokeWidth="3px"
                                             fillOpacity={1}
                                             fill="url(#colorUv)"
                                          />
                                       </AreaChart>
                                    </ResponsiveContainer>
                                 </div>
                              </>
                           )}
                        </div>
                        <div className="absolute inset-x-0 bottom-[-13%] flex justify-center">
                           <Link to={`/robotFunctionality/${detail?.id}`} state="register">
                              <LinkComponent className="px-16">ایجاد سفارش</LinkComponent>
                           </Link>
                        </div>
                     </div>
                  </div>
               </Grid>
            </Grid>
         </div>
      </BannerHomeStyle>
   );
}

export default BannerHome;
