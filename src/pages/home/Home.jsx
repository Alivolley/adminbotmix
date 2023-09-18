// Components
import BannerHome from '../../components/pages/home/banner-home/banner-home';
import Faqs from '../../components/pages/home/faqs/faqs';
import HowWeWork from '../../components/pages/home/how-we-work/how-we-work';
import NewestArticles from '../../components/pages/home/newest-articles/newest-articles';
import NewestTutorial from '../../components/pages/home/newest-tutorial/newest-tutorial';

function Home() {
  return (
    <main className="space-y-40">
      <BannerHome />
      <HowWeWork />
      <NewestArticles />
      <NewestTutorial />
      <Faqs />
      <div />
    </main>
  );
}

export default Home;
