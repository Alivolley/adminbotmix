// MUI
import { Grid } from '@mui/material';

// Components
import CardWrapper from '../../components/templates/card-wrapper/card-wrapper';
import ChangePassword from '../../components/pages/profile-setting/change-password/change-password';
import ChangeEmail from '../../components/pages/profile-setting/change-email/change-email';

// Assets
import userImage from '../../assets/images/user.jpg';

function ProfileSetting() {
  return (
    <div>
      <CardWrapper>
        <div className="flex items-center gap-4">
          <img
            src={userImage}
            alt="profile"
            className="h-[51px] w-[51px] rounded-full border-[2px] border-solid border-transparent outline outline-[2px] outline-primaryBlue"
          />
          <div>
            <p>علی ازقندی</p>
            <p>alicryptovolley@gmail.com</p>
          </div>
        </div>
      </CardWrapper>

      <div className="mt-4">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CardWrapper>
              <p className="mb-[60px] text-sm font-bold">تغییر پسورد</p>
              <ChangePassword />
            </CardWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
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
