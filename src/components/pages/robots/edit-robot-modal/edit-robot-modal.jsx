import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';

// MUI
import {
   Checkbox,
   Collapse,
   Dialog,
   FormControl,
   FormControlLabel,
   InputAdornment,
   Radio,
   RadioGroup,
   Slider,
   TextField,
   Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Redux
import { useSelector } from 'react-redux';

// Assets
import RtlProvider from '../../../layout/rtlProvider/rtlProvider';
import { EditRobotModalStyle } from './edit-robot-modal.style';

// Apis
import useEditRobot from '../../../../apis/robots/useEditRobot/useEditRobot';

function EditRobotModal({ show, closeModal, detail }) {
   const theme = useSelector(state => state.themeReducer);
   const { mutate: editRobotMutate, isLoading: editRobotIsLoading } = useEditRobot(detail?.id);

   const {
      handleSubmit,
      register,
      watch,
      control,
      setValue,
      formState: { errors },
   } = useForm({
      defaultValues: {
         fund_type: 'percent',
         fund_value: '',
         enterLeverage: false,
         custom_leverage: 1,
      },
      mode: 'onSubmit',
   });

   const chosenFundType = watch('fund_type');
   const isEnteredLeverage = watch('enterLeverage');

   useEffect(() => {
      setValue('fund_type', detail?.fund_type);
      setValue('fund_value', detail?.fund_value);
      if (detail?.custom_leverage) {
         setValue('enterLeverage', true);
         setValue('custom_leverage', detail?.custom_leverage);
      } else {
         setValue('enterLeverage', false);
      }
   }, [detail]);

   const formSubmit = data => {
      const newData = {
         ...data,
         action: 'edit',
         botId: detail?.id,
         custom_leverage: isEnteredLeverage ? data?.custom_leverage : null,
      };

      editRobotMutate(newData, {
         onSuccess: () => {
            closeModal();
         },
      });
   };

   return (
      <Dialog
         fullWidth
         open={show}
         onClose={closeModal}
         sx={{
            '& > div': {
               '& > div': {
                  boxShadow: 'none',
                  backgroundColor: theme === 'dark' ? '#212836' : '#ffffff',
                  backgroundImage: 'none',
                  padding: '10px',
               },
            },
         }}
      >
         <RtlProvider>
            <EditRobotModalStyle className="p-5">
               <p className="mb-8 border-b border-gray-500 pb-5 text-xl">ویرایش ربات {detail?.name}</p>
               <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col gap-6">
                  <div className="flex flex-wrap items-center gap-2 customSm:gap-4">
                     <p>نوع سرمایه :</p>
                     <Controller
                        control={control}
                        name="fund_type"
                        rules={{ required: 'این فیلد اجباری است' }}
                        render={({ field: { onChange, value } }) => (
                           <FormControl>
                              <RadioGroup row value={value} onChange={onChange}>
                                 <FormControlLabel
                                    value="percent"
                                    control={<Radio size="medium" color="primaryBlue" />}
                                    label={
                                       <Typography variant="body2" sx={{ fontSize: '14px' }}>
                                          درصدی
                                       </Typography>
                                    }
                                 />

                                 <FormControlLabel
                                    value="static"
                                    control={<Radio size="medium" color="primaryBlue" />}
                                    label={
                                       <Typography variant="body2" sx={{ fontSize: '14px' }}>
                                          مقدار ثابت
                                       </Typography>
                                    }
                                 />
                              </RadioGroup>
                           </FormControl>
                        )}
                     />
                  </div>

                  <div id="inputNumber">
                     <TextField
                        label="مقدار سرمایه"
                        variant="outlined"
                        color="primaryBlue"
                        fullWidth
                        type="number"
                        {...register('fund_value', {
                           required: {
                              value: true,
                              message: 'این فیلد اجباری است',
                           },
                        })}
                        error={!!errors?.fund_value}
                        helperText={errors?.fund_value?.message}
                        InputProps={{
                           endAdornment: (
                              <InputAdornment position="start">
                                 {chosenFundType === 'percent' ? '٪ درصد' : '$ تتر'}
                              </InputAdornment>
                           ),
                        }}
                     />
                  </div>
                  {!detail?.isSabad && (
                     <>
                        <div>
                           <Controller
                              control={control}
                              name="enterLeverage"
                              render={({ field: { onChange, value } }) => (
                                 <FormControlLabel
                                    control={<Checkbox checked={value} color="primaryBlue" />}
                                    label="اهرم شخصی ( اختیاری )"
                                    value={value}
                                    onChange={onChange}
                                 />
                              )}
                           />
                           <p className="text-[13px] text-gray-400">
                              ربات باتمیکس با مدیریت سرمایه بصورت خودکار اهرم معاملات را ارسال میکند, اگر میخواهید
                              رباتتان با اهرم شخصی شما کار کند, این مقدار را وارد کنید, درغیر این صورت رباتتان از مدیریت
                              سرمایه پیشنهادی باتمیکس استفاده خواهد کرد.
                           </p>
                        </div>
                        <Collapse in={isEnteredLeverage}>
                           <div className="p-6">
                              <Controller
                                 control={control}
                                 name="custom_leverage"
                                 render={({ field: { onChange, value } }) => (
                                    <Slider
                                       value={value}
                                       onChange={onChange}
                                       valueLabelDisplay="on"
                                       color="primaryBlue"
                                       min={1}
                                       max={Number(detail?.max_allowed_leverage)}
                                    />
                                 )}
                              />
                              <p className="text-left text-xs">
                                 بیشترین اهرم مجاز شما : {detail?.max_allowed_leverage}
                              </p>
                           </div>
                        </Collapse>
                     </>
                  )}

                  <LoadingButton type="submit" variant="contained" color="primaryBlue" loading={editRobotIsLoading}>
                     ویرایش
                  </LoadingButton>
               </form>
            </EditRobotModalStyle>
         </RtlProvider>
      </Dialog>
   );
}

export default EditRobotModal;
