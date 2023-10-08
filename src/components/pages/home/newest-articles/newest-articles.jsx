// MUI
import { Grid } from '@mui/material';

// Assets
import { NewestArticlesStyle } from './newest-articles.style';

// Components
import ArticleCardHome from '../article-card-home/article-card-home';

function NewestArticles() {
   return (
      <NewestArticlesStyle>
         <p className="text-center font-lalezar text-3xl customMd:text-[50px]">جدیدترین مقالات</p>

         <div className="mt-32">
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
