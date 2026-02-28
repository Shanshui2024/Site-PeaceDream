'use client';

export default function StatusBox() {
  return (
    <>
      <style>{`
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .status-box { animation: slideUpFade 0.7s ease-out 0.5s both; }
      `}</style>
      
      <section className="status-box" style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '100px', transition: 'all 0.4s ease' }} onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 16px 32px rgba(0,0,0,0.1)'; }} onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }}>
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#666', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>服务状态</h3>
          <p style={{ fontSize: '16px', color: '#000', marginBottom: '6px' }}>SakuraFRP 可用期至 2025年8月24日</p>
          <p style={{ fontSize: '13px', color: '#999' }}>Update: 竹寒心</p>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="/download" style={{ backgroundColor: '#000', color: '#fff', padding: '12px 28px', textDecoration: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: '500', transition: 'all 0.3s', display: 'inline-block' }} onMouseOver={(e) => { e.target.style.opacity = '0.8'; e.target.style.transform = 'translateY(-2px)'; }} onMouseOut={(e) => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }}>进入下载</a>
          <a href="https://qm.qq.com/cgi-bin/qm/qr?authKey=b3VxyMWTm7QQam3ygPJKqwPbVr7pMSWF8%2BBlRlcWkY%2F8SgGSXflppovvtpo8JXZo&k=f_XJsUMdqxG__u_gsykrRSOjrRx_9rkK&noverify=0" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#f5f5f5', color: '#000', padding: '12px 28px', textDecoration: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: '500', border: '1px solid #e0e0e0', transition: 'all 0.3s', display: 'inline-block' }} onMouseOver={(e) => { e.target.style.backgroundColor = '#000'; e.target.style.color = '#fff'; e.target.style.borderColor = '#000'; e.target.style.transform = 'translateY(-2px)'; }} onMouseOut={(e) => { e.target.style.backgroundColor = '#f5f5f5'; e.target.style.color = '#000'; e.target.style.borderColor = '#e0e0e0'; e.target.style.transform = 'translateY(0)'; }}>加入QQ群</a>
        </div>
      </section>
    </>
  );
}
