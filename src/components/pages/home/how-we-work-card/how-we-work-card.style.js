import styled from '@emotion/styled';

export const HowWeWorkCardStyle = styled.div(({ theme }) => ({
  ...(theme.palette.mode === 'dark'
    ? {
        background:
          'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0) 73.86%)',
      }
    : {
        background:
          'linear-gradient(rgb(0 0 0 / 13%), rgba(255, 255, 255, 0) 73.86%)',
      }),

  borderRadius: '16px',
  padding: '40px 23px',
  position: 'relative',
  zIndex: 1,

  '& #linear-text': {
    WebkitTextFillColor: 'transparent',
    background:
      'linear-gradient(0deg, rgb(40, 95, 145) 40%, rgba(203, 240, 237, 0.86) 82%)',
    WebkitBackgroundClip: 'text',
  },
}));
