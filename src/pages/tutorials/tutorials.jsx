import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { CircularProgress, Grid, Pagination } from '@mui/material';

// Assets
import { TutorialsStyle } from './tutorials.style';

// Components
import TutorialCard from '../../components/templates/tutorial-card/tutorial-card';

// Apis
import useTutorials from '../../apis/tutorials/useTutorials/useTutorials';

function Tutorials() {
   const [pageStatus, setPageStatus] = useState(1);
   const navigate = useNavigate();
   const location = useLocation();

   const currentPage = location.search ? Number(location.search.charAt(location.search.length - 1)) : 1;

   useEffect(() => {
      setPageStatus(currentPage);
   }, [location]);

   const { data: tutorialsData, isLoading: tutorialsIsLoading } = useTutorials(currentPage);

   return (
      <TutorialsStyle className="relative">
         <div className="mx-auto mb-32 mt-14 min-h-screen max-w-[1150px] customMd:mt-[80px]">
            <h1
               className="rounded-2xl py-6 text-center font-lalezar text-4xl text-secondaryBlue customSm:text-5xl"
               id="tutorials_page_title"
            >
               لیست آموزش ها
            </h1>

            {tutorialsIsLoading ? (
               <div className="flex items-center justify-center">
                  <CircularProgress />
               </div>
            ) : (
               <>
                  <div className="mt-14 customSm:mt-24">
                     <Grid container spacing={5}>
                        {tutorialsData?.data?.map(item => (
                           <Grid item xs={10} sm={6} md={4} marginX="auto" key={item.id}>
                              <TutorialCard detail={item} />
                           </Grid>
                        ))}
                     </Grid>
                  </div>

                  <div className="mt-14 flex justify-center">
                     <Pagination
                        count={tutorialsData?.total_pages}
                        page={pageStatus}
                        onChange={(e, newValue) => {
                           setPageStatus(newValue);
                           if (newValue > 1) {
                              navigate(`?page=${newValue}`);
                           } else {
                              navigate('/tutorials');
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
         </div>
      </TutorialsStyle>
   );
}

export default Tutorials;
