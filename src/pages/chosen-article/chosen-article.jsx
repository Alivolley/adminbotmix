/* eslint-disable react/no-danger */
import { Link, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';

// MUI
import { CircularProgress, Grid } from '@mui/material';

// Icon
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';

// Assets
import { ChosenArticleStyle } from './chosen-article.style';

// Components
import SuggestArticleCard from '../../components/pages/chosen-article/suggest-article-card/suggest-article-card';
import LinkComponent from '../../components/form-group/link-component/link-component';

// Apis
import useArticleDetail from '../../apis/articles/useArticleDetail/useArticleDetail';
import useArticles from '../../apis/articles/useArticles/useArticles';

function ChosenArticle() {
   const { id } = useParams();

   const { data: articleDetail, isLoading: articleIsLoading } = useArticleDetail(id);
   const { data: articlesData, isLoading: articlesIsLoading } = useArticles(1);

   console.log(articlesData);

   return (
      <ChosenArticleStyle className="min-h-screen">
         {articleIsLoading ? (
            <div className="flex items-center justify-center">
               <CircularProgress />
            </div>
         ) : (
            <div className="mx-auto mb-36 mt-14 max-w-[1150px] customMd:mt-[140px]">
               <Grid container spacing={6}>
                  <Grid item xs={12} md={3.5} order={{ xs: 2, md: 1 }}>
                     <div className="border-l border-gray-300 pl-5 dark:border-gray-600">
                        {articlesIsLoading ? (
                           <div className="flex items-center justify-center">
                              <CircularProgress />
                           </div>
                        ) : (
                           articlesData?.data?.map(
                              item =>
                                 Number(item?.articleID) !== Number(id) && (
                                    <SuggestArticleCard key={item?.articleID} detail={item} />
                                 )
                           )
                        )}

                        <Link to="/articles" className="mt-12 flex justify-center">
                           <LinkComponent className="px-5 customSm:px-10">مشاهده همه مقاله ها</LinkComponent>
                        </Link>
                     </div>
                  </Grid>

                  <Grid item xs={12} md={8.5} order={{ xs: 1, md: 2 }}>
                     <div>
                        <h3 className="font-lalezar text-3xl customSm:text-6xl">{articleDetail?.title}</h3>
                        <div className="my-5 flex items-center gap-2 border-b border-gray-300 pb-5 text-xs text-textGray dark:border-gray-600 customSm:text-sm">
                           <InsertInvitationIcon fontSize="small" />
                           <p>{articleDetail?.created_at}</p>
                        </div>

                        <div className="space-y-10 text-sm leading-[30px] customSm:text-base">
                           <div dangerouslySetInnerHTML={{ __html: DOMPurify?.sanitize(articleDetail?.text) }} />
                        </div>
                     </div>
                  </Grid>
               </Grid>
            </div>
         )}
      </ChosenArticleStyle>
   );
}

export default ChosenArticle;
