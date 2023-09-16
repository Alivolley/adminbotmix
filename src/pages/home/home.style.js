import styled from '@emotion/styled';

export const HomeStyle = styled.div(() => ({
  '& #nftSpan': {
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
