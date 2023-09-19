import styled from '@emotion/styled';

export const GlowingShadowStyle = styled.div(({ color }) => ({
  backgroundColor: color,
  boxShadow: `0px 0px 300px 300px ${color}`,
  position: 'absolute',
}));
