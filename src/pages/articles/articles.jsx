import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Components
import { CircularProgress, Pagination } from '@mui/material';
import ArticleCard from '../../components/pages/articles/article-card/article-card';

import { ArticlesStyle } from './articles.style';

// Apis
import useArticles from '../../apis/articles/useArticles/useArticles';

function Articles() {
   const [pageStatus, setPageStatus] = useState(1);
   const navigate = useNavigate();
   const location = useLocation();

   const currentPage = location.search ? Number(location.search.charAt(location.search.length - 1)) : 1;

   useEffect(() => {
      setPageStatus(currentPage);
   }, [location]);

   const { data: articlesData, isLoading: articlesIsLoading } = useArticles(currentPage);

   return (
      <div>
         <ArticlesStyle className="mx-auto mb-32 mt-14 min-h-screen max-w-[1150px] customMd:mt-[80px]">
            <h1
               className="rounded-2xl py-6 text-center font-lalezar text-4xl text-secondaryBlue customSm:text-5xl"
               id="articles_page_title"
            >
               لیست مقالات
            </h1>

            {articlesIsLoading ? (
               <div className="flex items-center justify-center">
                  <CircularProgress />
               </div>
            ) : (
               <>
                  <div className="relative mt-14 customSm:mt-24">
                     {articlesData?.data?.map(item => (
                        <ArticleCard key={item?.articleID} detail={item} />
                     ))}
                  </div>

                  <div className="mt-14 flex justify-center">
                     <Pagination
                        count={articlesData?.total_pages}
                        page={pageStatus}
                        onChange={(e, newValue) => {
                           setPageStatus(newValue);
                           if (newValue > 1) {
                              navigate(`?page=${newValue}`);
                           } else {
                              navigate('/articles');
                           }
                        }}
                        boundaryCount={2}
                        color="primaryBlue"
                        sx={{
                           '& .Mui-selected': {
                              color: 'white',
                           },
                        }}
                     />
                  </div>
               </>
            )}
         </ArticlesStyle>
      </div>
   );
}

export default Articles;
