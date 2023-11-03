// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { Pagination, Navigation } from 'swiper/modules';

// MUI
import { CircularProgress, Grid } from '@mui/material';

// Icons
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// Assets
import { NewestTutorialStyle } from './newest-tutorial.style';

// Components
import TutorialCard from '../../../templates/tutorial-card/tutorial-card';

function NewestTutorial({ detail, loading }) {
   return (
      <NewestTutorialStyle className="mx-auto max-w-[1150px]">
         {detail?.length ? (
            <>
               <p className="text-center font-lalezar text-3xl customMd:text-[50px]">آموزش ها</p>

               <div className="mx-[20px] mt-32">
                  {loading ? (
                     <div className="flex items-center justify-center">
                        <CircularProgress />
                     </div>
                  ) : (
                     <>
                        <div className="customSm:hidden">
                           <Swiper
                              spaceBetween={30}
                              navigation={{
                                 nextEl: '.swiper-button-next-custom',
                                 prevEl: '.swiper-button-prev-custom',
                              }}
                              pagination={{
                                 clickable: true,
                                 renderBullet(index, className) {
                                    return `<span class="w-2 h-2 rounded-full dark:bg-stone-300 ${className}"></span>`;
                                 },
                              }}
                              modules={[Pagination, Navigation]}
                              // eslint-disable-next-line tailwindcss/no-custom-classname
                              className="mySwiper"
                              centeredSlides
                              style={{ paddingBottom: '90px' }}
                              slidesPerView={1}
                           >
                              {detail?.map(item => (
                                 <SwiperSlide key={item.id}>
                                    <TutorialCard detail={item} />
                                 </SwiperSlide>
                              ))}

                              <div className="absolute inset-x-0 bottom-10 flex items-center justify-center gap-3 customSm:bottom-0 customSm:gap-64">
                                 <div
                                    // eslint-disable-next-line tailwindcss/no-custom-classname
                                    className="swiper-button-prev-custom z-10 flex cursor-pointer items-center justify-center rounded-full
                              bg-primaryBlue text-[28px] text-white customSm:h-14 customSm:w-14 customSm:text-[35px]"
                                 >
                                    <KeyboardArrowRightIcon fontSize="inherit" />
                                 </div>
                                 <div
                                    // eslint-disable-next-line tailwindcss/no-custom-classname
                                    className="swiper-button-next-custom z-10 flex cursor-pointer items-center justify-center rounded-full
                              bg-primaryBlue text-[28px] text-white customSm:h-14 customSm:w-14 customSm:text-[35px]"
                                 >
                                    <KeyboardArrowLeftIcon fontSize="inherit" />
                                 </div>
                              </div>
                           </Swiper>
                        </div>
                        <div className="hidden customSm:block">
                           <Grid container spacing={5} justifyContent="center">
                              {detail?.map(item => (
                                 <Grid item xs={4} key={item.id}>
                                    <TutorialCard detail={item} />
                                 </Grid>
                              ))}
                           </Grid>
                        </div>
                     </>
                  )}
               </div>
            </>
         ) : null}
      </NewestTutorialStyle>
   );
}

export default NewestTutorial;
