'use client';

export default function Disclaimer() {
  return (
    <>
      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .disclaimer-item { animation: fadeInLeft 0.5s ease-out forwards; opacity: 0; }
        .disclaimer-item:nth-child(1) { animation-delay: 0.1s; }
        .disclaimer-item:nth-child(2) { animation-delay: 0.15s; }
        .disclaimer-item:nth-child(3) { animation-delay: 0.2s; }
        .disclaimer-item:nth-child(4) { animation-delay: 0.25s; }
        .disclaimer-item:nth-child(5) { animation-delay: 0.3s; }
        .disclaimer-item:nth-child(6) { animation-delay: 0.35s; }
        .disclaimer-item:nth-child(7) { animation-delay: 0.4s; }
      `}</style>
      
      <section style={{ backgroundColor: '#fff', padding: '48px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '80px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px', color: '#000' }}>和梦团队下载专页必看</h2>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: '1.8', marginLeft: '20px' }}>
          <li className="disclaimer-item" style={{ marginBottom: '12px' }}>本网站所有内容均已经过真人真机上机测试，合法有效无毒，请放心使用。</li>
          <li className="disclaimer-item" style={{ marginBottom: '12px' }}>并非所有资源均同意转载分享，客户端所有权归原作者所有，若侵权请及时联系，我们会及时删除。侵权必究，让我们共同守护知识产权。</li>
          <li className="disclaimer-item" style={{ marginBottom: '12px' }}>内容下载会使用夸克网盘，请确保夸克网盘账号是否可用。</li>
          <li className="disclaimer-item" style={{ marginBottom: '12px' }}>所有的文件都建议解压后使用！</li>
          <li className="disclaimer-item" style={{ marginBottom: '12px' }}>群主在线期间，若您不想在网盘内下载，可以私信站主下载！请联系3059400953。</li>
          <li className="disclaimer-item" style={{ marginBottom: '12px' }}>若想上传你的资源，欢迎联系QQ：3059400953！</li>
          <li className="disclaimer-item">我们对所有的下载进行了初步的更新，您只需点击下划线的内容即可快速跳转网站！</li>
        </ul>
      </section>
    </>
  );
}