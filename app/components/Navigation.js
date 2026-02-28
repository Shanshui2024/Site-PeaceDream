'use client';

import { useState, useEffect } from 'react';

export default function Navigation({ currentPage = 'home' }) {
  const isHome = currentPage === 'home';
  const isDownload = currentPage === 'download';
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 向下滚动时隐藏，向上滚动时显示
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <style>{`
        .nav-link { 
          position: relative; 
          transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link::after { 
          content: ''; 
          position: absolute; 
          bottom: -2px; 
          left: 0; 
          width: 0; 
          height: 2px; 
          background: #000; 
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1); 
        }
        .nav-link.active::after { 
          width: 100%; 
        }
        .nav-link:hover::after { 
          width: 100%; 
        }
        .navbar-hidden {
          transform: translateY(-100%);
        }
        .navbar-visible {
          transform: translateY(0);
        }
        .logo {
          height: 32px;
          width: 32px;
          margin-right: 12px;
          border-radius: 6px;
        }
      `}</style>
      
      <nav style={{ 
        backgroundColor: '#fff', 
        borderBottom: '1px solid #e0e0e0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease-in-out',
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '20px', fontWeight: '600', color: '#000', letterSpacing: '-0.5px' }}>
            <img 
              src="https://image.shanshui.site/file/1772292721030_1753d26de273f43c6cc9077059ff3040.webp" 
              alt="PeaceDream Logo" 
              className="logo"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            PeaceDream | 和梦团队
          </div>
          <div style={{ display: 'flex', gap: '24px', fontSize: '14px' }}>
            <a 
              href="/" 
              className={`nav-link ${isHome ? 'active' : ''}`} 
              style={{ 
                color: isHome ? '#000' : '#999',
                textDecoration: 'none', 
                fontWeight: '500', 
                paddingBottom: '4px' 
              }} 
              onMouseOver={(e) => { if (!isHome) e.target.style.color = '#000'; }} 
              onMouseOut={(e) => { if (!isHome) e.target.style.color = '#999'; }}
            >
              主页
            </a>
            <a 
              href="/download" 
              className={`nav-link ${isDownload ? 'active' : ''}`} 
              style={{ 
                color: isDownload ? '#000' : '#999',
                textDecoration: 'none', 
                fontWeight: '500', 
                paddingBottom: '4px' 
              }} 
              onMouseOver={(e) => { if (!isDownload) e.target.style.color = '#000'; }} 
              onMouseOut={(e) => { if (!isDownload) e.target.style.color = '#999'; }}
            >
              下载
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}