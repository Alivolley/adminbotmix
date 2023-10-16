import styled from '@emotion/styled';

export const LoginStyle = styled.div(() => ({
   '& #detail_form': {
      '*': {
         fontFamily: 'vazir !important',
      },
   },

   '& #inputNumber input[type="number"]': {
      MozAppearance: 'textfield',
      appearance: 'textfield',
      '&::-webkit-inner-spin-button': {
         WebkitAppearance: 'none',
         appearance: 'none',
      },
   },
}));
