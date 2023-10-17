import styled from '@emotion/styled';

export const IncreaseWalletModalStyle = styled.div(() => ({
   '*': {
      fontFamily: 'vazir !important',
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
