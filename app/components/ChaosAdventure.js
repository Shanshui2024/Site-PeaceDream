'use client';

export default function ChaosAdventure() {
  return (
    <>
      <style>{`
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .chaos-section { animation: slideUpFade 0.6s ease-out 0.3s both; }
        .chaos-btn { transition: all 0.3s ease; }
        .chaos-btn:nth-child(1) { animation: slideUpFade 0.5s ease-out 0.7s both; }
        .chaos-btn:nth-child(2) { animation: slideUpFade 0.5s ease-out 0.85s both; }
        
        /* 响应式布局 */
        @media (max-width: 768px) {
          .chaos-section {
            padding: 32px 20px !important;
            margin-bottom: 40px !important;
          }
          
          .chaos-header {
            flex-direction: column !important;
            text-align: center !important;
            margin-bottom: 20px !important;
          }
          
          .chaos-logo {
            margin-right: 0 !important;
            margin-bottom: 16px !important;
          }
          
          .chaos-title {
            font-size: 24px !important;
          }
          
          .chaos-description {
            font-size: 16px !important;
            margin-bottom: 20px !important;
          }
          
          .chaos-content {
            font-size: 16px !important;
            margin-bottom: 20px !important;
          }
          
          .chaos-image {
            margin-bottom: 20px !important;
          }
          
          .chaos-buttons {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          
          .chaos-btn {
            padding: 12px 20px !important;
            font-size: 16px !important;
          }
        }
        
        @media (max-width: 480px) {
          .chaos-section {
            padding: 24px 16px !important;
          }
          
          .chaos-title {
            font-size: 20px !important;
          }
          
          .chaos-description {
            font-size: 14px !important;
          }
          
          .chaos-content {
            font-size: 14px !important;
          }
          
          .chaos-logo {
            width: 48px !important;
            height: 48px !important;
          }
        }
      `}</style>
      
      <section className="chaos-section" style={{ backgroundColor: '#fff', padding: '48px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '80px' }}>
        <div className="chaos-header" style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <img
            className="chaos-logo"
            src="https://pd123.my.canvasite.cn/download/_assets/media/e7ac9a583f5e5902527eca61293320d9.png"
            alt="Chaos Adventure Logo"
            style={{ width: '60px', height: '60px', objectFit: 'contain', marginRight: '16px' }}
          />
          <h2 className="chaos-title" style={{ fontSize: '30px', fontWeight: '600', color: '#000', margin: 0 }}>Chaos Adventure | 混乱冒险生存</h2>
        </div>
        <p className="chaos-description" style={{ color: '#666', marginBottom: '24px', fontSize: '28px' }}>
          双工作室合作出品整合包项目
        </p>
        <p className="chaos-content" style={{ color: '#666', marginBottom: '24px', lineHeight: '1.8', fontSize: '20px' }}>
          每个Boss都拥有独特的背景故事与挑战机制。怪物种类丰富，从普通小怪到精英怪逐步升级，带来多样战斗体验。武器设计炫酷且功能各异，让玩家在畅爽打击感中感受探索的乐趣。
        </p>
        
        <img 
          className="chaos-image"
          src="https://pd123.my.canvasite.cn/download/_assets/media/b0eec2c1c7db0445cf9dac588e45abfd.png" 
          alt="Chaos Adventure" 
          style={{ width: '100%', borderRadius: '6px', marginBottom: '24px', objectFit: 'contain' }}
        />
        
        <div className="chaos-buttons" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          <a className="chaos-btn" href="https://www.123684.com/s/2GNBjv-Gtewh" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#000', color: '#fff', padding: '14px 24px', textDecoration: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: '500', textAlign: 'center' }} onMouseOver={(e) => { e.target.style.opacity = '0.8'; e.target.style.transform = 'translateY(-2px)'; }} onMouseOut={(e) => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }}>123云盘</a>
          <a className="chaos-btn" href="https://pan.quark.cn/s/f81da337969c" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#f5f5f5', color: '#000', padding: '14px 24px', textDecoration: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: '500', border: '1px solid #e0e0e0', transition: 'all 0.3s', textAlign: 'center' }} onMouseOver={(e) => { e.target.style.backgroundColor = '#000'; e.target.style.color = '#fff'; e.target.style.borderColor = '#000'; e.target.style.transform = 'translateY(-2px)'; }} onMouseOut={(e) => { e.target.style.backgroundColor = '#f5f5f5'; e.target.style.color = '#000'; e.target.style.borderColor = '#e0e0e0'; e.target.style.transform = 'translateY(0)'; }}>夸克网盘</a>
        </div>
      </section>
    </>
  );
}