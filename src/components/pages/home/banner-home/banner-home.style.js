import styled from '@emotion/styled';

export const BannerHomeStyle = styled.div(({ theme }) => ({
  position: 'relative',

  '& #home_card': {
    position: 'relative',
    backdropFilter: 'blur(2px)',
    borderRadius: '20px',

    ...(theme.palette.mode === 'dark'
      ? {
          background:
            'linear-gradient(89.96deg,hsla(0,0%,100%,.05) .03%,hsla(0,0%,100%,.008) 49.67%,hsla(0,0%,100%,.05) 99.96%)',
        }
      : {
          background:
            'linear-gradient(89.96deg, hsl(0deg 0% 0% / 10%) .03%, hsl(0deg 0% 0% / 20%) 49.67%, hsl(0deg 0% 0% / 10%) 99.96%)',
        }),
  },

  '& #linear-text': {
    WebkitTextFillColor: 'transparent',
    background: 'linear-gradient(264.28deg,#5c27fe 0%,#dec7ff 120%)',
    WebkitBackgroundClip: 'text',
  },

  '& #home_first_image': {
    animation: 'slideIn 20s alternate infinite ease-in-out',
  },

  '@keyframes slideIn': {
    '0%': { transform: 'translateX(0)' },
    '50%': { transform: 'translateX(-100px)' },
    '100%': { transform: 'translateX(0px)' },
  },
}));
