import styled from '@emotion/styled';

export const ArticlesStyle = styled.main(({ theme }) => ({
  '& #articles_page_title': {
    boxShadow: `inset 0px 0px 10px 0px ${theme.palette.primaryBlue.main}`,
  },
}));
