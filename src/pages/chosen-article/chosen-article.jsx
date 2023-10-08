import { Link, useParams } from 'react-router-dom';

// MUI
import { Grid } from '@mui/material';

// Icon
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';

// Assets
import { ChosenArticleStyle } from './chosen-article.style';
import articlePic from '../../assets/images/articlePicTest.png';
import articlePic2 from '../../assets/images/portfolioTest.png';
import articlePic3 from '../../assets/images/testPic.png';
import articlePic4 from '../../assets/images/user.jpg';

// Components
import SuggestArticleCard from '../../components/pages/chosen-article/suggest-article-card/suggest-article-card';
import LinkComponent from '../../components/form-group/link-component/link-component';

function ChosenArticle() {
   const { id } = useParams();

   return (
      <ChosenArticleStyle>
         <div className="mx-auto mb-36 mt-14 max-w-[1150px] customMd:mt-[140px]">
            <Grid container spacing={6}>
               <Grid item xs={12} md={3.5} order={{ xs: 2, md: 1 }}>
                  <div className="border-l border-gray-300 pl-5 dark:border-gray-600">
                     <SuggestArticleCard imageSrc={articlePic} />
                     <SuggestArticleCard imageSrc={articlePic2} />
                     <SuggestArticleCard imageSrc={articlePic3} />
                     <SuggestArticleCard imageSrc={articlePic4} />
                     <SuggestArticleCard imageSrc={articlePic} />
                     <SuggestArticleCard imageSrc={articlePic2} />
                     <SuggestArticleCard imageSrc={articlePic3} />
                     <SuggestArticleCard imageSrc={articlePic4} />
                     <SuggestArticleCard imageSrc={articlePic} />
                     <SuggestArticleCard imageSrc={articlePic2} />
                     <SuggestArticleCard imageSrc={articlePic3} />
                     <SuggestArticleCard imageSrc={articlePic4} />
                     <Link to="/articles" className="mt-12 flex justify-center">
                        <LinkComponent className="px-5 customSm:px-10">مشاهده همه مقاله ها</LinkComponent>
                     </Link>
                  </div>
               </Grid>

               <Grid item xs={12} md={8.5} order={{ xs: 1, md: 2 }}>
                  <div>
                     <h3 className="font-lalezar text-3xl customSm:text-6xl">موضوع مقاله ی انتخاب شده</h3>
                     <div
                        className="my-5 flex items-center gap-2 border-b border-gray-300 pb-5 text-xs
               text-textGray dark:border-gray-600 customSm:text-sm"
                     >
                        <InsertInvitationIcon fontSize="small" />
                        <p>اردیبهشت ۱۴۰۰/۴</p>
                     </div>

                     <div className="space-y-10 text-sm leading-[30px] customSm:text-base">
                        <p>
                           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با سادگی نامفهوم استفاده از
                           طراحان گرافیک است در ستون سادگی سادگی نامفهوم استفاده از طراحان گرافیک است در ستون سادگی
                           سادگی نامفهوم استفاده از طراحان گرافیک است در ستون سادگی نامفهوم و تولید سادگی نامفهوم از
                           صنعت چاپ و با سادگی نامفهوم استفاده از سطرآنچنان که لازم است
                        </p>
                        <div className="aspect-[5/3] object-contain px-10">
                           <img src={articlePic} alt="article" className="h-full w-full" />
                        </div>
                        <p>
                           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                           چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                           تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
                           شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
                           شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                           ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
                           سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                           اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی
                           نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
                           ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                           بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت
                           فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
                           علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
                           که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                           حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                           قرار گیرد.
                           <br />
                           <br />
                           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                           چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                           تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
                           شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
                           شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                           ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
                           سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                           اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی
                           نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
                           ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                           بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت
                           فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
                           علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
                           که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                           حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                           قرار گیرد.
                        </p>
                     </div>
                  </div>
               </Grid>
            </Grid>
         </div>
      </ChosenArticleStyle>
   );
}

export default ChosenArticle;
