// Components
import BannerHome from '../../components/pages/home/banner-home/banner-home';
import BenefitsOfUs from '../../components/pages/home/benefits-of-us/benefits-of-us';
import Faqs from '../../components/pages/home/faqs/faqs';
import HowWeWork from '../../components/pages/home/how-we-work/how-we-work';
import NewestArticles from '../../components/pages/home/newest-articles/newest-articles';
import NewestTutorial from '../../components/pages/home/newest-tutorial/newest-tutorial';

// Apis
import usePromoteProduct from '../../apis/home/usePromoteProduct/usePromoteProduct';

function Home() {
   const { data: promoteProductData, isLoading: promoteProductIsLoading } = usePromoteProduct();

   return (
      <main className="mb-56 space-y-56">
         <BannerHome detail={promoteProductData} loading={promoteProductIsLoading} />
         <HowWeWork />
         <NewestArticles />
         <BenefitsOfUs />
         <NewestTutorial />
         <Faqs />
      </main>
   );
}

export default Home;
