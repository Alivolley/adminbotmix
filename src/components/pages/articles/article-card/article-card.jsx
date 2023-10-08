// MUI
import { Grid } from '@mui/material';

// Icon
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';

// Assets
import { ArticleCardStyle } from './article-card.style';

function ArticleCard({ imageSrc }) {
   return (
      <ArticleCardStyle to="/article/2">
         <Grid container spacing={{ xs: 2, sm: 4 }}>
            <Grid item xs={4}>
               <div id="image_wrapper" className="rounded-lg p-1 customSm:rounded-[20px] customSm:p-4">
                  <img src={imageSrc} alt="" className="rounded-lg customSm:rounded-[20px]" />
               </div>
            </Grid>
            <Grid item xs={8}>
               <div>
                  <div className="mb-1 flex items-center gap-3 text-[10px] text-textGray customSm:mb-3 customSm:text-sm">
                     <InsertInvitationIcon fontSize="small" />
                     <p>اردیبهشت ۱۴۰۰/۴</p>
                  </div>
                  <h3 className="mb-3 text-xs font-bold transition-all duration-200 hover:text-secondaryBlue customSm:mb-6 customSm:text-xl">
                     در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر اصلی برداشته میشود و اینکار زمان بر خواهد بود.
                  </h3>

                  <p className="hidden text-sm !leading-[28px] customSm:block">
                     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با سادگی نامفهوم استفاده از طراحان
                     گرافیک است در ستون سادگی نامفهوم و سادگی نامفهوم استفاده از طراحان گرافیک است در ستون سادگی نامفهوم
                     و سادگی نامفهوم استفاده از طراحان گرافیک است در ستون سادگی نامفهوم و سطرآنچنان که لازم است
                  </p>
               </div>
            </Grid>
         </Grid>
      </ArticleCardStyle>
   );
}

export default ArticleCard;
