import styled from '@emotion/styled';

export const TutorialsStyle = styled.div(({ theme }) => ({
  '& #tutorials_page_title': {
    WebkitTextFillColor: 'transparent',
    background: 'linear-gradient(264.28deg,#5c27fe 0%,#dec7ff 120%)',
    WebkitBackgroundClip: 'text',
    boxShadow: `inset 0px 0px 10px 0px ${
      theme.palette.mode === 'dark' ? '#2e1065' : '#c4b5fd'
    }`,
  },
}));
