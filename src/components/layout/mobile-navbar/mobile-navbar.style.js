import styled from '@emotion/styled';

export const MobileNavbarStyle = styled.div(({ theme }) => ({
  '.active': {
    color: theme.palette.secondaryBlue.main,
    fontWeight: 'bold',
  },
}));
