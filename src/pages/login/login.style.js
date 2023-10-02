import styled from '@emotion/styled';

export const LoginStyle = styled.div(() => ({
  '& #detail_form': {
    '*': {
      fontFamily: 'vazir !important',
    },
  },

  '& #inputNumber input[type="number"]::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    MozAppearance: 'textfield',
  },
}));
