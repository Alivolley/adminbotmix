import { Grid, Pagination } from '@mui/material';

// Assets
import { TutorialsStyle } from './tutorials.style';
import articlePicTest from '../../assets/images/articlePicTest.png';
import articlePicTest2 from '../../assets/images/portfolioTest.png';
import articlePicTest3 from '../../assets/images/testPic.png';
import articlePicTest4 from '../../assets/images/user.jpg';

// Components
import GlowingShadow from '../../components/templates/glowing-shadow/glowing-shadow';
import TutorialCard from '../../components/templates/tutorial-card/tutorial-card';

function Tutorials() {
  return (
    <TutorialsStyle className="relative">
      <GlowingShadow
        color="rgba(60, 84, 166, 0.6)"
        className="-left-1 top-0 z-0"
      />

      <GlowingShadow
        color="rgba(114, 91, 218, 0.3)"
        className="-right-12 top-[50%] z-0"
      />

      <GlowingShadow
        color="rgba(114, 91, 218, 0.3)"
        className="-left-12 bottom-[20%] z-0"
      />
      <div className="mx-auto mb-32 mt-14 max-w-[1150px] customMd:mt-[80px]">
        <h1
          className="rounded-2xl py-6 text-center font-lalezar text-4xl customSm:text-7xl"
          id="tutorials_page_title"
        >
          لیست آموزش ها
        </h1>
        <div className="relative mt-14 customSm:mt-24">
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
            color="buttonPurple"
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
