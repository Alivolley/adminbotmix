// Components
import BannerHome from '../../components/pages/home/banner-home/banner-home';
import BenefitsOfUs from '../../components/pages/home/benefits-of-us/benefits-of-us';
import Faqs from '../../components/pages/home/faqs/faqs';
import HowWeWork from '../../components/pages/home/how-we-work/how-we-work';
import NewestArticles from '../../components/pages/home/newest-articles/newest-articles';
import NewestTutorial from '../../components/pages/home/newest-tutorial/newest-tutorial';

function Home() {
  return (
    <main className="mb-56 space-y-56">
      <BannerHome />
      <HowWeWork />
      <NewestArticles />
      <BenefitsOfUs />
      <NewestTutorial />
      <Faqs />
    </main>
  );
}

export default Home;
