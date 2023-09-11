import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

// MUi
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Chip,
  Slider,
} from '@mui/material';

// Assets
import { AddApiFormStyle } from './add-api-form.style';

// Components
import RtlProvider from '../../../layout/rtlProvider/rtlProvider';
import AddCurrencyInput from '../add-currency-input/add-currency-input';

function AddApiForm() {
  const [currencyList, setCurrencyList] = useState([]);

  const {
    handleSubmit,
    register,
    watch,
    getValues,
    control,
    formState: { errors, submitCount },
  } = useForm({
    defaultValues: {
      exchange: '',
      trade_type: 'future',
      margin_type: 'isolated',
      api_key: '',
      api_secret: '',
      pass_phrase: '',
      leverage_check: false,
      leverage_slide: 10,
    },
    mode: 'onTouched',
  });

  const chosenExchange = watch('exchange');
  const hasLeverage = watch('leverage_check');

  const formSubmit = data => {
    console.log(data);
  };

  const deleteFromCurrencyList = item => {
    setCurrencyList(prev => prev?.filter(prevItem => prevItem !== item));
  };

  const getCustomLabelForSlider = () => {
    const value = getValues('leverage_slide');
    return `${value} X`;
  };

  return (
    <RtlProvider>
      <AddApiFormStyle>
        <p className="mb-8">اضافه کردن کلید api</p>
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="flex flex-col gap-4"
        >
          <Controller
            control={control}
            name="exchange"
            rules={{ required: 'این فیلد اجباری است' }}
            render={({ field: { onChange, value } }) => (
              <FormControl error={!!errors?.exchange} color="primaryBlue">
                <InputLabel>صرافی</InputLabel>
                <Select
                  label="صرافی"
                  value={value}
                  onChange={newValue => {
                    onChange(newValue);
                  }}
                >
                  <MenuItem value="binance">
                    <p className="w-full text-left">Binance</p>
                  </MenuItem>
                  <MenuItem value="kucoin">
                    <p className="w-full text-left">Kucoin</p>
                  </MenuItem>
                  <MenuItem value="bybit">
                    <p className="w-full text-left">Bybit</p>
                  </MenuItem>
                  <MenuItem value="wallex">
                    <p className="w-full text-left">Wallex</p>
                  </MenuItem>
                  <MenuItem value="bingx">
                    <p className="w-full text-left">Bingx</p>
                  </MenuItem>
                </Select>
                {errors?.exchange && (
                  <FormHelperText>{errors?.exchange?.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />
          {chosenExchange && (
            <>
              {(chosenExchange === 'binance' ||
                chosenExchange === 'kucoin' ||
                chosenExchange === 'bybit' ||
                chosenExchange === 'bingx') && (
                <div dir="ltr">
                  <Controller
                    control={control}
                    name="trade_type"
                    rules={{ required: 'این فیلد اجباری است' }}
                    render={({ field: { onChange, value } }) => (
                      <FormControl>
                        <RadioGroup row value={value} onChange={onChange}>
                          <FormControlLabel
                            value="future"
                            control={<Radio size="small" />}
                            label={
                              <Typography
                                variant="body2"
                                sx={{ fontSize: '12px' }}
                              >
                                Future
                              </Typography>
                            }
                          />
                          {chosenExchange !== 'bingx' && (
                            <FormControlLabel
                              value="spot"
                              control={<Radio size="small" />}
                              label={
                                <Typography
                                  variant="body2"
                                  sx={{ fontSize: '12px' }}
                                >
                                  Spot
                                </Typography>
                              }
                            />
                          )}
                          {chosenExchange !== 'bingx' && (
                            <FormControlLabel
                              value="future_testnet"
                              control={<Radio size="small" />}
                              label={
                                <Typography
                                  variant="body2"
                                  sx={{ fontSize: '12px' }}
                                >
                                  Future testnet
                                </Typography>
                              }
                            />
                          )}
                          {chosenExchange !== 'bingx' && (
                            <FormControlLabel
                              value="spot_testnet"
                              control={<Radio size="small" />}
                              label={
                                <Typography
                                  variant="body2"
                                  sx={{ fontSize: '12px' }}
                                >
                                  Spot testnet
                                </Typography>
                              }
                            />
                          )}
                        </RadioGroup>
                      </FormControl>
                    )}
                  />
                </div>
              )}

              {(chosenExchange === 'binance' ||
                chosenExchange === 'kucoin' ||
                chosenExchange === 'bybit' ||
                chosenExchange === 'wallex' ||
                chosenExchange === 'bingx') && (
                <TextField
                  label="API Key"
                  variant="outlined"
                  color="primaryBlue"
                  type="text"
                  {...register('api_key', {
                    required: {
                      value: true,
                      message: 'این فیلد اجباری است',
                    },
                    minLength: {
                      value: 6,
                      message: 'کلید api باید بیش از ۶ حرف باشد',
                    },
                  })}
                  error={!!errors?.api_key}
                  helperText={errors?.api_key?.message}
                />
              )}

              {(chosenExchange === 'binance' ||
                chosenExchange === 'kucoin' ||
                chosenExchange === 'bybit' ||
                chosenExchange === 'bingx') && (
                <TextField
                  label="API Secret"
                  variant="outlined"
                  color="primaryBlue"
                  type="text"
                  {...register('api_secret', {
                    required: {
                      value: true,
                      message: 'این فیلد اجباری است',
                    },
                    minLength: {
                      value: 6,
                      message: 'api secret باید بیش از ۶ حرف باشد',
                    },
                  })}
                  error={!!errors?.api_secret}
                  helperText={errors?.api_secret?.message}
                />
              )}

              {chosenExchange === 'kucoin' && (
                <TextField
                  label="Pass phrase"
                  variant="outlined"
                  color="primaryBlue"
                  type="text"
                  {...register('pass_phrase', {
                    required: {
                      value: true,
                      message: 'این فیلد اجباری است',
                    },
                    minLength: {
                      value: 6,
                      message: 'Pass phrase باید بیش از ۶ حرف باشد',
                    },
                  })}
                  error={!!errors?.pass_phrase}
                  helperText={errors?.pass_phrase?.message}
                />
              )}

              {(chosenExchange === 'binance' ||
                chosenExchange === 'bybit' ||
                chosenExchange === 'bingx') && (
                <>
                  <FormControlLabel
                    control={<Checkbox defaultChecked={hasLeverage} />}
                    label={
                      <Typography variant="body2" sx={{ fontSize: '14px' }}>
                        تنظیم اهرم و مارجین
                      </Typography>
                    }
                    {...register('leverage_check')}
                  />

                  <Accordion
                    className="!bg-inherit !bg-none !text-inherit "
                    sx={{
                      boxShadow: 'none',
                      '&.MuiAccordion-root:before': {
                        display: 'none',
                      },
                    }}
                    expanded={hasLeverage}
                  >
                    <AccordionSummary sx={{ display: 'none' }} />

                    <AccordionDetails>
                      <div className="flex flex-col gap-4">
                        <Controller
                          control={control}
                          name="margin_type"
                          rules={{ required: 'این فیلد اجباری است' }}
                          render={({ field: { onChange, value } }) => (
                            <FormControl>
                              <FormLabel className="!text-sm">
                                نوع Margin :
                              </FormLabel>
                              <RadioGroup row value={value} onChange={onChange}>
                                <FormControlLabel
                                  value="isolated"
                                  control={<Radio size="small" />}
                                  label={
                                    <Typography
                                      variant="body2"
                                      sx={{ fontSize: '14px' }}
                                    >
                                      Isolated
                                    </Typography>
                                  }
                                />
                                <FormControlLabel
                                  value="crossed"
                                  control={<Radio size="small" />}
                                  label={
                                    <Typography
                                      variant="body2"
                                      sx={{ fontSize: '14px' }}
                                    >
                                      Crossed
                                    </Typography>
                                  }
                                />
                              </RadioGroup>
                            </FormControl>
                          )}
                        />

                        <div className="space-y-2">
                          <AddCurrencyInput
                            currencyList={currencyList}
                            setCurrencyList={setCurrencyList}
                            submitCount={submitCount}
                          />
                          <div>
                            {currencyList?.map(item => (
                              <Chip
                                key={item?.id}
                                label={item?.label}
                                variant="outlined"
                                onDelete={() => deleteFromCurrencyList(item)}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="space-y-10">
                          <p>اهرم :</p>

                          <div className="flex items-center gap-6">
                            <p>1</p>
                            <Slider
                              min={1}
                              max={125}
                              defaultValue={10}
                              valueLabelDisplay="on"
                              valueLabelFormat={getCustomLabelForSlider}
                              {...register('leverage_slide')}
                            />
                            <p>125</p>
                          </div>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </>
              )}
            </>
          )}

          <Button type="submit" variant="contained">
            اضافه کردن
          </Button>
        </form>
      </AddApiFormStyle>
    </RtlProvider>
  );
}

export default AddApiForm;
