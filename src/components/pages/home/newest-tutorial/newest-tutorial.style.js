import styled from '@emotion/styled';

export const NewestTutorialStyle = styled.div(() => ({
  '& #image_wrapper': {
    position: 'relative',
    width: '100%',
    backdropFilter: 'blur(4px)',
    background:
      'linear-gradient(89.96deg,hsla(0,0%,100%,.05) .03%,hsla(0,0%,100%,.008) 49.67%,hsla(0,0%,100%,.05) 99.96%)',
    border: '1px solid hsla(0,0%,100%,.1)',
    borderRadius: '20px',
    padding: '15px',
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

    img: {
      borderRadius: '20px',
      aspectRatio: '1/1',
      objectFit: 'fill',
    },
  },
}));
