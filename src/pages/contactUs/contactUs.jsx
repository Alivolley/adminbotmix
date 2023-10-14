import { useForm } from 'react-hook-form';

// MUI
import { TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import MailIcon from '@mui/icons-material/Mail';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

// Assets
import { ContactUsStyle } from './contactUs.style';

// Components
import RtlProvider from '../../components/layout/rtlProvider/rtlProvider';

// Apis
import useContactUs from '../../apis/contactUs/useContactUs/useContactUs';

function ContactUs() {
   const { mutate: sendContactData, isLoading: sendContactIsLoading } = useContactUs();

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      defaultValues: {
         call_info: '',
         message: '',
      },
      mode: 'onSubmit',
   });

   const formSubmit = data => {
      sendContactData(data, { onSuccess: () => reset() });
   };

   return (
      <ContactUsStyle className="my-20 min-h-screen">
         <div className="flex flex-col items-center text-center">
            <p className="border-b border-secondaryBlue pb-2 font-lalezar text-3xl text-secondaryBlue">
               راه های ارتباطی
            </p>
            <div className="mt-7 space-y-3">
               <a
                  href="https://t.me/Botmix_Support"
                  target="_blank"
                  className="flex items-center justify-center gap-3"
                  rel="noreferrer"
               >
                  <TelegramIcon fontSize="medium" color="primaryBlue" />
                  <p>پشتیبانی تلگرام</p>
               </a>
               <div className="flex items-center justify-center gap-3">
                  <MailIcon fontSize="medium" color="primaryBlue" />
                  <p>contact@botmix.ir</p>
               </div>

               <a href="tel:09962563400" className="flex items-center justify-center gap-3">
                  <PhoneEnabledIcon fontSize="medium" color="primaryBlue" />
                  <p>09962563400</p>
               </a>
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
                     {...register('call_info', {
                        required: {
                           value: true,
                           message: 'این فیلد اجباری است',
                        },
                     })}
                     error={!!errors?.call_info}
                     helperText={errors?.call_info?.message}
                  />
                  <TextField
                     label="متن پیام"
                     variant="outlined"
                     color="primaryBlue"
                     InputLabelProps={{ style: { fontSize: '14px' } }}
                     multiline
                     minRows={5}
                     {...register('message', {
                        required: {
                           value: true,
                           message: 'این فیلد اجباری است',
                        },
                     })}
                     error={!!errors?.message}
                     helperText={errors?.message?.message}
                  />
                  <LoadingButton
                     variant="contained"
                     className="!font-vazir"
                     type="submit"
                     color="primaryBlue"
                     size="large"
                     loading={sendContactIsLoading}
                  >
                     ارسال
                  </LoadingButton>
               </form>
            </RtlProvider>
         </div>
      </ContactUsStyle>
   );
}

export default ContactUs;
