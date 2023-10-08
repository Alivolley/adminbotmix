import styled from '@emotion/styled';

export const AddGroupFormStyle = styled.div(() => ({
   '*': {
      fontFamily: 'vazir !important',
   },

   '& #inputNumber input[type="number"]::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      MozAppearance: 'textfield',
   },
}));
