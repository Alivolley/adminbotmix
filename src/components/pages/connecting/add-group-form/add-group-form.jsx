import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import RtlProvider from '../../../layout/rtlProvider/rtlProvider';
import { AddGroupFormStyle } from './add-group-form.style';

function AddGroupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      groupName: '',
      groupId: '',
    },
    mode: 'onTouched',
  });

  const formSubmit = data => {
    console.log(data);
  };

  return (
    <RtlProvider>
      <AddGroupFormStyle>
        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit(formSubmit)}
        >
          <TextField
            label="نام گروه"
            variant="outlined"
            color="primaryBlue"
            type="text"
            {...register('groupName', {
              required: {
                value: true,
                message: 'این فیلد اجباری است',
              },
            })}
            error={!!errors?.groupName}
            helperText={errors?.groupName?.message}
          />

          <TextField
            label="آیدی گروه"
            variant="outlined"
            color="primaryBlue"
            type="text"
            {...register('groupId', {
              required: {
                value: true,
                message: 'این فیلد اجباری است',
              },
            })}
            error={!!errors?.groupId}
            helperText={errors?.groupId?.message}
          />

          <Button type="submit" variant="contained" color="success">
            ثبت
          </Button>
        </form>
      </AddGroupFormStyle>
    </RtlProvider>
  );
}

export default AddGroupForm;
