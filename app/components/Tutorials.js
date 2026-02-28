'use client';

export default function Tutorials() {
  const tutorials = [
    {
      title: 'MC Java 电脑端',
      description: '专为Java版Minecraft提供完整的开服指南和教学',
      videoUrl: 'https://image.shanshui.site/file/1772292001644_java.mp4',
    },
    {
      title: 'MC 基岩版',
      description: '基岩版Minecraft服务器部署完整解决方案',
      videoUrl: 'https://image.shanshui.site/file/1772291978382_bedrock.mp4',
    },
  ];

  return (
    <>
      <style>{`
        @keyframes slideUpIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .tutorial-card { animation: slideUpIn 0.6s ease-out forwards; opacity: 0; }
        .tutorial-card:nth-child(1) { animation-delay: 0.2s; }
        .tutorial-card:nth-child(2) { animation-delay: 0.4s; }
      `}</style>
      
      <section style={{ marginBottom: '60px', padding: '0 20px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '30px', letterSpacing: '-0.5px' }}>教程</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {tutorials.map((tutorial, idx) => (
            <div 
              key={idx} 
              className="tutorial-card"
              style={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e0e0e0', transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', overflow: 'hidden', cursor: 'pointer' }} 
              onMouseOver={(e) => { e.currentTarget.style.borderColor = '#000'; e.currentTarget.style.boxShadow = '0 16px 32px rgba(0,0,0,0.12)'; e.currentTarget.style.transform = 'translateY(-4px)'; }} 
              onMouseOut={(e) => { e.currentTarget.style.borderColor = '#e0e0e0'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', backgroundColor: '#000', overflow: 'hidden' }}>
                <iframe
                  src={tutorial.videoUrl}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  allowFullScreen
                  allow="fullscreen"
                />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#000' }}>{tutorial.title}</h3>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.8' }}>{tutorial.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
