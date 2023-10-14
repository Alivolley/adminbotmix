// MUI
import { CircularProgress, Grid } from '@mui/material';

// Assets
import { NewestArticlesStyle } from './newest-articles.style';

// Components
import ArticleCardHome from '../article-card-home/article-card-home';

function NewestArticles({ detail, loading }) {
   return (
      <NewestArticlesStyle className="mx-auto max-w-[1150px]">
         <p className="text-center font-lalezar text-3xl customMd:text-[50px]">جدیدترین مقالات</p>

         <div className="mt-32">
            {loading ? (
               <div className="flex items-center justify-center">
                  <CircularProgress />
               </div>
            ) : (
               <Grid container spacing={3.5} zIndex={1}>
                  {detail?.map(item => (
                     <Grid item xs={9} sm={6} md={4} marginX="auto" key={item.articleID}>
                        <ArticleCardHome detail={item} />
                     </Grid>
                  ))}
               </Grid>
            )}
         </div>
      </NewestArticlesStyle>
   );
}

export default NewestArticles;
