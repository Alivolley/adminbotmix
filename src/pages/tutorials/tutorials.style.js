import styled from '@emotion/styled';

export const TutorialsStyle = styled.div(({ theme }) => ({
  '& #tutorials_page_title': {
    boxShadow: `inset 0px 0px 10px 0px ${theme.palette.primaryBlue.main}`,
  },
}));
