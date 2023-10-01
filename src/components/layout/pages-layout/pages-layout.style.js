import styled from '@emotion/styled';
import { yellow } from '@mui/material/colors';

export const PagesLayoutStyle = styled.div(({ theme }) => ({
  '.active': {
    color: theme.palette.secondaryBlue.main,
    fontWeight: 'bold',
  },

  '& #dropdownWrapper': {
    position: 'relative',

    '&:hover #dropdownBox': {
      opacity: 1,
      visibility: 'visible',
      transition: 'all 0.3s',
      transform: 'translateY(10px)',
    },

    '&:hover svg': {
      transform: 'rotate(180deg)',
    },
  },

  '& #dropdownBtn': {
    cursor: 'pointer',
  },

  '& #dropdownBox': {
    position: 'absolute',
    right: 0,
    top: '30px',
    borderRadius: '7px',
    width: '160px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    transition: 'all 0.3s',
    opacity: 0,
    visibility: 'hidden',

    a: {
      position: 'relative',
    },

    'a:after': {
      position: 'absolute',
      content: '""',
      left: '100%',
      right: 0,
      bottom: '-1px',
      height: '1px',
      background: theme.palette.secondaryBlue.main,
      transition: 'all 0.4s ease',
    },

    '& a:hover:after': {
      left: 0,
    },
  },
}));
