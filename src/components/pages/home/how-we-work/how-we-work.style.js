import styled from '@emotion/styled';

export const HowWeWorkStyle = styled.div(() => ({
  '& #how_we_work_image': {
    animation: 'slideIn 20s alternate infinite ease-in-out',
  },

  '@keyframes slideIn': {
    '0%': { transform: 'translateX(0)' },
    '50%': { transform: 'translateX(-100px)' },
    '100%': { transform: 'translateX(0px)' },
  },
}));
