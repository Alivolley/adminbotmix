// MUI
import { Grid } from '@mui/material';

// Icon
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';

// Assets
import { ArticleCardStyle } from './article-card.style';

function ArticleCard({ detail }) {
   return (
      <ArticleCardStyle to={`/article/${detail?.articleID}`}>
         <Grid container spacing={{ xs: 2, sm: 4 }}>
            <Grid item xs={4}>
               <div id="image_wrapper" className="rounded-lg p-1 customSm:rounded-[20px] customSm:p-4">
                  <img
                     src={detail?.cover}
                     alt={detail?.short_description}
                     className="rounded-lg object-cover customSm:rounded-[20px]"
                  />
               </div>
            </Grid>
            <Grid item xs={8}>
               <div>
                  <div className="mb-1 flex items-center gap-3 text-[10px] text-textGray customSm:mb-3 customSm:text-sm">
                     <InsertInvitationIcon fontSize="small" />
                     <p>{detail?.created_at}</p>
                  </div>
                  <h3 className="mb-3 text-xs font-bold transition-all duration-200 hover:text-secondaryBlue customSm:mb-6 customSm:text-xl">
                     {detail?.title}
                  </h3>

                  <p className="hidden text-sm !leading-[28px] customSm:block">{detail?.short_description}</p>
               </div>
            </Grid>
         </Grid>
      </ArticleCardStyle>
   );
}

export default ArticleCard;
