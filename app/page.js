import Navigation from './components/Navigation';
import Hero from './components/Hero';
import StatusBox from './components/StatusBox';
import Tutorials from './components/Tutorials';
import Footer from './components/Footer';
import { PageContainer } from './components/CommonStyles';

export const metadata = {
  title: 'PeaceDream - 和梦团队',
  description: '优秀·和平·创意·友善。',
};

export default function Home() {
  return (
    <PageContainer maxWidth="1280px">
      <Navigation currentPage="home" />
      <Hero />
      <StatusBox />
      <Tutorials />
      <Footer />
    </PageContainer>
  );
}