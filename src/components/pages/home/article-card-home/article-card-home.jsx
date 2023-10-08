// Assets
import articlePicTest from '../../../../assets/images/articlePicTest.png';
import { ArticleCardHomeStyle } from './article-card-home.style';

function ArticleCardHome() {
   return (
      <ArticleCardHomeStyle to="/article/2" className="space-y-4">
         <div id="image_wrapper">
            <img src={articlePicTest} alt="" />
         </div>
         <div className="space-y-1">
            <p className="text-center text-sm text-textGray">موضوع لورم</p>
            <p className="px-6 text-center text-[13px] leading-8 transition-colors duration-200 hover:text-secondaryBlue customSm:text-base">
               لورم ایپسوم متن نامفهوم از صنعت چاپ و با سادگی نامفهوم است در ستون سادگی نامفهوم و سطرآنچنان که لازم است
            </p>
         </div>
      </ArticleCardHomeStyle>
   );
}

export default ArticleCardHome;
