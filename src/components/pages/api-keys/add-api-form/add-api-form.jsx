import { useForm, Controller } from 'react-hook-form';

// MUi
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, FormHelperText } from '@mui/material';

// Assets
import { AddApiFormStyle } from './add-api-form.style';

// Components
import RtlProvider from '../../../layout/rtlProvider/rtlProvider';

function AddApiForm() {
  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      exchange: '',
    },
    mode: 'onTouched',
  });

  const formSubmit = data => {
    console.log(data);
  };

  return (
    <RtlProvider>
      <AddApiFormStyle>
        <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col">
          <Controller
            control={control}
            name="exchange"
            rules={{ required: 'این فیلد اجباری است' }}
            render={({ field: { onChange, value } }) => (
              <FormControl error={!!errors?.exchange} color="primaryBlue">
                <InputLabel>صرافی</InputLabel>
                <Select label="صرافی" value={value} onChange={onChange}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                {errors?.exchange && (
                  <FormHelperText>{errors?.exchange?.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />

          <Button type="submit">اضافه کردن</Button>
        </form>
      </AddApiFormStyle>
    </RtlProvider>
  );
}

export default AddApiForm;
