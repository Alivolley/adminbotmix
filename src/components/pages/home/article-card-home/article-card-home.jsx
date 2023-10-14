// Assets
import { ArticleCardHomeStyle } from './article-card-home.style';

function ArticleCardHome({ detail }) {
   return (
      <ArticleCardHomeStyle to={`/article/${detail?.articleID}`} className="space-y-4">
         <div id="image_wrapper">
            <img src={detail?.cover} alt={detail?.title} />
         </div>
         <div className="space-y-1">
            <p className="text-center text-sm text-textGray">{detail?.title}</p>
            <p className="px-6 text-center text-[13px] leading-8 transition-colors duration-200 hover:text-secondaryBlue customSm:text-base">
               {detail?.short_description}
            </p>
         </div>
      </ArticleCardHomeStyle>
   );
}

export default ArticleCardHome;
