'use client';

export default function DownloadHeader() {
  return (
    <>
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .header-label { animation: fadeInDown 0.5s ease-out; }
        .header-title { animation: fadeInDown 0.5s ease-out 0.1s both; }
        .header-desc { animation: fadeInDown 0.5s ease-out 0.2s both; }
      `}</style>
      
      <section style={{ marginBottom: '80px' }}>
        <p className="header-label" style={{ fontSize: '13px', color: '#999', fontWeight: '500', letterSpacing: '1px', marginBottom: '8px', textTransform: 'uppercase' }}>资源下载</p>
        <h1 className="header-title" style={{ fontSize: '48px', fontWeight: '700', marginBottom: '24px', letterSpacing: '-1px', lineHeight: '1.1' }}>全部整合</h1>
        <p className="header-desc" style={{ fontSize: '16px', color: '#666', marginBottom: '24px', maxWidth: '600px' }}>优秀·和平·创意·友善 - 为您提供最好的Minecraft游戏体验</p>
      </section>
    </>
  );
}
