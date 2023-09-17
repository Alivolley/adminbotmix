import { Link } from 'react-router-dom';

// MUI
import { Grid } from '@mui/material';

// Assets
import articlePicTest from '../../../../assets/images/articlePicTest.png';
import { NewestArticlesStyle } from './newest-articles.style';

function NewestArticles() {
  return (
    <NewestArticlesStyle>
      <p className="text-center font-lalezar text-3xl customMd:text-[60px]">
        جدیدترین مقالات
      </p>

      <div className="mt-32">
        <Grid container spacing={3.5}>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/" className="space-y-4" id="link_wrapper">
              <div id="image_wrapper">
                <img src={articlePicTest} alt="" />
              </div>
              <div className="space-y-1">
                <p className="text-center text-sm text-textGray">موضوع لورم</p>
                <p className="px-6 text-center leading-8 transition-colors duration-200 hover:text-purple-600">
                  لورم ایپسوم متن نامفهوم از صنعت چاپ و با سادگی نامفهوم است در
                  ستون سادگی نامفهوم و سطرآنچنان که لازم است
                </p>
              </div>
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Link to="/" className="space-y-4" id="link_wrapper">
              <div id="image_wrapper">
                <img src={articlePicTest} alt="" />
              </div>
              <div className="space-y-1">
                <p className="text-center text-sm text-textGray">موضوع لورم</p>
                <p className="px-6 text-center leading-8 transition-colors duration-200 hover:text-purple-600">
                  لورم ایپسوم متن نامفهوم از صنعت چاپ و با سادگی نامفهوم است در
                  ستون سادگی نامفهوم و سطرآنچنان که لازم است
                </p>
              </div>
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Link to="/" className="space-y-4" id="link_wrapper">
              <div id="image_wrapper">
                <img src={articlePicTest} alt="" />
              </div>
              <div className="space-y-1">
                <p className="text-center text-sm text-textGray">موضوع لورم</p>
                <p className="px-6 text-center leading-8 transition-colors duration-200 hover:text-purple-600">
                  لورم ایپسوم متن نامفهوم از صنعت چاپ و با سادگی نامفهوم است در
                  ستون سادگی نامفهوم و سطرآنچنان که لازم است
                </p>
              </div>
            </Link>
          </Grid>
        </Grid>
      </div>
    </NewestArticlesStyle>
  );
}

export default NewestArticles;
