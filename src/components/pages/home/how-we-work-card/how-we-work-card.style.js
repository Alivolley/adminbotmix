import styled from '@emotion/styled';

export const HowWeWorkCardStyle = styled.div(({ theme }) => ({
   ...(theme.palette.mode === 'dark'
      ? {
           background: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0) 73.86%)',
        }
      : {
           background: 'linear-gradient(rgb(0 0 0 / 13%), rgba(255, 255, 255, 0) 73.86%)',
        }),

   borderRadius: '16px',
   padding: '40px 23px',
   position: 'relative',
   zIndex: 1,
}));
