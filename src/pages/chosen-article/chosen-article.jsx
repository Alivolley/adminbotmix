import { useParams } from 'react-router-dom';

// Assets
import { ChosenArticleStyle } from './chosen-article.style';

function ChosenArticle() {
  const { id } = useParams();
  console.log(id);

  return <ChosenArticleStyle>ChosenArticle</ChosenArticleStyle>;
}

export default ChosenArticle;
