// MUI
import { Grid } from '@mui/material';

// Assets
import { NewestArticlesStyle } from './newest-articles.style';

// Components
import ArticleCardHome from '../article-card-home/article-card-home';
import GlowingShadow from '../../../templates/glowing-shadow/glowing-shadow';

function NewestArticles() {
  return (
    <NewestArticlesStyle>
      <p className="text-center font-lalezar text-3xl customMd:text-[60px]">
        جدیدترین مقالات
      </p>

      <div className="relative mt-32">
        <GlowingShadow
          color="rgba(114, 91, 218, 0.5)"
          className="left-0 top-36 z-0"
        />
        <Grid container spacing={3.5} zIndex={1}>
          <Grid item xs={12} sm={6} md={4}>
            <ArticleCardHome />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ArticleCardHome />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ArticleCardHome />
          </Grid>
        </Grid>
      </div>
    </NewestArticlesStyle>
  );
}

export default NewestArticles;
