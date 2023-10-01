// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { Pagination, FreeMode, Navigation } from 'swiper/modules';

// Icons
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// Assets
import { NewestTutorialStyle } from './newest-tutorial.style';
import articlePicTest from '../../../../assets/images/articlePicTest.png';
import articlePicTest2 from '../../../../assets/images/portfolioTest.png';
import articlePicTest3 from '../../../../assets/images/testPic.png';
import articlePicTest4 from '../../../../assets/images/user.jpg';

// Components
import TutorialCard from '../../../templates/tutorial-card/tutorial-card';

function NewestTutorial() {
  return (
    <NewestTutorialStyle>
      <p className="text-center font-lalezar text-3xl customMd:text-[60px]">
        آموزش های لازم
      </p>

      <div className="mx-[-20px] mt-32 customSm:mx-[-140px]">
        <Swiper
          spaceBetween={30}
          // loop
          freeMode
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
          modules={[FreeMode, Pagination, Navigation]}
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="mySwiper"
          style={{ paddingBottom: '90px' }}
          breakpoints={{
            280: {
              slidesPerView: 1,
            },
            450: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <TutorialCard imageSrc={articlePicTest} />
          </SwiperSlide>
          <SwiperSlide>
            <TutorialCard imageSrc={articlePicTest2} />
          </SwiperSlide>
          <SwiperSlide>
            <TutorialCard imageSrc={articlePicTest3} />
          </SwiperSlide>
          <SwiperSlide>
            <TutorialCard imageSrc={articlePicTest4} />
          </SwiperSlide>
          <SwiperSlide>
            <TutorialCard imageSrc={articlePicTest} />
          </SwiperSlide>
          <SwiperSlide>
            <TutorialCard imageSrc={articlePicTest2} />
          </SwiperSlide>
          <SwiperSlide>
            <TutorialCard imageSrc={articlePicTest3} />
          </SwiperSlide>
          <SwiperSlide>
            <TutorialCard imageSrc={articlePicTest4} />
          </SwiperSlide>
          <SwiperSlide>
            <TutorialCard imageSrc={articlePicTest2} />
          </SwiperSlide>

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
    </NewestTutorialStyle>
  );
}

export default NewestTutorial;
