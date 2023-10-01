import styled from '@emotion/styled';

export const SidebarStyle = styled.div(props => ({
  position: 'sticky',
  top: '28px',

  '& .active , #navLink:hover': {
    transition: 'all 0.2s',
    backgroundColor:
      props.theme.palette.mode === 'dark' ? '#1A202C' : '#F7FAFC',

    '& #iconWrapper': {
      transition: 'all 0.2s',
      backgroundColor: props.theme.colors.primaryBlue,
      color: 'white',
    },

    p: {
      transition: 'all 0.2s',
      color: props.theme.colors.textMain,
    },
  },

  '& #goHomeLink': {
    color:
      props.theme.palette.mode === 'dark'
        ? 'white'
        : props.theme.colors.textMain,
  },
}));
