import styled from '@emotion/styled';

export const RobotCartStyle = styled.div(({ theme }) => ({
  ...(theme.palette.mode === 'dark'
    ? {
        background:
          'linear-gradient(89.96deg,hsla(0,0%,100%,.05) .03%,hsla(0,0%,100%,.008) 49.67%,hsla(0,0%,100%,.05) 99.96%)',
      }
    : {
        background:
          'linear-gradient(89.96deg, hsl(0deg 0% 0% / 10%) .03%, hsl(0deg 0% 0% / 20%) 49.67%, hsl(0deg 0% 0% / 10%) 99.96%)',
      }),

  width: '100%',
  backdropFilter: 'blur(4px)',
  border: '1px solid hsla(0,0%,100%,.1)',
  borderRadius: '20px',
  padding: '15px',
  transition: 'all 0.3s',

  ':hover': {
    transform: 'scale(1.05)',
  },
}));
