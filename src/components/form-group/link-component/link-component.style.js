import styled from '@emotion/styled';

export const LinkComponentStyle = styled.button(({ theme }) => ({
  position: 'relative',
  width: 'fit-content',
  backdropFilter: 'blur(4px)',

  ...(theme.palette.mode === 'dark'
    ? {
        // background:
        //   'linear-gradient(89.96deg,hsla(0,0%,100%,.05) .03%,hsla(0,0%,100%,.008) 49.67%,hsla(0,0%,100%,.05) 99.96%)',
        backgroundColor: '#ffffff0d',
      }
    : {
        backgroundColor: '#00000033',
      }),

  border: '1px solid hsla(0,0%,100%,.1)',
  borderRadius: '10px',
  padding: '5px',
  cursor: 'pointer',
  overflow: 'hidden',

  '&:hover:after': {
    right: 0,
    opacity: 1,
  },

  '&:after': {
    position: 'absolute',
    content: '""',
    height: '200%',
    width: '150%',
    background:
      'linear-gradient(270deg, hsla(0,0%,100%,.13), hsla(0,0%,100%,.13) 77%, hsla(0,0%,100%,.5) 92%, hsla(0,0%,100%,0))',
    right: '-170%',
    opacity: '0',
    top: '-50%',
    transition: 'all 0.9s ease 0s',
  },

  p: {
    borderRadius: '10px',
    paddingTop: '15px',
    paddingBottom: '15px',
  },
}));
