// Components
import BannerHome from '../../components/pages/home/banner-home/banner-home';
import HowWeWork from '../../components/pages/home/how-we-work/how-we-work';
import NewestArticles from '../../components/pages/home/newest-articles/newest-articles';

function Home() {
  return (
    <main className="space-y-56">
      <BannerHome />
      <HowWeWork />
      <NewestArticles />
      <div />
    </main>
  );
}

export default Home;
