// MUI
import { Grid } from '@mui/material';

// Icon
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';

// Assets
import { ArticleCardStyle } from './article-card.style';

function ArticleCard({ imageSrc }) {
  return (
    <ArticleCardStyle to="/article/2">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <div id="image_wrapper">
            <img src={imageSrc} alt="" />
          </div>
        </Grid>
        <Grid item xs={12} sm={8}>
          <div>
            <div className="mb-3 flex items-center gap-3 text-xs text-textGray customSm:text-sm">
              <InsertInvitationIcon fontSize="small" />
              <p>اردیبهشت ۱۴۰۰/۴</p>
            </div>
            <h3 className="mb-6 font-bold transition-all duration-200 hover:text-violet-600 customSm:text-xl">
              در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر اصلی برداشته
              میشود و اینکار زمان بر خواهد بود.
            </h3>

            <p className="text-xs !leading-[28px] customSm:text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              سادگی نامفهوم استفاده از طراحان گرافیک است در ستون سادگی نامفهوم و
              سادگی نامفهوم استفاده از طراحان گرافیک است در ستون سادگی نامفهوم و
              سادگی نامفهوم استفاده از طراحان گرافیک است در ستون سادگی نامفهوم و
              سطرآنچنان که لازم است
            </p>
          </div>
        </Grid>
      </Grid>
    </ArticleCardStyle>
  );
}

export default ArticleCard;
