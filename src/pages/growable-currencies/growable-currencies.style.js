import styled from '@emotion/styled';

export const GrowableCurrenciesStyle = styled.div(({ theme }) => ({
   '#custom-scroll': {
      '::-webkit-scrollbar': {
         width: '7px',
      },

      '::-webkit-scrollbar-track': {
         background: theme.palette.mode === 'dark' ? '#131722' : '#e6e6e6',
      },

      '::-webkit-scrollbar-thumb': {
         background: '#A0AEC0',
      },

      '::-webkit-scrollbar-thumb:hover': {
         background: '#707a86',
      },
   },
}));
