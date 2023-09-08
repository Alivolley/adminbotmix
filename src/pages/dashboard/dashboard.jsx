// MUI
import { Grid } from '@mui/material';

// Icon
import WalletIcon from '@mui/icons-material/Wallet';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import GroupsIcon from '@mui/icons-material/Groups';

// Components
import { CircularProgressbar } from 'react-circular-progressbar';
import CardWrapper from '../../components/card-wrapper/card-wrapper';
import AlertComponent from '../../components/alert-component/alert-component';
import InfoCard from '../../components/pages/dashboard/info-card/info-card';

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
                      stroke: '#4FD1C5',
                    },
                    trail: {
                      stroke: '#A0AEC0',
                    },
                    text: {
                      fill: '#4FD1C5',
                      fontSize: '30px',
                    },
                  }}
                />
              }
            >
              <div className="flex flex-col gap-2 text-[14px]">
                <p className="font-bold text-textGray">پلن طلایی</p>
                <p>تعداد روز های باقی مانده :</p>
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
                  <p className="text-[13px] font-bold text-textGray">
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
    </div>
  );
}

export default Dashboard;
