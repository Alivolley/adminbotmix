import styled from '@emotion/styled';

export const SidebarStyle = styled.div(props => ({
  '& .active': {
    transition: 'all 0.2s',
    backgroundColor: props.theme.colors.bgSecondary,

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
}));
