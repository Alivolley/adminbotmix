import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ChosenArticleStyle = styled.div(() => ({
  position: 'relative',

  '& #text': {
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
  },
}));
