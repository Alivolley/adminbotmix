import { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

// MUI
import { Grid, IconButton } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';

// Icon
import WalletIcon from '@mui/icons-material/Wallet';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import GroupsIcon from '@mui/icons-material/Groups';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// Components
import CardWrapper from '../../components/templates/card-wrapper/card-wrapper';
import AlertComponent from '../../components/templates/alert-component/alert-component';
import InfoCard from '../../components/pages/dashboard/info-card/info-card';
import PieChartComponent from '../../components/pages/dashboard/pie-chart-component/pie-chart-component';
import LogsComponent from '../../components/pages/dashboard/logs-component/logs-component';
import AreaChartComponentTransform from '../../components/pages/dashboard/area-chart-component-transforms/area-chart-component-transforms';
import AreaChartComponentRobots from '../../components/pages/dashboard/area-chart-component-robots/area-chart-component-robots';

// Assets
import userImage from '../../assets/images/user.jpg';

// Apis
import useDashboard from '../../apis/useDashboard/useDashboard';
import useLogs from '../../apis/useLogs/useLogs';

function Dashboard() {
   const [chosenChart, setChosenChart] = useState('robotsHistory');

   const { data: dashboardData, isLoading: dashboardIsLoading } = useDashboard();
   const {
      data: logsData,
      isLoading: logsIsLoading,
      hasNextPage: logsHasNextPage,
      fetchNextPage: logsFetchNextPage,
      isFetchingNextPage: logsIsFetchingNextPage,
   } = useLogs();

   useEffect(() => {
      if (dashboardData?.has_history_chart) {
         setChosenChart('transformHistory');
      } else if (dashboardData?.has_bot_chart) {
         setChosenChart('robotsHistory');
      }
   }, [dashboardData]);

   const addMoreLogs = () => {
      logsFetchNextPage();
   };

   return (
      <div className="flex flex-col gap-4">
         {dashboardIsLoading ? (
            <div className="flex items-center justify-center">
               <CircularProgress />
            </div>
         ) : (
            <>
               <CardWrapper>
                  <div className="flex flex-wrap items-start gap-4">
                     <div className="flex items-center gap-4">
                        <img
                           src={userImage}
                           alt="profile"
                           className="h-[51px] w-[51px] rounded-full border-[2px] border-solid border-transparent outline outline-[2px] outline-primaryBlue"
                        />
                        <p>{dashboardData?.email}</p>
                     </div>
                     <div className="flex grow flex-col gap-2">
                        {dashboardData?.alerts?.map(item => (
                           <AlertComponent key={item?.id} type={item?.type} alertId={item?.id}>
                              {item?.text}
                           </AlertComponent>
                        ))}
                     </div>
                  </div>
               </CardWrapper>

               <div>
                  <Grid container spacing={2}>
                     <Grid item xs={12} sm={6} lg={3}>
                        <InfoCard icon={<WalletIcon fontSize="inherit" color="inherit" />}>
                           <div className="flex flex-col gap-2 text-[14px]">
                              <p className="font-bold text-textGray">شارژ حساب کاربری : </p>
                              <p>{dashboardData?.balance}</p>
                           </div>
                        </InfoCard>
                     </Grid>
                     <Grid item xs={12} sm={6} lg={3}>
                        <InfoCard
                           progress={
                              <CircularProgressbar
                                 minValue={0}
                                 maxValue={30}
                                 value={dashboardData?.paln_remain_day}
                                 text={dashboardData?.paln_remain_day}
                                 styles={{
                                    path: {
                                       stroke: '#1f7191',
                                    },
                                    trail: {
                                       stroke: '#A0AEC0',
                                    },
                                    text: {
                                       fill: '#1f7191',
                                       fontSize: '30px',
                                    },
                                 }}
                              />
                           }
                        >
                           <div className="flex flex-col gap-2 text-[14px]">
                              <p className="font-bold text-textGray">پلن {dashboardData?.plan}</p>
                              <p className="whitespace-nowrap">تعداد روز های باقی مانده :</p>
                           </div>
                        </InfoCard>
                     </Grid>
                     <Grid item xs={12} sm={6} lg={3}>
                        <InfoCard icon={<CandlestickChartIcon fontSize="inherit" color="inherit" />}>
                           <div className="flex flex-col gap-2 text-[14px]">
                              <p className="font-bold text-textGray">تعداد پوزیشن های باز :</p>
                              <p>{dashboardData?.open_positions}</p>
                           </div>
                        </InfoCard>
                     </Grid>
                     <Grid item xs={12} sm={6} lg={3}>
                        <InfoCard icon={<GroupsIcon fontSize="inherit" color="inherit" />}>
                           <div className="flex flex-col gap-2">
                              <div className="flex gap-1">
                                 <p className="whitespace-nowrap text-[13px] font-bold text-textGray">
                                    تعداد api های ثبت شده :
                                 </p>
                                 <p className="text-[12px]">{dashboardData?.api_keys_count}</p>
                              </div>

                              <div className="flex gap-1">
                                 <p className="text-[13px] font-bold text-textGray">تعداد گروه های تلگرام :</p>
                                 <p className="text-[12px]">{dashboardData?.telegram_groups_count}</p>
                              </div>
                           </div>
                        </InfoCard>
                     </Grid>
                  </Grid>
               </div>

               <div>
                  <Grid container spacing={2}>
                     <Grid item xs={12} md={8}>
                        <CardWrapper>
                           <div className="relative overflow-hidden">
                              {dashboardData?.has_history_chart && (
                                 <div
                                    className={`transition-all duration-500 ${
                                       chosenChart === 'transformHistory'
                                          ? 'visible translate-x-0 opacity-100'
                                          : 'invisible translate-x-[100%] opacity-0'
                                    }`}
                                 >
                                    <p className="mb-[60px] text-sm font-bold">سوابق ارسال ها</p>
                                    <AreaChartComponentTransform detail={dashboardData?.history_chart} />
                                 </div>
                              )}

                              {dashboardData?.has_bot_chart && (
                                 <div
                                    className={`absolute inset-0 transition-all duration-500 ${
                                       chosenChart === 'robotsHistory'
                                          ? 'visible translate-x-0 opacity-100'
                                          : 'invisible translate-x-[-100%] opacity-0'
                                    }`}
                                 >
                                    <p className="mb-[60px] text-sm font-bold">سوابق ربات ها</p>
                                    <AreaChartComponentRobots detail={dashboardData?.bot_chart} />
                                 </div>
                              )}
                           </div>
                           {dashboardData?.has_history_chart && dashboardData?.has_bot_chart && (
                              <div className="flex items-center justify-center">
                                 <IconButton
                                    onClick={() => setChosenChart('transformHistory')}
                                    disabled={chosenChart === 'transformHistory'}
                                    color="primary"
                                    size="small"
                                 >
                                    <KeyboardArrowRightIcon />
                                 </IconButton>
                                 <IconButton
                                    onClick={() => setChosenChart('robotsHistory')}
                                    disabled={chosenChart === 'robotsHistory'}
                                    color="primary"
                                    size="small"
                                 >
                                    <KeyboardArrowLeftIcon />
                                 </IconButton>
                              </div>
                           )}
                        </CardWrapper>
                     </Grid>
                     <Grid item xs={12} md={4}>
                        <CardWrapper>
                           <div className="mb-[60px] flex items-center gap-3 text-sm font-bold">
                              <div className="h-[9px] w-[9px] rounded-sm bg-[#3D92C9]" />
                              <p>سهم کاربر از سود ربات</p>
                           </div>
                           <PieChartComponent
                              hasBiggerHeight={dashboardData?.has_history_chart && dashboardData?.has_bot_chart}
                           />
                        </CardWrapper>
                     </Grid>
                  </Grid>
               </div>

               <div>
                  <CardWrapper>
                     <p className="mb-[40px] text-sm font-bold">جدول لاگ ها</p>
                     {logsIsLoading ? (
                        <div className="flex items-center justify-center">
                           <CircularProgress />
                        </div>
                     ) : (
                        <>
                           <LogsComponent detail={logsData} />
                           {logsHasNextPage && (
                              <div className="mt-10 flex items-center justify-center">
                                 <LoadingButton
                                    loading={logsIsFetchingNextPage}
                                    variant="contained"
                                    className="!font-vazir"
                                    color="primaryBlue"
                                    onClick={addMoreLogs}
                                 >
                                    بیشتر
                                 </LoadingButton>
                              </div>
                           )}
                        </>
                     )}
                  </CardWrapper>
               </div>
            </>
         )}
      </div>
   );
}

export default Dashboard;
