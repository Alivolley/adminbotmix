import styled from '@emotion/styled';

export const GlowingShadowStyle = styled.div(({ color }) => ({
  backgroundColor: color,
  position: 'absolute',
  boxShadow: `0px 0px 300px 300px ${color}`,
  WebkitBoxShadow: `0px 0px 300px 300px ${color}`,
  MozBoxShadow: `0px 0px 300px 300px ${color}`,
}));
