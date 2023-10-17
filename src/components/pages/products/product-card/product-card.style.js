import styled from '@emotion/styled';

export const ProductCardStyle = styled.div(() => ({
   background: 'linear-gradient(89.96deg, rgb(22 20 24 / 23%) 1%, rgb(22 20 24 / 10%) 49.67%, rgb(22 20 24 / 23%) 99%)',

   width: '100%',
   backdropFilter: 'blur(4px)',
   border: '1px solid hsla(0,0%,100%,.1)',
   borderRadius: '20px',
   padding: '15px',
}));

export const BuyModalWrapper = styled.div(() => ({
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
