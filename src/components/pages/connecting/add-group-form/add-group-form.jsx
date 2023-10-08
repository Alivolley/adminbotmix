import { useForm } from 'react-hook-form';

// MUI
import { TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Assets
import { AddGroupFormStyle } from './add-group-form.style';

// Components
import RtlProvider from '../../../layout/rtlProvider/rtlProvider';

// Apis
import useAddTelegramGroup from '../../../../apis/useAddTelegramGroup/useAddTelegramGroup';

function AddGroupForm() {
   const { isLoading: addGroupLoading, mutate: addGroup } = useAddTelegramGroup();

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      defaultValues: {
         name: '',
         groupId: '',
      },
      mode: 'onSubmit',
   });

   const formSubmit = data => {
      addGroup(data, {
         onSuccess: () => reset(),
      });
   };

   return (
      <RtlProvider>
         <AddGroupFormStyle>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit(formSubmit)} id="inputNumber">
               <TextField
                  label="نام گروه"
                  variant="outlined"
                  color="primaryBlue"
                  type="text"
                  {...register('name', {
                     required: {
                        value: true,
                        message: 'این فیلد اجباری است',
                     },
                  })}
                  error={!!errors?.name}
                  helperText={errors?.name?.message}
                  disabled={addGroupLoading}
               />

               <TextField
                  label="آیدی گروه"
                  variant="outlined"
                  color="primaryBlue"
                  type="number"
                  {...register('groupId', {
                     required: {
                        value: true,
                        message: 'این فیلد اجباری است',
                     },
                  })}
                  error={!!errors?.groupId}
                  helperText={errors?.groupId?.message}
                  disabled={addGroupLoading}
               />

               <LoadingButton type="submit" variant="contained" color="success" loading={addGroupLoading}>
                  ثبت
               </LoadingButton>
            </form>
         </AddGroupFormStyle>
      </RtlProvider>
   );
}

export default AddGroupForm;
