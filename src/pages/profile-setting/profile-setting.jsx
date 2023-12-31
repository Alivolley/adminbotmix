// MUI
import { Grid } from '@mui/material';

// Redux
import { useSelector } from 'react-redux';

// Icons
import PersonIcon from '@mui/icons-material/Person';

// Components
import CardWrapper from '../../components/templates/card-wrapper/card-wrapper';
import ChangePassword from '../../components/pages/profile-setting/change-password/change-password';
import ChangeEmail from '../../components/pages/profile-setting/change-email/change-email';

function ProfileSetting() {
   const userEmail = useSelector(state => state.emailReducer);

   return (
      <div>
         <CardWrapper>
            <div className="flex items-center justify-end gap-2">
               <p className="text-xs customSm:text-base">{userEmail?.value}</p>
               <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full border-[2px] border-primaryBlue">
                  <PersonIcon fontSize="large" />
               </div>
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
