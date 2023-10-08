import { Grid, Pagination } from '@mui/material';

// Assets
import { TutorialsStyle } from './tutorials.style';
import articlePicTest from '../../assets/images/articlePicTest.png';
import articlePicTest2 from '../../assets/images/portfolioTest.png';
import articlePicTest3 from '../../assets/images/testPic.png';
import articlePicTest4 from '../../assets/images/user.jpg';

// Components
import TutorialCard from '../../components/templates/tutorial-card/tutorial-card';

function Tutorials() {
   return (
      <TutorialsStyle className="relative">
         <div className="mx-auto mb-32 mt-14 max-w-[1150px] customMd:mt-[80px]">
            <h1
               className="rounded-2xl py-6 text-center font-lalezar text-4xl text-secondaryBlue customSm:text-6xl"
               id="tutorials_page_title"
            >
               لیست آموزش ها
            </h1>
            <div className="mt-14 customSm:mt-24">
               <Grid container spacing={5}>
                  <Grid item xs={12} sm={6} md={4}>
                     <TutorialCard imageSrc={articlePicTest} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                     <TutorialCard imageSrc={articlePicTest2} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                     <TutorialCard imageSrc={articlePicTest3} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                     <TutorialCard imageSrc={articlePicTest4} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                     <TutorialCard imageSrc={articlePicTest} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                     <TutorialCard imageSrc={articlePicTest2} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                     <TutorialCard imageSrc={articlePicTest3} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                     <TutorialCard imageSrc={articlePicTest4} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                     <TutorialCard imageSrc={articlePicTest} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                     <TutorialCard imageSrc={articlePicTest2} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                     <TutorialCard imageSrc={articlePicTest3} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                     <TutorialCard imageSrc={articlePicTest4} />
                  </Grid>
               </Grid>
            </div>

            <div className="mt-14 flex justify-center">
               {/* <Pagination
          count={pageStatus.total}
          page={pageStatus.current}
          onChange={(_, value) =>
            setPageStatus(prev => {
              return {
                ...prev,
                current: value,
              };
            })
          }
        /> */}

               <Pagination
                  count={11}
                  defaultPage={1}
                  boundaryCount={2}
                  color="primaryBlue"
                  sx={{
                     '& .Mui-selected': {
                        color: 'white',
                     },
                  }}
               />
            </div>
         </div>
      </TutorialsStyle>
   );
}

export default Tutorials;
