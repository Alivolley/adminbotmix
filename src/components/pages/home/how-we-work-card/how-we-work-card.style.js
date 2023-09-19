import styled from '@emotion/styled';

export const HowWeWorkCardStyle = styled.div(() => ({
  background:
    'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0) 73.86%)',
  borderRadius: '16px',
  padding: '40px 23px',
  position: 'relative',
  zIndex: 1,

  '& #linear-text': {
    WebkitTextFillColor: 'transparent',
    background: 'linear-gradient(264.28deg,#5c27fe 0%,#dec7ff 120%)',
    WebkitBackgroundClip: 'text',
  },
}));
