import { useForm } from 'react-hook-form';

// MUI
import { Button, TextField } from '@mui/material';

// Icons
import MailIcon from '@mui/icons-material/Mail';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Assets
import { ContactUsStyle } from './contactUs.style';

// Components
import RtlProvider from '../../components/layout/rtlProvider/rtlProvider';

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      contactDetail: '',
      textMessage: '',
    },
    mode: 'onSubmit',
  });

  const formSubmit = data => {
    console.log(data);
  };

  return (
    <ContactUsStyle className="my-20 min-h-screen">
      <div className="flex flex-col items-center text-center">
        <p className="border-b border-secondaryBlue pb-2 font-lalezar text-3xl text-secondaryBlue">
          راه های ارتباطی
        </p>
        <div className="mt-7 space-y-3">
          <div className="flex items-center justify-center gap-3">
            <TelegramIcon fontSize="medium" color="primaryBlue" />
            <p>پشتیبانی تلگرام</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <MailIcon fontSize="medium" color="primaryBlue" />
            <p>contact@botmix.ir</p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <PhoneEnabledIcon fontSize="medium" color="primaryBlue" />
            <p>09962563400</p>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center text-center">
        <p className="border-b border-secondaryBlue pb-2 font-lalezar text-3xl text-secondaryBlue">
          آدرس
        </p>
        <div className="mt-7 space-y-3">
          <div className="flex items-center gap-3">
            <LocationOnIcon fontSize="medium" color="primaryBlue" />
            <address className="text-sm not-italic">
              گیلان / رشت - بلوار دیلمان - خیابان یلدا -کوچه توحید1 - آپارتمان
              پارسا (پلاک 19)
            </address>
          </div>

          <div className="flex items-center justify-center gap-3">
            <PhoneEnabledIcon fontSize="medium" color="primaryBlue" />
            <p>01343430044</p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center text-center">
        <p className="border-b border-secondaryBlue pb-2 font-lalezar text-3xl text-secondaryBlue">
          ارسال مستقیم پیام
        </p>
        <RtlProvider>
          <form
            className="mt-7 flex w-[230px] flex-col space-y-5 customSm:w-[300px]"
            onSubmit={handleSubmit(formSubmit)}
            id="detail_form"
          >
            <TextField
              label="اطلاعات تماس ( شماره یا ایمیل )"
              variant="outlined"
              color="primaryBlue"
              InputLabelProps={{ style: { fontSize: '14px' } }}
              {...register('contactDetail', {
                required: {
                  value: true,
                  message: 'این فیلد اجباری است',
                },
              })}
              error={!!errors?.contactDetail}
              helperText={errors?.contactDetail?.message}
            />
            <TextField
              label="متن پیام"
              variant="outlined"
              color="primaryBlue"
              InputLabelProps={{ style: { fontSize: '14px' } }}
              multiline
              minRows={5}
              {...register('textMessage', {
                required: {
                  value: true,
                  message: 'این فیلد اجباری است',
                },
              })}
              error={!!errors?.textMessage}
              helperText={errors?.textMessage?.message}
            />
            <Button
              variant="contained"
              className="!font-vazir"
              type="submit"
              color="primaryBlue"
              size="large"
            >
              ارسال
            </Button>
          </form>
        </RtlProvider>
      </div>
    </ContactUsStyle>
  );
}

export default ContactUs;
