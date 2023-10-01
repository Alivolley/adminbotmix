import styled from '@emotion/styled';

export const RulesStyle = styled.div(({ theme }) => ({
  '& #rules_page_title': {
    boxShadow: `inset 0px 0px 10px 0px ${theme.palette.primaryBlue.main}`,
  },
}));
