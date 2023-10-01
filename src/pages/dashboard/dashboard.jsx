import { CircularProgressbar } from 'react-circular-progressbar';

// MUI
import { Grid } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

// Icon
import WalletIcon from '@mui/icons-material/Wallet';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import GroupsIcon from '@mui/icons-material/Groups';

// Components
import CardWrapper from '../../components/templates/card-wrapper/card-wrapper';
import AlertComponent from '../../components/templates/alert-component/alert-component';
import InfoCard from '../../components/pages/dashboard/info-card/info-card';
import PieChartComponent from '../../components/pages/dashboard/pie-chart-component/pie-chart-component';
import AreaChartComponent from '../../components/pages/dashboard/area-chart-component/area-chart-component';
import TableComponent from '../../components/pages/dashboard/table-component/table-component';

// Assets
import userImage from '../../assets/images/user.jpg';

function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <CardWrapper>
        <div className="flex items-center gap-4">
          <img
            src={userImage}
            alt="profile"
            className="h-[51px] w-[51px] rounded-full border-[2px] border-solid border-transparent outline outline-[2px] outline-primaryBlue"
          />
          <p>علی ازقندی</p>
        </div>
      </CardWrapper>
      <div className="flex flex-col gap-2">
        <AlertComponent>شما یک پیغام لورم ایپسوم دارید</AlertComponent>
        <AlertComponent>شما یک پیغام لورم ایپسوم دارید</AlertComponent>
      </div>

      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} lg={3}>
            <InfoCard icon={<WalletIcon fontSize="inherit" color="inherit" />}>
              <div className="flex flex-col gap-2 text-[14px]">
                <p className="font-bold text-textGray">شارژ حساب کاربری : </p>
                <p>۲۳۵۰۰۰</p>
              </div>
            </InfoCard>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <InfoCard
              progress={
                <CircularProgressbar
                  minValue={0}
                  maxValue={30}
                  value={20}
                  text="۲۰"
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
                <p className="font-bold text-textGray">پلن طلایی</p>
                <p className="whitespace-nowrap">تعداد روز های باقی مانده :</p>
              </div>
            </InfoCard>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <InfoCard
              icon={<CandlestickChartIcon fontSize="inherit" color="inherit" />}
            >
              <div className="flex flex-col gap-2 text-[14px]">
                <p className="font-bold text-textGray">
                  تعداد پوزیشن های باز :
                </p>
                <p>۳۷</p>
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
                  <p className="text-[12px]">۱۲۳</p>
                </div>

                <div className="flex gap-1">
                  <p className="text-[13px] font-bold text-textGray">
                    تعداد گروه های تلگرام :
                  </p>
                  <p className="text-[12px]">۳۷</p>
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
              <p className="mb-[60px] text-sm font-bold">سوابق ارسال ها</p>
              <AreaChartComponent />
            </CardWrapper>
          </Grid>
          <Grid item xs={12} md={4}>
            <CardWrapper>
              <div className="mb-[60px] flex items-center gap-3 text-sm font-bold">
                <div className="h-[9px] w-[9px] rounded-sm bg-[#143542]" />
                <p>سهم کاربر از سود ربات</p>
              </div>
              <PieChartComponent />
            </CardWrapper>
          </Grid>
        </Grid>
      </div>

      <div>
        <CardWrapper>
          <p className="mb-[40px] text-sm font-bold">جدول آمارها</p>
          <TableComponent />
          <div className="mt-6 flex items-center justify-center">
            <LoadingButton
              loading={false}
              variant="contained"
              className="!font-vazir"
              color="primaryBlue"
            >
              بیشتر
            </LoadingButton>
          </div>
        </CardWrapper>
      </div>
    </div>
  );
}

export default Dashboard;
