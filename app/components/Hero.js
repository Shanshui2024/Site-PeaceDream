'use client';

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-title { animation: fadeInDown 0.6s ease-out; }
        .hero-subtitle { animation: fadeInDown 0.6s ease-out 0.2s both; }
        .hero-tagline { animation: fadeInDown 0.6s ease-out 0.4s both; }
      `}</style>
      
      <section style={{ marginBottom: '60px', padding: '0 20px', marginTop: '20px' }}>
        <h1 className="hero-title" style={{ fontSize: '40px', fontWeight: '700', marginBottom: '12px', letterSpacing: '-1px', lineHeight: '1.1', textAlign: 'left' }}>和梦团队</h1>
        <p className="hero-subtitle" style={{ fontSize: '24px', fontWeight: '600', color: '#666', marginBottom: '8px', letterSpacing: '-0.5px', textAlign: 'left' }}>PeaceDream</p>
        <p className="hero-tagline" style={{ fontSize: '14px', color: '#999', fontWeight: '500', letterSpacing: '1px', textAlign: 'left' }}>优秀·和平·创意·友善</p>
      </section>
    </>
  );
}
