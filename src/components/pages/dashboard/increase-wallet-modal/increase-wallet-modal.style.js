import styled from '@emotion/styled';

export const IncreaseWalletModalStyle = styled.div(() => ({
   '*': {
      fontFamily: 'vazir !important',
   },

   '& #inputNumber input[type="number"]::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      MozAppearance: 'textfield',
   },
}));
