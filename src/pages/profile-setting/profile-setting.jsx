// MUI
import { Grid } from '@mui/material';

// Icons
import PersonIcon from '@mui/icons-material/Person';

// Components
import CardWrapper from '../../components/templates/card-wrapper/card-wrapper';
import ChangePassword from '../../components/pages/profile-setting/change-password/change-password';
import ChangeEmail from '../../components/pages/profile-setting/change-email/change-email';

function ProfileSetting() {
   return (
      <div>
         <CardWrapper>
            <div className="flex items-center gap-3">
               <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full border-[2px] border-primaryBlue">
                  <PersonIcon fontSize="large" />
               </div>
               <p className="text-xs customSm:text-base">
                  {/* {dashboardData?.email} */}
                  alicryptovolley@gmail.com
               </p>
            </div>
         </CardWrapper>

         <div className="mt-4">
            <Grid container spacing={2}>
               <Grid item xs={12} sm={6}>
                  <CardWrapper>
                     <p className="mb-[60px] text-sm font-bold">تغییر پسورد</p>
                     <ChangePassword />
                  </CardWrapper>
               </Grid>
               <Grid item xs={12} sm={6}>
                  <CardWrapper>
                     <p className="mb-[60px] text-sm font-bold">تغییر ایمیل</p>
                     <ChangeEmail />
                  </CardWrapper>
               </Grid>
            </Grid>
         </div>
      </div>
   );
}

export default ProfileSetting;
