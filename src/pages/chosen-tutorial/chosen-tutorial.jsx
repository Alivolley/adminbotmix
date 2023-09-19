// MUI
import { Grid } from '@mui/material';

// Icon
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';

// Assets
import { Link } from 'react-router-dom';
import { ChosenTutorialStyle } from './chosen-tutorial.style';
import articlePicTest from '../../assets/images/articlePicTest.png';
import articlePicTest2 from '../../assets/images/portfolioTest.png';
import articlePicTest3 from '../../assets/images/testPic.png';
import articlePicTest4 from '../../assets/images/user.jpg';
import sampleVideo from '../../assets/videos/sample_video.mp4';

// Components
import GlowingShadow from '../../components/templates/glowing-shadow/glowing-shadow';
import TutorialCard from '../../components/templates/tutorial-card/tutorial-card';
import LinkComponent from '../../components/form-group/link-component/link-component';

function ChosenTutorial() {
  return (
    <ChosenTutorialStyle>
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
        className="-left-12 bottom-[-60%] z-0"
      />

      <div className="relative z-[1] mx-auto mb-36 mt-14 max-w-[1150px] customMd:mt-[140px]">
        <Grid container spacing={6}>
          <Grid item xs={12} md={8.5}>
            <div>
              <h3 className="font-lalezar text-3xl customSm:text-6xl">
                آموزش اتصال به صرافی
              </h3>
              <div
                className="my-5 flex items-center gap-2 border-b border-gray-300 pb-5 text-xs
               text-textGray dark:border-gray-800 customSm:text-sm"
              >
                <InsertInvitationIcon fontSize="small" />
                <p>اردیبهشت ۱۴۰۰/۴</p>
              </div>

              <div className="space-y-10 text-sm !leading-[30px] customSm:text-base">
                <div className="aspect-[5/3] object-contain px-10">
                  <video
                    controls
                    alt="tutorial"
                    className="h-full w-full"
                    poster={articlePicTest4}
                    preload="metadata"
                  >
                    <source src={sampleVideo} />
                    <track src="captions.vtt" kind="captions" label="English" />
                  </video>
                </div>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={3.5}>
            <div className="space-y-10 border-r border-gray-300 pr-5 dark:border-gray-800">
              <div className="mx-auto max-w-sm">
                <TutorialCard imageSrc={articlePicTest} />
              </div>
              <div className="mx-auto max-w-sm">
                <TutorialCard imageSrc={articlePicTest2} />
              </div>
              <div className="mx-auto max-w-sm">
                <TutorialCard imageSrc={articlePicTest3} />
              </div>
              <div className="mx-auto max-w-sm">
                <TutorialCard imageSrc={articlePicTest4} />
              </div>

              <Link to="/tutorials" className="mt-16 flex justify-center">
                <LinkComponent className="px-5">
                  مشاهده همه آموزش ها
                </LinkComponent>
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </ChosenTutorialStyle>
  );
}

export default ChosenTutorial;
