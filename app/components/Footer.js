'use client';

export default function Footer() {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .footer-content { animation: fadeInUp 0.6s ease-out 0.4s both; }
      `}</style>
      
      <footer className="footer-content" style={{ textAlign: 'center', paddingTop: '60px', borderTop: '1px solid #e0e0e0', marginTop: '100px' }}>
        <p style={{ fontSize: '13px', color: '#999' }}>PeaceDream | 和梦团队</p>
      </footer>
    </>
  );
}
