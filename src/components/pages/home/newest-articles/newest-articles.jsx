// MUI
import { Grid } from '@mui/material';

// Assets
import { NewestArticlesStyle } from './newest-articles.style';

// Components
import ArticleCard from '../../../templates/article-card/article-card';

function NewestArticles() {
  return (
    <NewestArticlesStyle>
      <p className="text-center font-lalezar text-3xl customMd:text-[60px]">
        جدیدترین مقالات
      </p>

      <div className="mt-32">
        <Grid container spacing={3.5}>
          <Grid item xs={12} sm={6} md={4}>
            <ArticleCard />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ArticleCard />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ArticleCard />
          </Grid>
        </Grid>
      </div>
    </NewestArticlesStyle>
  );
}

export default NewestArticles;
