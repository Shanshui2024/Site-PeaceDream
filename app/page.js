import Navigation from './components/Navigation';
import Hero from './components/Hero';
import StatusBox from './components/StatusBox';
import Tutorials from './components/Tutorials';
import Footer from './components/Footer';

export const metadata = {
  title: 'PeaceDream - 和梦团队',
  description: '优秀·和平·创意·友善。',
};

export default function Home() {
  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", lineHeight: '1.6', color: '#1a1a1a', minHeight: '100vh', backgroundColor: '#fafafa' }}>
      <Navigation currentPage="home" />

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 40px' }}>
        <Hero />
        <StatusBox />
        <Tutorials />
        <Footer />
      </main>
    </div>
  );
}