// Assets
import articlePicTest from '../../../assets/images/articlePicTest.png';
import { ArticleCardStyle } from './article-card.style';

function ArticleCard() {
  return (
    <ArticleCardStyle to="/" className="space-y-4">
      <div id="image_wrapper">
        <img src={articlePicTest} alt="" />
      </div>
      <div className="space-y-1">
        <p className="text-center text-sm text-textGray">موضوع لورم</p>
        <p className="px-6 text-center leading-8 transition-colors duration-200 hover:text-purple-600">
          لورم ایپسوم متن نامفهوم از صنعت چاپ و با سادگی نامفهوم است در ستون
          سادگی نامفهوم و سطرآنچنان که لازم است
        </p>
      </div>
    </ArticleCardStyle>
  );
}

export default ArticleCard;
